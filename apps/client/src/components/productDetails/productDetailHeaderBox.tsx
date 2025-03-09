import React from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { Header1 } from 'ui'
import useWindowDimensions from '@/hooks/useWindowDimension'
import { Card } from '../cards/card'
import Tag from '../tag/tag'

export const ProductDetailHeaderBox = ({ productHeaderInfo }) => {
  const { cardInfo, title, category, description, tagsList } = productHeaderInfo

  const { width } = useWindowDimensions()
  const t = useTranslations()
  const locale = useLocale()

  return (
    <div className="sm:grid sm:grid-cols-12 sm:gap-10 flex flex-col gap-5">
      <div className="col-span-6 md:col-span-4 w-full">
        <Card
          isProductPage
          data={cardInfo}
          hasDiscountFlag={cardInfo?.discountAmount > 0}
        />
        {width <= 1024 && width > 425 && (
          <div className="flex gap-2 pt-3">
            {tagsList?.map((item) => (
              <Tag key={item.id} tagInfo={item} onClick={null} />
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4 col-span-6 md:col-span-8">
        <div className="flex justify-between items-center">
          {title ? <Header1 title={title} className="!pb-0" /> : null}
          {category ? (
            <div className="flex gap-2 items-center justify-center">
              <span className="text-medium-xs sm:text-medium-sm text-trueGray-600">
                {t('category')}:
              </span>
              {category?.map((item, index) => (
                <Link
                  key={index}
                  className="text-medium-sm md:text-medium-base text-primary-default"
                  href={{
                    pathname: `/${locale}/${cardInfo?.type === 'gift_card' ? 'giftCard' : 'onlinePayment'}`,
                    query: { id: item?.id },
                  }}
                >
                  {item?.name?.replace('گیفت کارت‌های', '')}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="break-words text-medium-xs sm:text-medium-sm text-justify text-black"
        />
        {(width > 1024 || width < 426) && (
          <div className="flex gap-2">
            {tagsList?.map((item) => (
              <Tag key={item.id} tagInfo={item} onClick={null} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
