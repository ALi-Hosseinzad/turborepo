import {
  ORDER_URL,
  ORDERS,
  useAxiosQuery,
  UseTomanToRial,
  useTranslations,
} from './import'

export const useInvoiceViewModel = (invoiceId: number | undefined) => {
  // const router = useRouter()
  const t = useTranslations()
  const {
    data: dataInvoice,
    isSuccess: isSuccessInvoice,
    isLoading: isLoadingInvoice,
  } = useAxiosQuery({
    url: `${ORDER_URL}/${invoiceId}`,
    queryKey: [`ORDER_INVOICE-${invoiceId}`],
  })

  // useEffect(() => {
  //   if (!dataInvoice) {
  //     router.push(DASHBOARD)
  //   } else if (dataInvoice.status === 'pending') {
  //     router.push(`/checkout/${dataInvoice.id}`)
  //   }
  // }, [dataInvoice, router])

  const getOrderInfo = () => {
    const matchGiftCard = dataInvoice?.order_type_label
    const isGiftCard = matchGiftCard === 'GiftCardProduct'
    return isGiftCard
      ? {
          cardName: {
            title: `${t('firstName')} ${t('giftCard')}:`,
            key: 'product_name',
            value: `${dataInvoice?.orderable?.name?.replace(dataInvoice?.orderable?.sku || '', '')} ${dataInvoice?.orderable?.price} ${dataInvoice?.orderable?.currency} ${dataInvoice?.orderable?.region}`,
          },
          quantity: {
            title: `${t('count')}:`,
            key: 'product_quantity',
            value: `${dataInvoice?.count}`,
          },
          email: {
            title: `${t('email')}:`,
            key: 'receiver_email',
            value: dataInvoice?.user_email,
          },
          status: {
            title: `${t('status')} ${t('order')}:`,
            key: 'order_status',
            value: dataInvoice?.status_label,
            statusTextColor: dataInvoice?.status_text_color,
            statusBgColor: dataInvoice?.status_background_color,
          },
          paidPrice: {
            title: `${t('amount')} ${t('payable')}:`,
            key: 'full_price_after_discount',
            value: UseTomanToRial(dataInvoice?.full_price_after_discount),
            currency: t('rial'),
            type: 'price',
          },
          code: {
            title: `${t('orderTrackingCode')}:`,
            key: 'tracking_code',
            value: dataInvoice?.tracking_code,
          },
        }
      : {
          serviceName: {
            title: `${t('serviceName')}:`,
            key: 'service_name',
            value: `${dataInvoice?.orderable?.service ? dataInvoice?.orderable?.service?.title : ''} ${dataInvoice?.orderable?.subscription ? dataInvoice?.orderable?.subscription?.title : ''}`,
          },
          email: {
            title: `${t('email')}:`,
            key: 'receiver_email',
            value: dataInvoice?.user_email,
          },
          status: {
            title: `${t('status')} ${t('order')}:`,
            key: 'order_status',
            value: dataInvoice?.status_label,
            statusTextColor: dataInvoice?.status_text_color,
            statusBgColor: dataInvoice?.status_background_color,
          },
          paidPrice: {
            title: `${t('amount')} ${t('payable')}:`,
            key: 'full_price_after_discount',
            value: UseTomanToRial(dataInvoice?.full_price_after_discount),
            currency: t('rial'),
            type: 'price',
          },
          code: {
            title: `${t('orderTrackingCode')}:`,
            key: 'tracking_code',
            value: dataInvoice?.tracking_code,
          },
        }
  }

  const getBreadCrumbs = () => {
    // const matchGiftCard = dataInvoice?.order_type_label

    return [
      {
        name: t('orders'),
        url: ORDERS,
      },
      {
        name: `${t('orderReceipt')}${dataInvoice?.id ? dataInvoice?.id : ''}`,
        url: `${dataInvoice?.id}`,
      },
    ]
  }
  const getOnlinePaymentResponse = () => {
    const orderType = dataInvoice?.order_type_label
    const isOnlinePayment = orderType === 'OnlinePayment'
    let onlinePaymentResponseArray: any[] = []
    onlinePaymentResponseArray =
      dataInvoice?.orderable?.online_payment_response || []
    const onlinePaymentResponse: Record<
      string,
      { key: string; description: string; value: string }
    > = onlinePaymentResponseArray.reduce(
      (obj, item) =>
        Object.assign(obj, {
          [item.id]: {
            key: item.id,
            description: item.description,
            attachment: item.attachment,
          },
        }),
      {},
    )
    return isOnlinePayment ? onlinePaymentResponse : {}
  }

  return {
    getOrderInfo,
    getBreadCrumbs,
    getOnlinePaymentResponse,
    dataInvoice,
    isSuccessInvoice,
    isLoadingInvoice,
  }
}
