import {
  axiosGet,
  axiosPut,
  getChangedObjectValues,
  PAGE_URL_URL,
  showSuccess,
  useEffect,
  useMutation,
  usePageUrlListViewModel,
  useParams,
  useQuery,
  useState,
  useTranslations,
} from '../imports'

export const usePageUrlEditViewModel = (): any => {
  const t = useTranslations()
  const { id: paramId } = useParams()
  const { refetchList } = usePageUrlListViewModel()
  const [editedValues, setEditedValues] = useState<any>()

  const {
    data: PageUrlData,
    isLoading: isLoadingPageUrlData,
    refetch,
  } = useQuery({
    queryKey: ['PageUrl', paramId],
    queryFn: () =>
      axiosGet({
        url: `${PAGE_URL_URL}/${paramId as string}`,
      }),
  })

  const initialValues = {
    name: PageUrlData?.name || '',
    href: PageUrlData?.href || '',
    slug: PageUrlData?.slug || '',
    description: PageUrlData?.description || '',
    type: PageUrlData?.type
      ? { value: PageUrlData?.type, label: PageUrlData?.type_label }
      : null,
  }

  const editNewRole = async (params): Promise<any> => {
    await axiosPut({ url: `${PAGE_URL_URL}/${paramId as string}`, params })
  }
  const { mutateAsync, isPending: isLoadingSubmit } = useMutation({
    mutationFn: (e) => editNewRole(e),

    async onSuccess() {
      await refetch()
      await refetchList()
      showSuccess(t('editedSuccessfully'))
    },
  })
  const onSubmit = async (values: any): Promise<void> => {
    const changedValues: any = getChangedObjectValues(values, editedValues)

    if (changedValues.type) {
      const body = {
        ...changedValues,
        type: changedValues.type.value,
      }
      await mutateAsync(body)
    } else {
      await mutateAsync(changedValues)
    }
  }

  const isLoading = isLoadingPageUrlData || isLoadingSubmit

  useEffect(() => {
    if (!isLoadingPageUrlData) {
      setEditedValues(initialValues)
    }
  }, [isLoadingPageUrlData])

  return {
    initialValues,
    isLoading,
    onSubmit,
    PageUrlData,
    isLoadingPageUrlData,
  }
}
