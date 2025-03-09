import {
  axiosGet,
  GIFT_CARD_PACKAGE_URL,
  useOrderListViewModel,
  useQuery,
  USER_URL,
} from '../imports'

export const useDashboardViewModel = (): {
  bodyInfo: any
  dataOrder: any
  dataUser: any
  dataGiftCardPakage: any
  isLoading: boolean
} => {
  const { data: dataOrder } = useOrderListViewModel()

  const { data: dataUser, isLoading } = useQuery({
    queryKey: ['user-Dashboard'],
    queryFn: () =>
      axiosGet({
        url: USER_URL,
      }),
  })

  const { data: dataGiftCardPakage } = useQuery({
    queryKey: ['user-GIFT-CARD-PACKAGE'],
    queryFn: () =>
      axiosGet({
        url: GIFT_CARD_PACKAGE_URL,
      }),
  })

  const handleBodyInfo = (body: any): any => {
    return body?.reduce(
      (accumulator: number, item: { full_price_after_discount: number }) => {
        return accumulator + Math.ceil(item.full_price_after_discount)
      },
      0,
    )
  }

  return {
    bodyInfo: handleBodyInfo(dataOrder?.data),
    dataOrder,
    dataUser,
    dataGiftCardPakage,
    isLoading,
  }
}
