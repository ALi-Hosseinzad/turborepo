import {
  RecommendedProductsView,
  useRecommendedProductsViewModel,
} from '../import'

export const RecommendedProducts = () => {
  const { recommendedProductsList, isLoading, isError, haldleProductClick } =
    useRecommendedProductsViewModel()

  return (
    <RecommendedProductsView
      recommendedProductsList={recommendedProductsList}
      haldleProductClick={haldleProductClick}
      isLoading={isLoading}
      isError={isError}
    />
  )
}
