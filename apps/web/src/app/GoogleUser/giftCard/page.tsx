import React, { Suspense } from 'react'
import Category from './compoenets/category/category'
import { PriceEstimation } from '@/components/priceEstimation'

export default function GiftCardPage(): JSX.Element {
  return (
    <div className="px-32">
      <PriceEstimation />
      <Suspense fallback={<p>dgf</p>}>
        <Category />
      </Suspense>
    </div>
  )
}
