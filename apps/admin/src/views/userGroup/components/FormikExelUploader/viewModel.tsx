import {
  axiosPost,
  GROUP_EXCEL_URL,
  showSuccess,
  useMutation,
  useTranslations,
  yup,
} from '../../imports'

export const useFormikExelUploader = (): any => {
  const t = useTranslations()

  const { mutateAsync, isPending: isLoadingSubmit } = useMutation({
    mutationFn: (body: any) => {
      const formData = new FormData()
      formData.append('file', body.file)

      return axiosPost({
        url: GROUP_EXCEL_URL,
        body: formData,
      }).then(() => {
        showSuccess(t('addedSuccessfully'))
      })
    },
  })

  const validationSchema = yup.object({
    file: yup.string().required(t('required')),
  })

  return {
    mutateAsync,
    isLoadingSubmit,
    validationSchema,
  }
}
