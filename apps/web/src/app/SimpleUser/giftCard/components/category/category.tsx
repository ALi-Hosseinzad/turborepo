'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { axiosGet } from '@/components/priceEstimation/imports'
import { CATEGORY_ROOTS_URL } from '@/constants/endPoints'
import { GiftCardCategoryView } from '@/views/giftCard/clp/category/view'

export const Category = (): JSX.Element => {
  const { data: categoryData, isLoading: isLoadingCategory } = useQuery({
    queryKey: ['category'],
    queryFn: () =>
      axiosGet({
        url: `${CATEGORY_ROOTS_URL}?type=gift_card`,
      }),
  })

  return (
    <>
      {isLoadingCategory ? (
        <p className="py-10 text-warning-default text-center">
          react query-GiftCardCategory is loading...
        </p>
      ) : (
        <GiftCardCategoryView data={categoryData} />
      )}
    </>
  )
}
