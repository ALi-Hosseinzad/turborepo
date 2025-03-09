'use client'

import React from 'react'
import { Skeleton } from '@mui/material'

const InvoiceSkeleton = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <>
      {!isLoading || (
        <div className="m-0 lg:mx-[2vw] xl:mx-[5vw]">
          <div className="flex justify-start my-4">
            <Skeleton animation="wave" className="h-10 my-8 sm:w-44 w-full" />
          </div>
          <div className="bg-white rounded-lg p-4 lg:p-8">
            <div className="flex justify-between items-center col-span-9">
              <Skeleton className="title-lg w-20 my-2 " />
              <div className="flex gap-2">
                <Skeleton width={50} className=" h-6 cursor-pointer" />
                <Skeleton width={5} className=" h-6 cursor-pointer" />
              </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row my-6 gap-6">
              <div className="basis-full flex flex-col gap-6 lg:basis-7/12">
                <div className="flex flex-col gap-2 col-span-5 bg-white rounded-lg">
                  <div className="col-span-10">
                    {[0, 1, 2, 3, 4, 5].map((_item, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-start gap-2"
                      >
                        <Skeleton
                          animation="wave"
                          className="!h-20 mt-5 rounded-md w-full "
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="basis-full flex flex-col gap-1 justify-start rounded-lg m-0 lg:basis-5/12 overflow-hidden bg-[#F7FAFA]">
                <div className="m-4 justify-center hidden lg:flex">
                  <Skeleton
                    className=" title-lg px-4"
                    width="100%"
                    height="11vw"
                  />
                </div>
                <div className=" p-4">
                  <Skeleton
                    variant="rounded"
                    width="100%"
                    height={20}
                    className="mt-4"
                  />
                  <Skeleton
                    variant="rounded"
                    width="100%"
                    height={20}
                    className="mt-4"
                  />
                  <Skeleton
                    variant="rounded"
                    width="100%"
                    height={20}
                    className="mt-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default InvoiceSkeleton
