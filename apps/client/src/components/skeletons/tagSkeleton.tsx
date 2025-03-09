'use client'

import { Skeleton } from '@mui/material'
import { ProductCardSkeleton } from '@/views/dashboard/import'

const TagSkeleton = () => {
  return (
    <>
      <div className="flex">
        <Skeleton animation="wave" className="rounded-md w-28 !h-12" />
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 gap-y-10 -mt-5 py-4 overflow-hidden">
        {[
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20,
        ].map((_item, index) => (
          <div key={index}>
            <ProductCardSkeleton />
          </div>
        ))}
      </div>
    </>
  )
}

export default TagSkeleton
