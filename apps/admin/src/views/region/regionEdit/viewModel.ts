import {
  type CreateValuesType,
  type EditViewModelType,
  REGION_LIST_QUERY,
  REGION_URL,
  useCallback,
  useEdit,
  useListViewModel,
} from '../imports'

const useViewModelEditRegion = (): EditViewModelType => {
  const { refetchList, isFetching } = useListViewModel({
    url: REGION_URL,
    queryKey: REGION_LIST_QUERY,
  })

  const handleInitial = (dataRegionEdit: any): CreateValuesType => {
    return {
      name: dataRegionEdit ? dataRegionEdit?.name : '',
      currencyId: dataRegionEdit?.currency
        ? {
            id: dataRegionEdit?.currency?.id.toString(),
            name: `${dataRegionEdit?.currency?.name}  ${dataRegionEdit?.currency?.symbol}`,
          }
        : null,
      flag_image: dataRegionEdit ? dataRegionEdit?.flag : '',
      symbol: dataRegionEdit ? dataRegionEdit?.symbol : '',
      slug: dataRegionEdit ? dataRegionEdit?.slug : '',
      status: dataRegionEdit?.status,
    }
  }

  const handleBody = useCallback((values: any): object => {
    return {
      ...values,
    }
  }, [])

  const { editData, isLoadingEditData, submitRequest, isPendingSubmitEdit } =
    useEdit({
      url: REGION_URL,
      handleBody,
      handleInitial,
      queryKey: 'region',
      method: 'post',
    })

  const onSubmit = (body: any): void => {
    const curBody = { ...body, currency_id: body.currencyId.id }
    delete curBody.currencyId
    submitRequest(handleBody(curBody), refetchList)
  }

  return {
    initialValues: handleInitial(editData),
    editData,
    isPendingSubmitEdit: isFetching || isPendingSubmitEdit,
    isLoadingEditData,
    onSubmit,
  }
}

export default useViewModelEditRegion
