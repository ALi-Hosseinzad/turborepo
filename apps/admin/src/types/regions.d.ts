import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import type { UseListViewModelType } from './common'

export type CreateViewModelRouteType = string[] | AppRouterInstance

interface ExchangeMoneyType {
  id: number
  exchange_price: number
  exchange_price_rate: number
  created_at: string
  updated_at: string
}

interface CurrencyType {
  id: number
  name: string
  symbol: string
  exchangeMoney: ExchangeMoneyType
  created_at: string
  updated_at: string
}

interface GiftCardProductType {
  id: number
  price: number
  quantity: number
  exchange_price: number[]
}

export interface RegionType {
  id: number
  name: string
  flag: string
  symbol: string
  slug: string
  currency_id: number
  currency: CurrencyType
  status: string
  status_label: string
  gift_card_products: GiftCardProductType[]
  created_at: string
  updated_at: string
}

export interface UseRegionViewModelType {
  data: any
  dataRegion?: any
  isLoading: boolean
  bodyInfo?: (body: RolesBodyItemType) => any[]
  params: QueryStringType
  afterDeleteHandler: (arg: any[]) => Promise<any>
  onChangePage: (arg: string) => void
  headInfoTableHead: string[]
}

// create
export interface CreateValuesType {
  name: string
  status: any
  currencyId: any
  flag_image: string
  symbol: string
  slug: string
}
export interface ReionInfotype {
  name: string
  status: any[]
  currency_id: string
  flag_image: string
  symbol: string
  slug: string
}

// TODO:delete if no need
export interface UseViewModelReturnType {
  initialValues: CreateValuesType
  onSubmit?: (values: any, formikProps: any) => Promise<any>
  currencyItem?: any
  ReginEditData?: any
  headInfoTableHead?: string[]
  dataRegionEdit?: any
  isLoading?: boolean
}
export interface UseListRegionViewModelType extends UseListViewModelType {
  isLoadingChangeStatus: boolean
}
