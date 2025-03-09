import {
  ORDER_URL,
  type TankYouData,
  useAxiosQuery,
  useEffect,
  useLocale,
  useParams,
  useRouter,
  useState,
  UseTimeConvertor,
  UseTomanToRial,
  useTranslations,
  WALLET_TRANSACTION_URL,
} from './import'

export const useTankYouViewModel = () => {
  const [isPending, setIsPending] = useState<boolean>(false)
  const [visualConfetti, setVisualConfetti] = useState<boolean>(true)
  const t = useTranslations()
  const router = useRouter()
  const locale = useLocale()
  const { orderId, chargeId } = useParams<{
    orderId?: string
    chargeId?: string
  }>()

  const matchType: 'ORDER' | 'CHARGE' = orderId ? 'ORDER' : 'CHARGE'

  const {
    data: responseData,
    isSuccess: isSuccessTankYou,
    isLoading: isLoadingTankYou,
  } = useAxiosQuery({
    url:
      matchType === 'ORDER'
        ? `${ORDER_URL}/${orderId?.toString()}`
        : `${WALLET_TRANSACTION_URL}/${chargeId?.toString()}`,
    queryKey: [
      matchType === 'ORDER'
        ? `ORDER_INVOICE-${orderId?.toString()}`
        : `CHARGE_INVOICE-${chargeId?.toString()}`,
    ],
  })

  const getDataInfo = (): TankYouData => {
    if (matchType === 'ORDER' && isSuccessTankYou) {
      return {
        trackingCode: {
          title: t('yourOrderTrackingCode'),
          key: 'tracking_code',
          value: responseData?.tracking_code,
        },
        paymentTime: {
          title: t('paymentTime'),
          key: 'payment_time',
          value: UseTimeConvertor(responseData?.updated_at),
        },
      }
    } else if (matchType === 'CHARGE' && isSuccessTankYou) {
      return {
        chargeAmount: {
          title: `${t('amount')} :`,
          key: 'amount',
          value: `${UseTomanToRial(responseData?.amount)}${t('rial')}`,
        },
        trackingCode: {
          title: t('yourOrderTrackingCode'),
          key: 'tracking_code',
          value: responseData?.transactionable?.trace_number,
        },
        chargeTime: {
          title: t('paymentTime'),
          key: 'payment_time',
          value: UseTimeConvertor(responseData?.created_at),
        },
      }
    }
    return {}
  }

  useEffect(() => {
    if (isSuccessTankYou) {
      const timer = setTimeout(() => {
        setVisualConfetti(false)
        if (orderId) {
          router.push(`/${locale}/invoice/${orderId.toString()}`)
        } else if (chargeId) {
          router.push(`/${locale}/wallet/`)
        }
      }, 10000)

      return () => clearTimeout(timer)
    }
  }, [isSuccessTankYou])

  const onSubmit = () => {
    setIsPending(true)
    if (orderId) {
      router.push(`/${locale}/invoice/${orderId.toString()}`)
    } else if (chargeId) {
      router.push(`/${locale}/wallet/`)
    }
  }

  return {
    matchType,
    visualConfetti,
    isPending,
    onSubmit,
    getDataInfo,
    isSuccessTankYou,
    isLoadingTankYou,
  }
}
