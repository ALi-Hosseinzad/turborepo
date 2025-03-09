import {
  type CreateValuesType,
  REGION_URL,
  type ReionInfotype,
  useCreate,
  useListViewModel,
} from '../imports'

const useReionCreateViewModel = (): any => {
  const {
    isLoadingSubmit,
    handleRequest,
    isSuccessSubmit: isSuccessCreate,
  } = useCreate({
    url: REGION_URL,
  })

  const { refetchList, isFetching } = useListViewModel({
    url: REGION_URL,
    queryKey: 'region-list',
  })

  const initialValues: CreateValuesType = {
    name: '',
    currencyId: '',
    flag_image: '',
    symbol: '',
    slug: '',
    status: 'active',
  }

  const onSubmit = (values: any, formikProps: any): void => {
    const body: ReionInfotype = {
      name: values?.name,
      status: values?.status.length == 0 ? 'active' : values?.status,
      currency_id: values?.currencyId?.id,
      flag_image: values?.flag_image,
      symbol: values?.symbol,
      slug: values?.slug,
    }
    handleRequest(body, refetchList, formikProps)
  }

  return {
    onSubmit,
    initialValues,
    isLoading: isLoadingSubmit || isFetching,
    isSuccessCreate,
  }
}

export default useReionCreateViewModel
