'use client'

import { OrderListview, React, useOrderListViewModel } from './import'

const Orders = (): JSX.Element => {
  const {
    orderData,
    orderPagination,
    headInfoTable,
    params,
    onChangePage,
    isLoading,
  } = useOrderListViewModel()

  return (
    <OrderListview
      orderData={orderData}
      orderPagination={orderPagination}
      headInfoTable={headInfoTable}
      params={params}
      isLoading={isLoading}
      onChangePage={onChangePage}
    />
  )
}

export default Orders
