import type { RefetchOptions } from '@tanstack/query-core'

interface ExchangeMoneyType {
  id?: number
  exchange_price?: string
  exchange_price_rate?: number
  created_at?: string
  updated_at?: string
}

export interface DiscountTableType {
  map?: any
  id?: number
  code?: string
  amount?: string
  min?: number
  max?: number
  type?: string
  what_for?: string
  amount_type?: string
  status?: string
  expire_day?: string
  gift_card_product?: any // Adjust the type as needed
  gift_card_product_id?: any // Adjust the type as needed
  gift_card_package?: any // Adjust the type as needed
  gift_card_package_id?: any // Adjust the type as needed
  online_payment?: any // Adjust the type as needed
  online_payment_id?: any // Adjust the type as needed
  updated_at?: string
  created_at?: string
}

export interface DiscountCreateViewType {
  initialValues: DiscountTableType
  isLoading?: boolean | undefined
  onSubmit?: (values: T, formikProps: FormikHelpers<T>) => any
  bodyInfo?: any[]
  headInfo?: string[]
  currenciesManagementData?: any
  isLoadingCurrenciesManagementData?: boolean | undefined
}

export interface DiscountFormViewType extends DiscountCreateViewType {
  titleHeader1: string
  titleHeader2: string
}

export interface UseDiscountCreateViewModelType extends DiscountCreateViewType {
  refetchList: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<any, Error>>
}
