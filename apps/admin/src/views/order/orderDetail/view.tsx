'use client'

import { GiftCardProductDetail, OnlinePaymentDetail } from '../import'

const OrderDetailsView = (props: any): JSX.Element => {
  const {
    orderDetailData,

    initialValues,
    validationSchema,
    onSubmit,
  } = props
  return (
    <>
      {orderDetailData?.orderHeader?.productType === 'GiftCardProduct' ? (
        <GiftCardProductDetail
          orderDetailData={orderDetailData}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        />
      ) : (
        <OnlinePaymentDetail
          orderDetailData={orderDetailData}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        />
      )}
    </>
  )
}

export default OrderDetailsView
