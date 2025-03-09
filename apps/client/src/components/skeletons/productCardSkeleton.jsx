'use client'

import { Skeleton } from '@mui/material'
import { ShadowIcon } from 'ui/components/icons'

const ProductCardSkeleton = () => {
  return (
    <div className="relative flex flex-col gap-2 justify-between items-center border border-stroke/[0.2] rounded-xl p-5 mt-20">
      <div className="absolute -top-[20%] left-[50%] -translate-x-[50%]">
        <Skeleton
          variant="rectangular"
          animation="wave"
          className="relative rounded-md bg-trueGray-300 2xl:w-72 xl:w-[200px] lg:w-72 sm:w-64 w-72 2xl:!h-48 lg:!h-32 md:!h-44 sm:!h-44 !h-48"
        />
      </div>
      <div className="flex flex-col items-center justify-between gap-2 title-lg lg:title-xl xl:title-lg w-max pt-32 sm:pt-28 md:pt-28 lg:pt-32 xl:pt-16 2xl:pt-32">
        <ShadowIcon className="2xl:w-72 xl:w-[200px] lg:w-72 md:w-64" />
        <Skeleton width="60%" animation="wave" />
      </div>
    </div>
  )
}

export default ProductCardSkeleton
