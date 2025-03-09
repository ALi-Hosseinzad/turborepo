import { Skeleton } from '@mui/material'
import { ProductCardSkeleton } from '@/components/skeletons/productCardSkeleton'
import { useWindowDimensions } from '../../imports'

const ProductsListSkeleton = ({ isLoading }: { isLoading: boolean }) => {
  const { width } = useWindowDimensions()
  const getCardNumberInRow = () => {
    if (width > 1600) {
      return 4
    } else if (width > 1280) {
      return 3
    } else if (width > 1024) {
      return 2
    } else if (width > 650) {
      return 2
    }
    return 1
  }
  const getCardNumberInRowClass = () => {
    if (width > 1600) {
      return 'grid-cols-4'
    } else if (width > 1280) {
      return 'grid-cols-3'
    } else if (width > 1024) {
      return 'grid-cols-2'
    } else if (width > 650) {
      return 'grid-cols-2'
    }
    return 'grid-cols-1'
  }
  return (
    <>
      {isLoading ? (
        <div>
          <div className="flex w-[50%] justify-around gap-4 sm:m-auto">
            {[0, 1, 2, 3].map((_item, index) => (
              <div key={index}>
                <Skeleton width={80} height={80} variant="rounded" />
              </div>
            ))}
          </div>
          <div>
            {[0, 1, 2].map((_item, index) => (
              <div key={index} className=" my-5 flex flex-col">
                <div className="relative">
                  <div>
                    <p className="title-base sm:title-lg md:title-xl lg:title-3xl">
                      <Skeleton
                        animation="wave"
                        height={50}
                        className="my-8 w-60"
                      />
                    </p>
                  </div>
                </div>
                <div
                  className={`mt-12 grid ${getCardNumberInRowClass()} gap-4`}
                >
                  {Array.from({ length: getCardNumberInRow() }, (_, index) => (
                    <div key={index}>
                      <ProductCardSkeleton />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  )
}

export default ProductsListSkeleton
