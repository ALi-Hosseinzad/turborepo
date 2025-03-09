import { useQueryClient } from '@tanstack/react-query'
import {
  type OnlinePaymentItem,
  type OrderDataType,
  type OrderInfoProps,
  type OrderInfoType,
  useTranslations,
} from '../../import'

export const useOrderInfoViewModel = ({ orderId }: OrderInfoProps) => {
  const t = useTranslations()
  const queryClient = useQueryClient()

  const orderData = queryClient.getQueryData<OrderDataType>([
    `ORDER_CHECKOUT-${orderId}`,
  ])
  const getOrderGeneralInfo = (): OrderInfoType => {
    const matchGiftCard = orderData?.order_type_label
    const isGiftCard = matchGiftCard === 'GiftCardProduct'

    return isGiftCard
      ? {
          cardName: {
            title: `${t('firstName')} ${t('giftCard')}:`,
            key: 'product_name',
            value: `${orderData?.orderable?.name?.replace(orderData?.orderable?.sku || '', '')} ${orderData?.orderable?.price} ${orderData?.orderable?.currency} ${orderData?.orderable?.region}`,
          },
          quantity: {
            title: `${t('count')}:`,
            key: 'product_quantity',
            value: `${orderData?.count}`,
          },
          email: {
            title: `${t('email')}:`,
            key: 'receiver_email',
            value: orderData?.user_email,
          },
          ...(orderData?.user_phone && {
            phone: {
              title: `${t('mobileNumber')}:`,
              key: 'receiver_phone',
              value: orderData?.user_phone,
            },
          }),

          status: {
            title: `${t('status')} ${t('order')}:`,
            key: 'order_status',
            value: orderData?.status_label,
            statusTextColor: orderData?.status_text_color,
            statusBgColor: orderData?.status_background_color,
          },
        }
      : {
          serviceName: {
            title: `${t('serviceName')}:`,
            key: 'service_name',
            value: `${orderData?.orderable?.service ? orderData?.orderable?.service?.title : ''} ${orderData?.orderable?.subscription ? orderData?.orderable?.subscription?.title : ''}`,
          },
          email: {
            title: `${t('email')}:`,
            key: 'receiver_email',
            value: orderData?.user_email,
          },
          ...(orderData?.user_phone && {
            phone: {
              title: `${t('mobileNumber')}:`,
              key: 'receiver_phone',
              value: orderData?.user_phone,
            },
          }),
          status: {
            title: `${t('status')} ${t('order')}:`,
            key: 'order_status',
            value: orderData?.status_label,
            statusTextColor: orderData?.status_text_color,
            statusBgColor: orderData?.status_background_color,
          },
        }
  }
  const orderMessage = orderData?.description
  const getOnlinePaymentInputs = () => {
    const orderType = orderData?.order_type_label
    const isOnlinePayment = orderType === 'OnlinePayment'
    let onlinePaymentArray: OnlinePaymentItem[] = []
    onlinePaymentArray =
      orderData?.orderable?.online_payment_has_form_inputs || []
    const onlinePaymentInputs: Record<
      string,
      { key: string; title: string; value: string }
    > = onlinePaymentArray.reduce(
      (obj, item) =>
        Object.assign(obj, {
          [item.form_input.name]: {
            key: item.form_input.name,
            title: item.form_input.label,
            value: item.value,
          },
        }),
      {},
    )
    return isOnlinePayment ? onlinePaymentInputs : {}
  }
  return {
    getOrderGeneralInfo,
    getOnlinePaymentInputs,
    orderMessage,
  }
}
