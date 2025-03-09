import React from 'react'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import Orders from 'views/order'
import type { PagePropsType } from 'types/common'

const OrdersPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <Orders />
}

export default OrdersPage
