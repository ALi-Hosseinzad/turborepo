'use client'

import { ProductCard } from './productCard'

export const ProductBox = (props): JSX.Element => {
  return (
    <ProductCard {...props} height="220px">
      <p className="text-center title-sm md:title-base lg:title-lg">
        {props?.data?.title}
      </p>
    </ProductCard>
  )
}
