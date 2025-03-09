import {
  axiosGet,
  axiosPut,
  CURRENCY_LIST_QUERY,
  CURRENCY_URL,
  getChangedObjectValues,
  showSuccess,
  type UseCurrencyEditViewModelType,
  useEffect,
  useListViewModel,
  useMutation,
  useParams,
  useQuery,
  useState,
  useTranslations,
} from '../imports'

export const useCurrencyEditViewModel = (): UseCurrencyEditViewModelType => {
  const t = useTranslations()
  const { id: paramId } = useParams()
  const [editedValues, setEditedValues] = useState<any>()

  const headInfo = [t('id'), t('title'), t('answer')]

  const { refetchList } = useListViewModel({
    url: CURRENCY_URL,
    queryKey: CURRENCY_LIST_QUERY,
  })

  const { data: currencyData, isLoading: isLoadingCurrenciesData } = useQuery({
    queryKey: ['Currencies', paramId],
    queryFn: () =>
      axiosGet({
        url: `${CURRENCY_URL}/${paramId as string}`,
      }),
  })

  const initialValues = {
    name: currencyData?.name || '',
    symbol: currencyData?.symbol || '',
    status: currencyData?.status || '',
    exchange_price: Number(currencyData?.exchange_money_active) || '',
  }

  const editNewRole = async (params): Promise<any> => {
    await axiosPut({ url: `${CURRENCY_URL}/${paramId as string}`, params })
  }

  const { mutateAsync, isPending: isLoadingSubmit } = useMutation({
    mutationFn: (e) => editNewRole(e),
    async onSuccess() {
      await refetchList?.()
      showSuccess(t('editedSuccessfully'))
    },
  })

  const onSubmit = async (values: any): Promise<void> => {
    const changedValues: any = getChangedObjectValues(values, editedValues)
    await mutateAsync(changedValues)
  }

  useEffect(() => {
    if (!isLoadingCurrenciesData) {
      setEditedValues(initialValues)
    }
  }, [isLoadingCurrenciesData])

  return {
    initialValues,
    isLoading: isLoadingCurrenciesData || isLoadingSubmit,
    onSubmit,
    headInfo,
    currencyData,
  }
}
