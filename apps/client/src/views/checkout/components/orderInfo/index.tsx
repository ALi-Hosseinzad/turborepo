import {
  type OrderInfoProps,
  OrderInfoView,
  useOrderInfoViewModel,
} from '../../import'

const OrderInfo: React.FC<OrderInfoProps> = ({ orderId }) => {
  const { getOrderGeneralInfo, orderMessage, getOnlinePaymentInputs } =
    useOrderInfoViewModel({
      orderId,
    })
  const OnlinePaymentInputs = getOnlinePaymentInputs()
  const orderGeneralInfo = getOrderGeneralInfo()
  return (
    <OrderInfoView
      OnlinePaymentInputs={OnlinePaymentInputs}
      orderMessage={orderMessage}
      orderGeneralInfo={orderGeneralInfo}
    />
  )
}
export default OrderInfo
