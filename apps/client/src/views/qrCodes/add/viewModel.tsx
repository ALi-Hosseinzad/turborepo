import {
  QR_CODE_LIST_QUERY,
  useAxiosMutation,
  useQueryClient,
  WALLET_QR_CODE_URL,
} from '../imports'

export const useAddNewQrCodeViewModel = (handleClose) => {
  const initialValues = {
    title: '',
    price: '',
    description: '',
  }

  const queryClient = useQueryClient()
  const { mutateAsync, isPending: isPendingPostData } = useAxiosMutation(
    WALLET_QR_CODE_URL,
    'post',
  )
  const handleAddNewQrCode = (values) => {
    const body = {
      title: values.title,
      amount: values.price,
      description: values.description,
    }

    mutateAsync(body)
      .then(() =>
        queryClient.invalidateQueries({
          queryKey: [QR_CODE_LIST_QUERY],
        }),
      )
      .then(() => handleClose())
  }

  return { initialValues, handleAddNewQrCode, isPendingPostData }
}
