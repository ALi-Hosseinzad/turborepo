import { EXCHANGE_RATE_URL, useAxiosQuery } from '../import'

export const useCurrencyViewModel = () => {
  const { data, isLoading, isError } = useAxiosQuery({
    url: EXCHANGE_RATE_URL,
    queryKey: ['currency'],
  })

  return { currencyList: data, isLoading, isError }
}
