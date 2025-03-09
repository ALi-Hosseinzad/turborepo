'use client'

import Image from 'next/image'
import { Favorite } from '@/components/favorite'
import { DiscountVerticalFlagIcon } from 'ui/components/icons/icons'

export const Card = (props): JSX.Element => {
  const {
    data,
    hasForverit = true,
    hasFlag = false,
    queryKeyForRefetch,
    hasDiscountFlag = false,
    isProductPage = false,
  } = props

  return (
    <div
      className={`relative ${isProductPage ? '' : 'w-72 sm:w-64 xl:w-64 2xl:w-72'}`}
    >
      <div className={`relative ${isProductPage ? '' : 'h-[168px]'}`}>
        <Image
          src={data?.image}
          className="rounded-lg"
          alt={data?.title}
          sizes="100%"
          width={0}
          priority
          height={0}
          style={{ width: '100%', height: '100%' }}
          // object-fit='contain'
        />
      </div>
      {hasFlag ? (
        <div className="absolute top-4 right-3">
          <div className="relative w-10 h-10 rounded-full">
            <Image
              src={data?.flag}
              className="rounded-full"
              alt={data?.id}
              sizes="100%"
              width={0}
              height={0}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      ) : null}
      {hasForverit ? (
        <div className="absolute top-5 left-5">
          <Favorite
            id={data?.id}
            isFavorite={data?.bookmarks}
            queryKeyForRefetch={queryKeyForRefetch}
            productType={
              data?.type === 'gift_card' ? 'GiftCardPackage' : 'OnlinePayment'
            }
          />
        </div>
      ) : null}

      {hasDiscountFlag ? (
        <div className="absolute -top-[7px] right-5">
          <DiscountVerticalFlagIcon className="w-14 h-14" />
          <p className="text-normal-sm absolute top-4 right-5 text-customWhite z-50">
            {data?.discountAmount}
            {data?.discountType == 'amount' ? '' : '%'}
          </p>
        </div>
      ) : null}
    </div>
  )
}
