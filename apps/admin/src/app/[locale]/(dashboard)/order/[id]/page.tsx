import React from 'react'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import OrdersDetile from 'views/order/orderDetail'
import type { PagePropsType } from 'types/common'

const OrdersDetilePage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <OrdersDetile />
}

export default OrdersDetilePage
