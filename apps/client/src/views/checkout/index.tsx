'use client'

import {
  Bill,
  BreadCrumbs,
  type CheckoutPropsType,
  CheckoutSkeleton,
  CheckoutWrapper,
  Discount,
  OrderInfo,
  useCheckoutViewModel,
} from './import'

const Checkout: React.FC<CheckoutPropsType> = ({ orderId }) => {
  const { getBreadCrumbs, isLoadingCheckout } = useCheckoutViewModel(orderId)
  return (
    <>
      {isLoadingCheckout ? (
        <CheckoutSkeleton isLoading={isLoadingCheckout} />
      ) : (
        <>
          <BreadCrumbs breadCrumbs={getBreadCrumbs()} />
          <CheckoutWrapper>
            <div className="basis-full flex flex-col gap-6 lg:basis-7/12">
              <OrderInfo orderId={orderId} />
              <Discount orderId={orderId} />
            </div>
            <div className="basis-full flex flex-col gap-6 justify-between rounded-lg m-0 lg:basis-5/12 overflow-hidden bg-[#F7FAFA]">
              <Bill orderId={orderId} />
            </div>
          </CheckoutWrapper>
        </>
      )}
    </>
  )
}

export default Checkout
