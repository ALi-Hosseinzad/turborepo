import type {
  FormikHelpers,
  PageUrlCreateViewModelType,
  PageUrlFormDataType,
} from '../imports'
import {
  axiosPost,
  PAGE_URL_URL,
  showSuccess,
  useMutation,
  usePageUrlListViewModel,
  useTranslations,
} from '../imports'

export const usePageUrlCreateViewModel = (): PageUrlCreateViewModelType => {
  const t = useTranslations()
  const { refetchList } = usePageUrlListViewModel()

  const initialValues = {
    name: '',
    description: '',
    href: '',
    slug: '',
    type: { value: '', label: '' },
  }

  const { mutateAsync, isPending: isLoading } = useMutation({
    mutationFn: (body: PageUrlFormDataType) =>
      axiosPost({
        url: PAGE_URL_URL,
        body,
      }),
  })

  const onSubmit = async (
    values: PageUrlFormDataType,
    formikProps: FormikHelpers<PageUrlFormDataType>,
  ): Promise<void> => {
    const body: PageUrlFormDataType = {
      ...values,
      type: values.type?.value,
    }
    if (values.description && values.description.length === 0) {
      delete body.description
    }

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
