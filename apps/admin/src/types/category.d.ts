import type { SetStateAction } from 'react'
import type { QueryListType, UseListViewModelType } from 'types/common'

export interface BodyInfoCategoryType {
  id: number
  title: string
  priority: string
  subject: string
  name: string
  phone: string
  createdAt: string
  status: boolean
}
export interface UseCategoryListViewModelType extends UseListViewModelType {
  categoriesList: any
  setParams: Dispatch<SetStateAction<QueryListType>>
  isLoading: boolean
}
export interface CategoryDetailDataType {
  categoryDetailData: any
}

export interface UseCategoryCreateViewModelType {
  initialValues: InitialValuesType
  onSubmitCategory: (values, formikProps) => Promise<any>
  isLoadingSubmitCategory: boolean
}

export type CategoryDetailViewPropsType = Omit<
  UseCategoryDetailViewModelType,
  'isLoadingGetCategory' | 'isLoadingSubmitReply' | 'isLoadingSubmitSubject'
>

export interface InitialValuesType {
  name: string
  description: string
  slug: string
  category_image: string
  type: any
  parent_id?: any
}

export interface UseCategoryEditViewModelType {
  categoryData: object
  isLoadingGetCategory: boolean
  isLoadingSubmitCategory: boolean
  bodyInfo: object[]
  headInfo: string[]
  initialValues: any
  onSubmitCategory: (values) => Promise<any>
}
