import { axiosPut, showError, useMutation } from '../../imports'

export const useCertificateFormLayoutViewModel = (
  refetchUserInfo: () => Promise<any>,
): any => {
  const updateUserDetailsInfo = async ({
    params,
    url,
    version,
  }): Promise<any> => {
    await axiosPut({ url, params, version })
  }

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (e: any) => updateUserDetailsInfo(e),
    onSuccess: async () => {
      await refetchUserInfo()
    },
    onError: () => {
      showError('some thing went wrong')
    },
  })

  const onsubmitConfirm = async ({ params, url, version }): Promise<any> => {
    await mutateAsync({ params, url, version })
  }

  const handleConfirm = async ({
    id,
    url,
    querykey,
    value,
  }: any): Promise<void> => {
    const params = {
      [querykey]: value,
    }

    await onsubmitConfirm({
      url: `${url}/${id}`,
      params,
      version: 'v2',
    })
  }

  return {
    handleConfirm,
    isPending,
  }
}
