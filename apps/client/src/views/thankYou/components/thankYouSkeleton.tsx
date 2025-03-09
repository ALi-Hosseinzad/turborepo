'use client'

import React from 'react'
import { Skeleton } from '@mui/material'

const ThankYouSkeleton = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <>
      {!isLoading || (
        <div className="m-0 xl:mx-20">
          <div className="bg-white rounded-lg p-10 xl:p-8 flex flex-col justify-center content-center items-center">
            <div className="flex flex-col w-2/5 flex-nowrap gap-6 justify-center content-center items-center">
              <div className="flex flex-col flex-nowrap justify-center content-center items-center">
                <Skeleton
                  className=" title-lg px-4"
                  width="300px"
                  height={200}
                />
                <p className="text-center text-medium-lg text-[#2CA562]">
                  <Skeleton
                    className=" title-lg px-4"
                    width="300px"
                    height={30}
                  />
                </p>
              </div>
              <div className="flex flex-col w-full flex-nowrap gap-3 justify-center items-center">
                {[0, 1].map((_item, index) => (
                  <div key={index} className="flex flex-col items-start gap-2">
                    <Skeleton
                      variant="rounded"
                      width="500px"
                      height={40}
                      className="mt-4"
                    />
                  </div>
                ))}
              </div>
              <Skeleton
                variant="rounded"
                width="50%"
                height={50}
                className="mt-4"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ThankYouSkeleton
