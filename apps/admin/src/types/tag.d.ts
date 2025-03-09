import type { OptionalObjectType } from './common'

export interface TagBodyInTableType {
  id?: string
  name: string
  slug: string
}

export type PermissionsBodyItemType = TagBodyInTableType & OptionalObjectType

export interface UseTagFormViewModelType {
  validationSchema: object
  dataProductsOption?: any[]
  isLoadingProduct?: boolean
  dataRegionOption?: any[]
  isLoadingRegion?: boolean
}

export interface UseTagCreateViewModelType {
  initialValues: OptionalObjectType
  handleAddNewProduct: (values, formikProps) => Promise<any>
  isPending: boolean
}

export interface UseTagEditViewModelType {
  initialValues: OptionalObjectType
  handleEditNewProduct: (values) => Promise<any>
  isPendingPostData?: boolean
  isLoadingGetData?: boolean
}
