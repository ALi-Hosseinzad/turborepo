import { getChangedObjectValues } from 'utils/objectsMethods'
import { useListViewModel } from 'components/list/viewModel'
import type { UseTagEditViewModelType } from '../imports'
import {
  axiosGet,
  axiosPut,
  showSuccess,
  TAG_URL,
  useEffect,
  useMutation,
  useParams,
  useQuery,
  useState,
  useTranslations,
} from '../imports'

export const useTagEditViewModel = (): UseTagEditViewModelType => {
  const t = useTranslations()
  const { refetchList } = useListViewModel({
    url: TAG_URL,
    queryKey: 'tag-list',
  })
  const { id }: { id: string } = useParams()

  const [initialValues, setInitialValues] = useState({
    name: '',
    slug: '',
  })
  const { data, isLoading: isLoadingGetData } = useQuery({
    queryKey: ['tag-list-id', id],
    queryFn: () =>
      axiosGet({
        url: `${TAG_URL}/${id}`,
      }),
    enabled: id != undefined,
  })

  useEffect(() => {
    if (data) {
      const { name, slug } = data
      const initialProduct = {
        name,
        slug,
      }
      setInitialValues(initialProduct)
    }
  }, [data])

  const editTag = async (params): Promise<any> => {
    await axiosPut({ url: `${TAG_URL}/${id}`, params })
  }
  const { mutateAsync, isPending: isPendingPostData } = useMutation({
    mutationFn: (e) => editTag(e),
    onSuccess() {
      showSuccess(`${t('tag')} ${t('editedSuccessfully')} `)
      refetchList
    },
  })
  const handleEditNewProduct = async (values: {
    name: string
    slug: string
  }): Promise<any> => {
    const changedValues: any = getChangedObjectValues(values, initialValues)

    const body = {
      ...changedValues,
      id,
    }

    await mutateAsync(body)
  }
  return {
    initialValues,
    handleEditNewProduct,
    isPendingPostData,
    isLoadingGetData,
  }
}
