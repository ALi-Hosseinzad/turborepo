import {
  useCurrencyEditViewModel,
  UseJalaliDate,
  UseTomanToRial,
  useTranslations,
} from '../../imports'

export const useCurrencyHistoryViewModel = (): any => {
  const { currencyData, isLoading } = useCurrencyEditViewModel()
  const t = useTranslations()

  const headInfo = [
    t('id'),
    `${t('exchangePrice')}  (${t('rial')})`,
    t('status'),
    t('date'),
  ]

  const handleBodyInfo = (body: any[]): any[] => {
    return body?.map(
      ({
        id,
        status,
        created_at: createdAt,
        exchange_price: exchangePrice,
      }) => {
        return {
          id,
          exchangeMoney: UseTomanToRial(exchangePrice),
          status: status === 'active' ? t('active') : t('disable'),
          createdAt: UseJalaliDate(createdAt),
        }
      },
    )
  }

  return {
    bodyInfo: handleBodyInfo(currencyData?.exchangeMoney),
    headInfo,
    isLoading,
  }
}
