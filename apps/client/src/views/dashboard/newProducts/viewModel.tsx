'use client'

import { RECENT_PRODUCTS_URL, useAxiosQuery } from '../import'

export const useNewProductsViewModel = () => {
  const { data, isLoading, isError } = useAxiosQuery({
    url: RECENT_PRODUCTS_URL,
    queryKey: ['new-product-list'],
  })

  return { newProductsList: data, isLoading, isError }
}
