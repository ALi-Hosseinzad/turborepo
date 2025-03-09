'use client'

import React from 'react'
import { BreadCrumbs, OrderListView, useOrderListViewModel } from './import'

const Order: React.FC = () => {
  const { bodyInfo, headInfo, BREADCRUMBS_DATA } = useOrderListViewModel()

  return (
    <>
      <BreadCrumbs breadCrumbs={BREADCRUMBS_DATA} />
      <OrderListView headInfo={headInfo} bodyInfo={bodyInfo} />
    </>
  )
}

export default Order
