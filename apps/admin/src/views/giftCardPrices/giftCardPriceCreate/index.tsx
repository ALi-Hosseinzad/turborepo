'use client'

import {
  GiftCardPriceCreateView,
  React,
  useGiftCardPriceCreateViewModel,
} from '../imports'

export const GiftCardPriceCreate = (): JSX.Element => {
  const { initialValues, validationSchema, handlePostGiftCardPrice } =
    useGiftCardPriceCreateViewModel()

  return (
    <GiftCardPriceCreateView
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handlePostGiftCardPrice}
    />
  )
}
