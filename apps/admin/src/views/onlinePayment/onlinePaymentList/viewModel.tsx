import {
  SERVICE_URL,
  useListViewModel,
  type UseListViewModelType,
  useTranslations,
} from '../imports'

export const useOnlinePaymentListViewModel = (): UseListViewModelType => {
  const t = useTranslations()
  const {
    data,
    page,
    isLoading,
    pageCount,
    isFetching,
    refetchList,
    onChangePage,
    onErrorDelete,
    afterDeleteHandler,
  } = useListViewModel({
    queryKey: 'onlinePayments',
    url: SERVICE_URL,
  })

  const handleBodyInfo = (curData: any): any[] => {
    return curData?.data?.map(
      ({
        id,
        regions,
        min_price: minPrice,
        max_price: maxPrice,
        title,
        form,
        category,
        tags,
        status_label: statusLabel,
      }) => {
        return {
          id,
          serviceName: title,
          category: category.map((cat: any) => cat.name).join(', '),
          minPrice,
          maxPrice,
          region: regions.map((region: any) => region.name).join(', '),
          form: form.name,
          tags: tags.map((tag: any) => tag.name).join(', '),
          statusLabel,
        }
      },
    )
  }

  const headInfo = [
    t('id'),
    t('serviceName'),
    t('category'),
    t('minPrice'),
    t('maxPrice'),
    t('region'),
    t('form'),
    t('tags'),
    t('status'),
  ]

  return {
    page,
    headInfo,
    pageCount,
    isLoading,
    isFetching,
    refetchList,
    onChangePage,
    onErrorDelete,
    afterDeleteHandler,
    bodyInfo: handleBodyInfo(data),
  }
}
