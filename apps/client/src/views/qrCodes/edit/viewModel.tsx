import { useQueryClient } from '@tanstack/react-query'
import { useAxiosMutation } from '@/hooks/useAxiosMutation'
import { UseRialToToman } from '@/hooks/useRialToToman'
import { QR_CODE_LIST_QUERY, QR_CODE_QUERY } from '@/constants/queryKeys'
import { useAxiosQuery, UseTomanToRial, WALLET_QR_CODE_URL } from '../imports'

export const useEditNewQrCodeViewModel = (id, open, handleClose) => {
  const selectFunction = (data) => {
    return {
      title: data?.title,
      price: UseTomanToRial(data?.amount),
      description: data?.description,
    }
  }
  const { data, isLoading: isLoadingGetData } = useAxiosQuery({
    url: `${WALLET_QR_CODE_URL}/${id}`,
    queryKey: [QR_CODE_QUERY, id],
    enabled: open,
    selectFn: selectFunction,
  })
  const queryClient = useQueryClient()
  const { mutateAsync, isPending: isPendingPostData } = useAxiosMutation(
    `${WALLET_QR_CODE_URL}/${id}`,
    'putQuery',
  )

  const handleEditQrCode = (values) => {
    const params = {
      title: values.title,
      amount: UseRialToToman(values?.price),
      description: values.description,
    }
    mutateAsync(params)
      .then(() =>
        queryClient.invalidateQueries({
          queryKey: [QR_CODE_LIST_QUERY],
        }),
      )
      .then(() => handleClose())
  }
  return {
    initialValues: data,
    handleEditQrCode,
    isLoadingGetData,
    isPendingPostData,
  }
}
