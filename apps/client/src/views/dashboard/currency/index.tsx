import { CurrencyView, useCurrencyViewModel } from '../import'

export const Currency = () => {
  const { currencyList, isLoading, isError } = useCurrencyViewModel()

  return (
    <CurrencyView
      currencyList={currencyList?.data}
      isLoading={isLoading}
      isError={isError}
    />
  )
}
