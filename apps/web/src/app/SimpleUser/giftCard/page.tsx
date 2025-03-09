'use client'

import React from 'react'
import { Category } from './components/category/category'
import { PriceEstimation } from '@/components/priceEstimation'

export default function GiftCardPage(): JSX.Element {
  return (
    <div className="px-32">
      <PriceEstimation />
      <Category />
    </div>
  )
}
