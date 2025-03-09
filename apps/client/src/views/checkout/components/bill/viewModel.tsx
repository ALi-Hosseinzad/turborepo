import { useQueryClient } from '@tanstack/react-query'
import {
  type BillProps,
  CHECKOUT_PAYMENT_URL,
  type OrderDataType,
  type RootState,
  useAxiosMutation,
  useLocale,
  useRouter,
  useSelector,
  UseTomanToRial,
  useTranslations,
} from '../../import'

export const useBillViewModel = ({ orderId }: BillProps) => {
  const t = useTranslations()
  const router = useRouter()
  const locale = useLocale()
  const queryClient = useQueryClient()
  const { wallet } = useSelector((state: RootState) => state.persist)
  const orderData = queryClient.getQueryData<OrderDataType>([
    `ORDER_CHECKOUT-${orderId}`,
  ])
  const matchGiftCard = orderData?.order_type_label
  const isGiftCard = matchGiftCard === 'GiftCardProduct'

  const getOrderBillInfo = () => {
    return isGiftCard
      ? {
          fullPrice: {
            title: `${t('amount')}:`,
            key: 'full_price',
            value: `${UseTomanToRial(orderData?.full_price)} ${t('rial')}`,
          },
          ...(orderData?.discount_price &&
            orderData.discount_price > 0 && {
              discountPrice: {
                title: `${t('discount')}:`,
                key: 'discount_price',
                value: `${UseTomanToRial(orderData?.discount_price)} ${t('rial')} -`,
              },
            }),
          payablePrice: {
            title: `${t('amount')} ${t('payable')}:`,
            key: 'full_price_after_discount',
            value: `${UseTomanToRial(orderData?.full_price_after_discount)} ${t('rial')}`,
          },
        }
      : {
          servicePrice: {
            title: `${t('servicePrice')}:`,
            key: 'exchange_price_online_payment',
            value: `${UseTomanToRial(orderData?.orderable?.exchange_price_online_payment)} ${t('rial')}`,
          },
          wageAndTaxPrice: {
            title: `${t('wageAndTaxPrice')}:`,
            key: 'wage_and_tax_price',
            value: `${UseTomanToRial((orderData?.orderable?.wage_price || 0) + (orderData?.tax_price || 0))} ${t('rial')}`,
          },
          ...(orderData?.orderable?.hurry && {
            hurryPrice: {
              title: `${t('hurryPrice')}:`,
              key: 'hurry_price',
              value: `${UseTomanToRial(orderData?.orderable?.hurry_price)} ${t('rial')}`,
            },
          }),
          fullPrice: {
            title: `${t('amount')}:`,
            key: 'full_price',
            value: `${UseTomanToRial(orderData?.full_price)} ${t('rial')}`,
          },
          ...(orderData?.discount_price &&
            orderData.discount_price > 0 && {
              discountPrice: {
                title: `${t('discount')}:`,
                key: 'discount_price',
                value: `${UseTomanToRial(orderData?.discount_price)} ${t('rial')} -`,
              },
            }),
          payablePrice: {
            title: `${t('amount')} ${t('payable')}:`,
            key: 'full_price_after_discount',
            value: `${UseTomanToRial(orderData?.full_price_after_discount)} ${t('rial')}`,
          },
        }
  }
  const orderStatus = orderData?.status
  const checkoutImageInfo = {
    src:
      orderData?.order_type_label === 'GiftCardProduct'
        ? orderData?.orderable?.image
        : orderData?.orderable?.service?.image,
    alt: orderData?.order_type_label,
  }
  const initialValues = { acceptRules: false }
  const { mutateAsync, isPending, isSuccess } = useAxiosMutation(
    CHECKOUT_PAYMENT_URL,
    'post',
  )
  const AddBalanceInitValue = {
    amount:
      wallet?.balance !== undefined &&
      orderData?.full_price_after_discount !== undefined
        ? Math.max(
            0,
            Number(orderData.full_price_after_discount) -
              Number(wallet.balance),
          )
        : 0,
    accept_law: false,
  }
  const onSubmit = () => {
    const body = {
      id: orderId,
    }
    mutateAsync(body).then((data) => {
      router.push(`/${locale}/thankYou/order/${data?.data?.id}`)
    })
  }
  return {
    AddBalanceInitValue,
    orderStatus,
    isPending,
    isSuccess,
    getOrderBillInfo,
    checkoutImageInfo,
    onSubmit,
    initialValues,
  }
}
