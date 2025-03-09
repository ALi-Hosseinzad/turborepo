'use client'

import React from 'react'
import { Skeleton } from '@mui/material'

const TicketDetailSkeleton = () => {
  return (
    <>
      <section className="flex items-center pt-6 pb-6 md:pb-8">
        <Skeleton width="30%" height={25} variant="rounded" />
      </section>
      <div className="flex flex-col gap-4 justify-between !h-[75vh]">
        <Skeleton
          animation="wave"
          width="100%"
          className="!h-40"
          style={{ margin: '-33px 0' }}
        />
        <div className="flex flex-col mx-10 sm:mx-6 !h-[20vh] xl:-mt-32 sm:-mt-32 -mt-5">
          <div className="flex gap-2">
            <Skeleton
              animation="wave"
              variant="circular"
              className="sm:!h-12 sm:w-12 !h-8 w-8"
            />
            <Skeleton
              animation="wave"
              className="sm:!h-20 sm:w-56 !h-12 w-24"
            />
          </div>
          <div />
        </div>
        <div>
          <div className="sm:grid sm:grid-cols-12 gap-6 bg-white shadow-md rounded-lg my-4 py-4 px-4">
            <div className="sm:col-span-9 bg-[#FAFAFA] px-4 !h-32">
              <Skeleton animation="wave" width="100%" className="!h-20" />
            </div>
            <div className="sm:col-span-3 flex sm:flex-col flex-row justify-between">
              <div className="flex lg:flex-row flex-col-reverse w-full lg:gap-2 -mb-4">
                <Skeleton animation="wave" width="100%" className="!h-20" />
                <Skeleton
                  animation="wave"
                  width="100%"
                  className="!h-20"
                  style={{ marginBottom: '-24px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TicketDetailSkeleton
