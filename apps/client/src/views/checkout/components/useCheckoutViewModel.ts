import {
  type BreadcrumbType,
  ORDER_URL,
  ORDERS,
  useAxiosQuery,
  useTranslations,
} from '../import'

export const useCheckoutViewModel = (orderId: number | undefined) => {
  const t = useTranslations()

  const {
    data: dataCheckout,
    isSuccess: isSuccessCheckout,
    isLoading: isLoadingCheckout,
  } = useAxiosQuery({
    url: `${ORDER_URL}/${orderId}`,
    queryKey: [`ORDER_CHECKOUT-${orderId}`],
    //TODO:@omid: chace is cleared after 5min and all data in checkout turn to NAN .

    staleTime: Infinity,
    gcTime: Infinity,
  })

  const getBreadCrumbs = (): BreadcrumbType[] => {
    return [
      {
        name: t('orders'),
        url: ORDERS,
      },
      {
        name: `${t('order')}${dataCheckout?.id ?? ''}`,
        url: `${ORDERS}/${dataCheckout?.id ?? ''}`,
      },
    ]
  }

  return {
    getBreadCrumbs,
    dataCheckout,
    isSuccessCheckout,
    isLoadingCheckout,
  }
}
