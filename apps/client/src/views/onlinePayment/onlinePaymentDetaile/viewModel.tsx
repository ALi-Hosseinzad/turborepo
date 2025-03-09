'use client'

import { ONLINE_PAYMENT_SERVICE_URL, useAxiosQuery } from '../imports'

export const useOnlinePaymentDetailsViewModel = (serviceId: number) => {
  const selectFunction = (data) => {
    const {
      id: serviceId,
      title,
      category,
      image,
      description,
      tags: tagsList,
      bookmarks,
      form,
      subscriptions,
      regions,
      max_price: maxPrice,
      min_price: minPrice,
      wage,
      hurry_price: hurryPrice,
    } = data

    const region = regions?.map((item) => {
      return { ...item, currencyType: item.currency?.name }
    })

    const productHeaderInfo = {
      cardInfo: {
        image,
        title,
        id: serviceId,
        bookmarks,
        type: category[0].type,
      },
      title,
      category,
      description,
      tagsList,
      serviceId,
    }
    const subscription = subscriptions.map((item) => {
      return {
        label: item.title,
        value: { ...item },
      }
    })
    const formInfo = {
      form,
      subscriptions: subscription,
      regions: region,
      wage,
      rangePrice: { maxPrice, minPrice },
      hurryPrice,
    }

    return { productHeaderInfo, formInfo }
  }
  const fallback = { productHeaderInfo: {}, formInfo: {} }
  const { data = fallback, isLoading } = useAxiosQuery({
    url: `${ONLINE_PAYMENT_SERVICE_URL}/${serviceId}`,
    queryKey: [serviceId],
    enabled: true,
    selectFn: selectFunction,
  })

  return {
    isLoading,
    productHeaderInfo: data.productHeaderInfo,
    formInfo: data.formInfo,
  }
}
