import type { SetStateAction } from 'react'
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

export interface UseTokenManagementFormViewModelType {
  validationSchema: object
  dataProductsOption: any[]
  isLoadingProduct: boolean
  dataPriceOption: any[]
  isLoadingPrice: boolean
  handleOnChangeProductOption: (values) => void
}

export interface UseTokenManagementCreateViewModelType {
  initialValues: OptionalObjectType
  handleAddNewToken: (values, formikProps) => Promise<any>
  isPendingToken: boolean
  isLoadingGetData?: boolean
}

export interface UseTokenManagementEditViewModelType {
  initialValues: OptionalObjectType
  setInitialValues: SetStateAction
  handleEditToken: (values, formikProps) => Promise<any>
  isPendingToken: boolean
  isLoadingGetData: boolean
}

export interface TokenManagementFormType {
  initialValues: OptionalObjectType
  setInitialValues: SetStateAction
  onSubmit: (values, formikProps) => Promise<any>
  isLoading: boolean
  disabled: boolean
  titleHeader1: string
}
export interface TokenManagementFormViewModelType {
  initialValues: OptionalObjectType
  setInitialValues: SetStateAction
}

export interface TokenManagementFormViewType {
  initialValues: OptionalObjectType
  dataProductsOption: any[]
  isLoadingProduct: boolean
  handleProductOption: (values) => void
  dataPrice: any[]
  isLoadingPrice: boolean
}
