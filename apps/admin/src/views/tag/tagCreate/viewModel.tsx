import type { UseTagCreateViewModelType } from '../imports'
import {
  axiosPost,
  showSuccess,
  TAG_URL,
  useListViewModel,
  useMutation,
  useTranslations,
} from '../imports'

export const useTagCreateViewModel = (): UseTagCreateViewModelType => {
  const t = useTranslations()

  const initialValues = {
    name: '',
    slug: '',
  }
  const { refetchList }: any = useListViewModel({
    url: TAG_URL,
    queryKey: 'tag-list',
  })
  const createTag = async (body): Promise<void> => {
    await axiosPost({ url: TAG_URL, body })
  }
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (e) => createTag(e),
    async onSuccess() {
      showSuccess(`${t('tag')} ${t('addedSuccessfully')} `)
      await refetchList()
    },
  })
  const handleAddNewProduct = async (
    values: { name: any; slug: any },
    formikProps: { resetForm: () => any },
  ): Promise<any> => {
    const body = {
      name: values?.name,
      slug: values?.slug,
    }

    const mainBody = body
    await mutateAsync(mainBody as any).then(() => formikProps.resetForm())
  }

  return {
    initialValues,
    handleAddNewProduct,
    isPending,
  }
}
