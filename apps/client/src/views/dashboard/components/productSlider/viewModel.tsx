import { ProductBox } from '@/components/cards/productBox'
import { ProductCardSkeleton, useWindowDimensions } from '../../import'

export const useProductSliderViewModel = (queryKeyForRefetch) => {
  const { width } = useWindowDimensions()
  const getCardNumberInRow = (width) => {
    return width > 650 ? 2 : 1
  }
  const handleSliceArray = ({ productsList, start, stop }) => {
    return (
      <div className={`grid gap-4 grid-cols-${getCardNumberInRow(width)}`}>
        {productsList
          ?.slice(start, stop)
          ?.map((item: any) => (
            <ProductBox data={item} queryKeyForRefetch={queryKeyForRefetch} />
          ))}
      </div>
    )
  }
  const handleSliceLoading = () => {
    return (
      <div className="flex flex-col">
        {[0, 1]?.map((item) => (
          <div className="py-14" key={item}>
            <ProductCardSkeleton />
          </div>
        ))}
      </div>
    )
  }
  return { handleSliceArray, handleSliceLoading }
}
