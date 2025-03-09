import { DISCOUNT_URL, useListViewModel, useTranslations } from '../imports'

export const useDiscountListViewModel = (): any => {
  const t = useTranslations()
  const headInfo = [
    t('id'),
    t('code'),
    t('discountAmount'),
    t('min'),
    t('max'),
    t('type'),
    t('service'),
    t('status'),
    t('expireDay'),
  ]

  const {
    page,
    data,
    isLoading,
    pageCount,
    refetchList,
    onChangePage,
    onErrorDelete,
    afterDeleteHandler,
    isFetching,
  } = useListViewModel({
    queryKey: 'getDiscountList',
    url: DISCOUNT_URL,
  })

  const handleBodyInfo = (body: any): any[] => {
    return body?.map(
      ({
        id,
        code,
        amount,
        min,
        max,
        what_for: whatFor,
        amount_type: amountType,
        status,
        type_label: typelabel,
        expire_day: expireDay,
      }) => {
        return {
          id,
          code,
          amount: ` ${amount} ${amountType === 'numeric' ? t('toman') : t('percent')}`,
          min,
          max,
          type: typelabel,
          whatFor,
          status: status === 'active' ? t('active') : t('disable'),
          expireDay,
        }
      },
    )
  }

  return {
    page,
    onErrorDelete,
    headInfo,
    bodyInfo: handleBodyInfo(data?.data),
    isLoading,
    pageCount,
    onChangePage,
    afterDeleteHandler,
    refetchList,
    isFetching,
  }
}
