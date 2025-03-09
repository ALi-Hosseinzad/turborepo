'use client'

import { Loading, OrderDetailsView, UseOrderDetailModel } from '../import'

const OrdersDetail = (): JSX.Element => {
  const {
    orderDetailData,
    isLoading,
    initialValues,
    validationSchema,
    onSubmit,
  } = UseOrderDetailModel()

  return (
    <>
      <Loading isLoading={isLoading} />
      <OrderDetailsView
        orderDetailData={orderDetailData}
        initialValues={initialValues}
        validationSchema={validationSchema}
        isLoading={isLoading}
        onSubmit={onSubmit}
      />
    </>
  )
}

export default OrdersDetail
