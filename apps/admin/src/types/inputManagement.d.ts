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

export interface InputManagementEditViewModelType {
  initialValues: Record<string, any>
  setInitialValues: SetStateAction
  handleEditInput: (values) => Promise<any>
  isPending: boolean
  isLoadingGetData: boolean
  initialInputType: boolean
  setIinitialInputType: SetStateAction
  selectedOption: {
    status: boolean
    type: string
    name: string
  }
  setSelectedOption: SetStateAction
}

export interface InputManagementCreateViewModelType {
  initialValues: Record<string, any>
  handleAddNewInput: (values, formikProps) => Promise<any>
  isPending: boolean
  selectedOption: {
    status: boolean
    type: string
    name: string
  }
  setSelectedOption: SetStateAction
}
export interface DynamicListType {
  onChangeHandler: (value) => void
  list: any[]
  type: string
}
export interface InputManagementFormType {
  initialValues: OptionalObjectType
  setInitialValues?: SetStateAction
  isLoading: boolean
  disabled: boolean
  onSubmit: (values, formikProps) => Promise<any>
  initialInputType?: boolean
  setIinitialInputType?: SetStateAction
  selectedOption: {
    status: boolean
    type: string
    name: string
  }
  setSelectedOption: SetStateAction
}

export interface InputManagementFormViewType {
  datainputTypeOption: Record<string, any>[]
  dataRegexOption: Record<string, any>[]
  handleSelectedOption: (value, setFieldValue) => void
  selectedOption: SetStateAction
  initialInputType?: boolean
  options: Record<string, any>[]
  property: Record<string, any>[]
  formTypeOptions: Record<string, any>[]
}
export interface InputManagementFormViewModelType {
  validationSchema: any
  datainputTypeOption: Record<string, any>[]
  dataRegexOption: Record<string, any>[]
  handleSelectedOption: (value, setFieldValue) => void
  formTypeOptions: Record<string, any>[]
}
