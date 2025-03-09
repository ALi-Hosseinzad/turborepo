'use client'

import React from 'react'
import { Skeleton } from '@mui/material'

export const CurrencyCardSkeleton = () => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg divide-y divide-y-{w-80} p-4">
      <div className="flex w-full rounded-md">
        <div className="flex justify-between pb-4 w-full">
          <div className="flex items-center gap-2">
            <Skeleton
              variant="circular"
              width={48}
              height={48}
              animation="wave"
            />
            <div className="w-32">
              <Skeleton width="70%" animation="wave" />
              <Skeleton width="60%" animation="wave" />
            </div>
          </div>
          <Skeleton width="20%" animation="wave" />
        </div>
      </div>
      <div className="flex items-center justify-between py-3 h-full">
        <Skeleton width="30%" animation="wave" />
        <Skeleton width="20%" animation="wave" />
      </div>
    </div>
  )
}
