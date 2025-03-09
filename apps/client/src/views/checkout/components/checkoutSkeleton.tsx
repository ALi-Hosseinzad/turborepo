'use client'

import React from 'react'
import { Skeleton } from '@mui/material'
import { CheckoutWrapper, useTranslations } from '../import'

const CheckoutSkeleton = ({ isLoading }: { isLoading: boolean }) => {
  const t = useTranslations()

  return (
    <>
      {!isLoading || (
        <>
          <div className="flex justify-start my-4">
            <Skeleton
              animation="wave"
              height={50}
              className="my-8 sm:w-60 w-full"
            />
          </div>
          <CheckoutWrapper>
            <div className="basis-full flex flex-col gap-6 lg:basis-7/12">
              <div className="rounded-lg border border-[#E5E5E5] border-solid p-4">
                <div className="flex justify-between items-center">
                  <p className="title-base md:title-lg">{t('orderDetails')}</p>
                </div>
                <div className="flex flex-col">
                  {[0, 1, 2, 3].map((_item, index) => (
                    <div key={index} className="flex flex-col items-start">
                      <Skeleton
                        animation="wave"
                        className="!h-[70px] rounded-md w-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-[#E5E5E5] border-solid p-4">
                <div className="flex justify-between items-center">
                  <p className="title-base md:title-lg">
                    {t('enterDiscountCode')}
                  </p>
                </div>
                <div className="col-span-7 pt-5 sm:col-span-8 lg:col-span-7 w-full">
                  <Skeleton
                    animation="wave"
                    className="!h-[80px] rounded-md w-full"
                  />
                </div>
              </div>
            </div>
            <div className="basis-full flex flex-col gap-6 justify-between rounded-lg m-0 lg:basis-5/12 overflow-hidden bg-[#F7FAFA]">
              <div className="p-4 flex flex-col h-full justify-between">
                <div className="flex flex-col gap-4">
                  <div className="m-4 justify-center hidden lg:flex">
                    <Skeleton
                      className=" title-lg px-4"
                      width="100%"
                      height={320}
                      sx={{
                        marginTop: '-75px',
                        marginBottom: '-75px',
                      }}
                    />
                  </div>
                  <div className="flex flex-col">
                    {[0, 1, 2, 3].map((_item, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-start gap-2"
                      >
                        <Skeleton
                          variant="rounded"
                          width="100%"
                          height={40}
                          className="mt-4"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4">
                    <Skeleton
                      variant="rounded"
                      width="100%"
                      height={20}
                      className="mt-4"
                    />
                    <div className="flex justify-between items-center">
                      <Skeleton
                        variant="rounded"
                        width="70%"
                        height={50}
                        className="mt-4"
                      />
                      <Skeleton
                        variant="rounded"
                        width="28%"
                        height={50}
                        className="mt-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CheckoutWrapper>
        </>
      )}
    </>
  )
}

export default CheckoutSkeleton
