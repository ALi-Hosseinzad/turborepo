'use client'

import React from 'react'
import Skeleton from '@mui/material/Skeleton'

export const BannerSkeleton = () => {
  return (
    <Skeleton
      variant="rectangular"
      animation="wave"
      className="!h-[200px] sm:!h-[280px] md:!h-[408px] !w-full mt-4"
    />
  )
}
