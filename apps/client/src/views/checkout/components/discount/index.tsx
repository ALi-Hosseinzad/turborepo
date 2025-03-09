import React from 'react'
import {
  type DiscountProps,
  DiscountView,
  useDiscountViewModel,
} from '../../import'

const Discount: React.FC<DiscountProps> = ({ orderId }) => {
  const { initialValues, hasDiscount, onSubmit, isPending, orderStatus } =
    useDiscountViewModel({ orderId }) // Pass an object with orderId property

  return (
    <DiscountView
      initialValues={initialValues}
      hasDiscount={hasDiscount}
      isPending={isPending}
      orderStatus={orderStatus}
      onSubmit={onSubmit}
    />
  )
}

export default Discount
