import { Skeleton } from '@mui/material'

const ProductsCategorySkeleton = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <>
      {isLoading ? (
        <div className="flex w-[50%] justify-around gap-4 sm:m-auto">
          {[0, 1, 2, 3].map((_item, index) => (
            <div key={index}>
              <Skeleton width={80} height={80} variant="rounded" />
            </div>
          ))}
        </div>
      ) : null}
    </>
  )
}

export default ProductsCategorySkeleton
