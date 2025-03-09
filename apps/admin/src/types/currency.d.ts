import type { RefetchOptions } from '@tanstack/query-core'

interface ExchangeMoneyType {
  id?: number
  exchange_price?: string
  exchange_price_rate?: number
  created_at?: string
  updated_at?: string
}

export interface CurrencyTableType {
  exchange_price: any
  length?: any
  map?: any
  id?: number
  name?: string
  symbol?: string
  exchangeMoney?: ExchangeMoney
  created_at?: string
  updated_at?: string
  status?: string
}

export interface CurrencyCreateViewType {
  initialValues: CurrencyTableType
  isLoading?: boolean | undefined
  onSubmit?: (values: T, formikProps: FormikHelpers<T>) => any
  bodyInfo?: any[]
  headInfo?: string[]
  currenciesManagementData?: any
  currencyData?: any
  isLoadingCurrenciesData?: any
  isLoadingCurrenciesManagementData?: boolean | undefined
}
export interface UseCurrencyEditViewModelType {
  initialValues: any
  isLoading: boolean
  onSubmit: any
  headInfo: string[]
  currencyData: any
}

export interface CurrencyFormViewType extends CurrencyCreateViewType {
  titleHeader1: string
  titleHeader2: string
}

export interface UseCurrencyCreateViewModelType extends CurrencyCreateViewType {
  refetchList: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<any, Error>>
}
