import { axiosPost, useMutation, useState } from '../imports'

export const useCertificateOrgDocViewModel = (): any => {
  const [disapprovalResult, setDisapprovalResult] = useState([])

  const updateStatusDevice = async ({
    params,
    url,
    version,
  }: any): Promise<any> => {
    await axiosPost({ url, params, version })
  }

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (e: any) => updateStatusDevice(e),
    onSuccess: async () => {
      //   await refetchUserInfo()
    },
  })

  const onsubmitConfirm = async ({ body, url, version }): Promise<any> => {
    await mutateAsync({ body, url, version })
  }
  const handleConfirm = async ({ id, url }: any): Promise<void> => {
    const body = {
      company_id: id,
      authentication_result_ids: disapprovalResult?.map((item) => {
        return item?.id
      }),
    }

    await onsubmitConfirm({
      url,
      body,
      version: 'v2',
    })
  }

  return { handleConfirm, isPending, setDisapprovalResult }
}
