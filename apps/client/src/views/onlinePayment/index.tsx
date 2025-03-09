'use client'

import { BreadCrumbs } from '../authorization/imports'
import { useBreadCrumbs } from './components/breadCrumbs'
import { ONLINE_PAYMENT_SERVICE_URL, ProductsList } from './imports'

export const OnlinePayment = (): JSX.Element => {
  const { getBreadCrumbs } = useBreadCrumbs()
  return (
    <>
      <BreadCrumbs breadCrumbs={getBreadCrumbs()} />

      <div className="p-4">
        <ProductsList
          url={ONLINE_PAYMENT_SERVICE_URL}
          productType="online_payment"
        />
      </div>
    </>
  )
}
