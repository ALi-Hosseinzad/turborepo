import {
  ArrowToSideDownIcon,
  ArrowToSideTopIcon,
  Image,
  useTomanToRial,
  useTranslations,
} from '../import'

export const CurrencyCard = ({ currencyInfo }) => {
  const {
    region,
    name,
    symbol,
    updated_at: updatedAt,
    exchange_price_rate: exchangePriceRate,
    exchange_money_active: exchangeMoneyActive,
  } = currencyInfo

  const percentageChanges = exchangePriceRate?.toFixed(2)
  const t = useTranslations()

  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg divide-y divide-y-{w-80} p-4">
      <div className="flex w-full rounded-md">
        <div className="flex justify-between pb-4 w-full ">
          <div className="flex flex-wrap">
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full">
              <Image
                src={region[0]?.flag}
                className="rounded-full bg-customWhite"
                alt={name}
                sizes="100%"
                width={0}
                priority
                height={0}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div>
              <div className="title-sm sm:title-base md:title-lg px-3">
                {name}
              </div>
              <div className="text-normal-sm px-3"> {symbol} </div>
            </div>
          </div>
          <div>
            <div
              className={`flex bg-opacity-50 rounded-md w-auto h-auto px-[6px] ${
                percentageChanges >= 0
                  ? 'bg-primary-background'
                  : 'bg-error-background'
              }`}
            >
              <div
                className={`flex items-center text-medium-base ${
                  percentageChanges >= 0
                    ? 'text-primary-default'
                    : 'text-error-default'
                }`}
              >
                {Math.abs(percentageChanges)}%
              </div>
              <div className="flex justify-center items-center">
                {percentageChanges >= 0 ? (
                  <ArrowToSideTopIcon
                    className="text-xs"
                    color="var(--primary-default)"
                  />
                ) : (
                  <ArrowToSideDownIcon
                    className="text-xs"
                    color="var(--error-default)"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-3 w-full h-full">
        <div className="title-sm sm:title-base md:title-lg">
          {useTomanToRial(exchangeMoneyActive)} {t('rial')}
        </div>
        <div className="text-medium-xs sm:text-medium-sm">
          {updatedAt.slice(10)}
        </div>
      </div>
    </div>
  )
}
