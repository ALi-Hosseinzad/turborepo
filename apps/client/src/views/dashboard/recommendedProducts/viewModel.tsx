import {
  GIFT_CARD,
  RECOMMENDED_SUGGESTION_URL,
  useAxiosQuery,
  useRouter,
} from '../import'

export const useRecommendedProductsViewModel = () => {
  const router = useRouter()

  const { data, isLoading, isSuccess, isError } = useAxiosQuery({
    url: RECOMMENDED_SUGGESTION_URL,
    queryKey: ['recommended-products-list'],
  })
  let list = []

  if (isSuccess) {
    list = data?.map(
      ({
        price,
        gift_card_package: giftCardPackage,
        region,
        amount,
        price_after_discount: priceAfterDiscount,
        full_price: fullPrice,
      }) => {
        return {
          id: giftCardPackage?.id,
          image: giftCardPackage?.image,
          flag: region.flag,
          title: giftCardPackage?.title,
          currency: region?.currency,
          region: region?.title,
          price,
          amount,
          priceAfterDiscount,
          fullPrice,
        }
      },
    )
  }

  const haldleProductClick = (productId: string | number) => {
    router.push(`${GIFT_CARD}/${productId}` as any)
  }

  return {
    recommendedProductsList: list,
    isLoading,
    isError,
    haldleProductClick,
  }
}
