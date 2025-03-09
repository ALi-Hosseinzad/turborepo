import { OnlinePaymentForm, ProductDetailHeaderBox } from '../imports'

export const OnlinePaymentDetailsView = ({ productHeaderInfo, formInfo }) => {
  return (
    <div className="flex flex-col">
      <ProductDetailHeaderBox productHeaderInfo={productHeaderInfo} />
      <OnlinePaymentForm formInfo={formInfo} />
    </div>
  )
}
