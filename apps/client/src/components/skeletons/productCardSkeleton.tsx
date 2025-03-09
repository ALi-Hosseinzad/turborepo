'use client'

import React from 'react'
import { Skeleton } from '@mui/material'
import { ShadowIcon } from 'ui/components/icons'

export const ProductCardSkeleton = () => {
  return (
    <div className="relative flex flex-col gap-2 justify-between items-center border border-stroke/[0.2] rounded-xl mt-4">
      <div className="absolute -top-[20%] left-[50%] -translate-x-[50%]">
        <Skeleton
          variant="rectangular"
          animation="wave"
          className="relative rounded-md bg-trueGray-300 w-72 sm:w-64 xl:w-64 2xl:w-72 h-[168px]"
          height={163}
        />
      </div>
      <div className="flex flex-col items-center justify-between gap-2 w-max pt-32 sm:pt-28 md:pt-28 lg:pt-32 xl:pt-28 pb-4">
        <ShadowIcon className="2xl:w-72 xl:w-[200px] lg:w-72 md:w-64 py-2" />
        <Skeleton width="60%" animation="wave" />
      </div>
    </div>
  )
}
