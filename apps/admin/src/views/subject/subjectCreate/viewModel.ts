import type { UseSubjectCreateViewModelType } from '../imports'
import {
  axiosPost,
  showSuccess,
  SUBJECT_URL,
  useMutation,
  useSubjectListViewModel,
  useTranslations,
} from '../imports'

export const useSubjectCreateViewModel = (): UseSubjectCreateViewModelType => {
  const t = useTranslations()
  const { refetchList } = useSubjectListViewModel()

  const initialValues = {
    title: '',
    icon: '',
    role_ids: [],
  }

  const { mutateAsync, isPending: isLoading } = useMutation({
    mutationFn: (body: any) =>
      axiosPost({
        url: SUBJECT_URL,
        body,
      }),
  })

  const onSubmit = async (values, formikProps): Promise<void> => {
    const body = { ...values, role_ids: values.role_ids.map((item) => item.id) }
    await mutateAsync(body).then(async () => {
      formikProps.resetForm()
      showSuccess(t('addedSuccessfully'))
      await refetchList()
    })
  }

  return {
    initialValues,
    isLoading,
    onSubmit,
    refetchList,
  }
}
