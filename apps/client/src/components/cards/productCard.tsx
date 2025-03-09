'use client'

import { Card } from '@/components/cards/card'
import { ShadowIcon } from 'ui/components/icons'

export const ProductCard = (props): JSX.Element => {
  const { children, className, height = '240px' } = props

  return (
    <div className={`relative pt-[75px] pb-4 ${className}`}>
      <div
        className="relative border border-stroke/[0.2] rounded-xl "
        style={{ height }}
      >
        <div className="absolute -top-[20%] left-[50%] -translate-x-[50%]">
          <div className="flex flex-col gap-1 justify-between items-center">
            <Card {...props} />
            <ShadowIcon />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}
