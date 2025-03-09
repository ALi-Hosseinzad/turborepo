import { useTranslations } from 'use-intl'
import { useMutation } from '@tanstack/react-query'
import { axiosPost } from 'configs/httpService/axios/httpService'
import { showError, showSuccess } from './useToust'

export const useCreate = ({ url }): any => {
  const t = useTranslations()

  const {
    mutateAsync,
    isPending: isLoadingSubmit,
    isSuccess: isSuccessSubmit,
  } = useMutation({
    mutationFn: (body: any) =>
      axiosPost({
        url,
        body,
      }),
  })

  const handleRequest = async (
    body: any,
    refetchList: any,
    formikProps: any,
  ): Promise<void> => {
    await mutateAsync(body)
      .then(async () => {
        showSuccess(t('addedSuccessfully'))
        formikProps?.resetForm()
        await refetchList()
      })
      .catch((error) => {
        showError(error?.message)
      })
  }

  return {
    isLoadingSubmit,
    isSuccessSubmit,
    handleRequest,
  }
}
