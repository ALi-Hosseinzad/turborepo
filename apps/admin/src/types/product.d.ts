import type { OptionalObjectType } from './common'

export interface ProductBodyInTableType {
  id: string
  product: OptionalObjectType
  region: OptionalObjectType
  status_label: string
  quantity: number | string
  price: number | string
  amount: number | string
  discount_type: string
}

export type PermissionsBodyItemType = ProductBodyInTableType &
  OptionalObjectType

export interface UseProductFormViewModelType {
  validationSchema: object
  dataProductsOption: any[]
  isLoadingProduct: boolean
  dataRegionOption: any[]
  isLoadingRegion: boolean
  status: any[]
}

export interface UseProductCreateViewModelType {
  initialValues: OptionalObjectType
  handleAddNewProduct: (values, formikProps) => Promise<any>
  isPending: boolean
}

export interface UseProductEditViewModelType {
  initialValues: OptionalObjectType
  handleEditNewProduct: (values) => Promise<any>
  isPendingPostData: boolean
  isLoadingGetData: boolean
}

export interface ProductHistoryViewModelType {
  bodyInfo?: any
  headInfo?: any
  pageCount?: number | string
  isLoading?: boolean
  params?: QueryStringType
  onChangePage?: (arg: string) => void
}
