import type { UseMutateFunction, UseQueryResult } from '@tanstack/react-query'
import type { OptionalObjectType } from './common'

interface ValidationSchemaType {
  type: string
  name: string
  meta_name: string
}
export type TableBodyType = (
  params: OptionalObjectType[],
) => OptionalObjectType[]

export interface PackageCreateType {
  tagList: UseQueryResult<any>
  tableBody: TableBodyType
  categoryList: UseQueryResult<any>
  initialValues: OptionalObjectType
  validationSchema: yup.AnyObjectSchema
  handlePostPackage: UseMutateFunction<any, Error, any>
  isLoadingCategory: boolean
  isSuccessCategory: boolean
  id: string | number
  isLoadingTag: boolean
  handleCategorySearch: (e: ChangeEvent<HTMLInputElement>) => void
  handleTagSearch: (e: ChangeEvent<HTMLInputElement>) => void
  defaultTags: any[]
  isLoadingGiftCard: boolean
  giftCardData: any
  giftCardProductData: any[]
  isLoadingEditData: boolean
}

export interface PackageEditType {
  initialValues: any
  isPendingSubmitEdit: boolean
  onSubmit: any
  isLoadingEditData: boolean
  giftCardProductData: any
}

export type PackagesBodyItemType = Record<string, any>

export interface PackageCreateViewType {
  initialValues: any
  onSubmit: any
  isLoadingEditData: boolean
  isPendingSubmitEdit: boolean
}

export interface ManagementProductListViewModelType {
  headInfo: string[]
  giftCardProductData: any
}
