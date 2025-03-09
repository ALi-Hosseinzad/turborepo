'use client'

import React from 'react'
import { Skeleton } from '@mui/material'
import { DiscountFlagSkeletonIcon, ShadowIcon } from 'ui/components/icons'

export const RecommendedCardSkeleton = () => {
  return (
    <div className="relative flex flex-col gap-2 justify-between border border-stroke/[0.2] rounded-xl p-5 mt-3">
      <div className=" flex flex-col gap-0.5 text-stroke">
        <div className="flex flex-col justify-center items-center">
          <div className="absolute -top-[10%] left-[50%] -translate-x-[50%]">
            <div className="relative 2xl:w-72 xl:w-[200px] lg:w-72 sm:w-64 w-72 2xl:h-48 lg:h-32 md:h-44 sm:h-44 h-48">
              <Skeleton
                variant="rectangular"
                animation="wave"
                className="relative rounded-md bg-trueGray-300 2xl:w-72 xl:w-[200px] lg:w-72 sm:w-64 w-72 2xl:h-48 lg:h-32 md:h-44 sm:h-44 h-48"
                height={180}
              />
            </div>
          </div>
          <div className="w-max pt-32 sm:pt-28 md:pt-28 lg:pt-32 xl:pt-16 2xl:pt-32">
            <ShadowIcon className="2xl:w-72 xl:w-[200px] lg:w-72 md:w-64" />
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-between pt-2">
          <div className="flex flex-col gap-2 justify-between h-full">
            <div className="flex flex-col gap-1">
              <Skeleton width="80%" animation="wave" />
              <Skeleton width="50%" animation="wave" />
            </div>
            <div className="relative flex flex-col gap-0.5 pl-[60%]">
              <DiscountFlagSkeletonIcon className="absolute -right-7" />
              <div className="flex flex-col items-end">
                <Skeleton width="60%" animation="wave" />
                <Skeleton width="70%" animation="wave" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Skeleton width="100%" animation="wave" className="py-6" />
    </div>
  )
}
