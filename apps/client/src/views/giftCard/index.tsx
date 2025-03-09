'use client'

import { BreadCrumbs } from '../authorization/imports'
import { useBreadCrumbs } from './components/breadCrumbs'
import { GIFT_CARD_PACKAGE_URL, ProductsList } from './imports'

export const GiftCard = (): JSX.Element => {
  const { getBreadCrumbs } = useBreadCrumbs()

  return (
    <>
      <BreadCrumbs breadCrumbs={getBreadCrumbs()} />

      <div className="p-4">
        <ProductsList url={GIFT_CARD_PACKAGE_URL} productType="gift_card" />
      </div>
    </>
  )
}
