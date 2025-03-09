import React from 'react'
import { GiftCardCategoryView } from '@views/giftCard/clp/category/view'
import { CATEGORY_ROOTS_URL } from '@/constants/endPoints'

export default async function Category(): Promise<JSX.Element> {
  const categoryData = await useFetch({
    url: `${CATEGORY_ROOTS_URL}?type=gift_card`,
  })

  return <GiftCardCategoryView data={categoryData?.data} />
}
