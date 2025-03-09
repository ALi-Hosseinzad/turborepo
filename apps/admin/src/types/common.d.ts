import type { SetStateAction } from 'react'
import type { RefetchOptions } from '@tanstack/query-core'

export type DirectionType = 'ASC' | 'DESC' | ''
export interface PagePropsType {
  params: {
    locale: string // Assuming locale is a string, adjust the type if necessary
  }
}
export interface QueryListType extends Record<string, string> {
  sort: string
  direction?: DirectionType
  perPage: string
  search: string
  page?: string
  params?: any
}

export type OptionalObjectType = Record<string, any>

interface ResponseType extends OptionalObjectType {
  data: OptionalObjectType[] | OptionalObjectType
  pagination?: OptionalObjectType
}
interface UseListType {
  isLoading: boolean
  isFetching?: boolean
  data?: any
  refetchList?: (options?: RefetchOptions | undefined) => Promise<any>
  pageCount: any
  onChangePage: any
  page: any
  onErrorDelete: any
  afterDeleteHandler?: () => Promise<any>
}
export interface ListPropsType {
  bodyInfo?: any
  headInfo?: any
  url?: any
  queryParams?: Record<string, any>
  queryKey?: any
  tableUrlDeleteRequest?: any
  tableEditNavigationLink?: any
  tableAddNavigationLink?: any
  tableAddBtnText?: any
  tableLabel?: any
  isLoadingParent?: boolean
  name?: string
}

type UseListTypeOmit = Omit<UseListType, 'data' | 'params'>

export interface UseListViewModelType extends ListViewType {
  userData?: any
  showModal?: boolean
  setShowModal?: SetStateAction
  tabItems: any[]
  tabPanelItems: any[]
  isLoadingChangeStatus: boolean
}

export interface ListViewType {
  headInfo?: string[]
  bodyInfo?: any[]
  isLoading?: boolean
  isFetching?: boolean
  page?: any
  params?: any
  pageCount?: number | string
  onChangePage?: (arg: string) => void
  afterDeleteHandler?: () => Promise<any>
  onErrorDelete?: (error: any) => void
  tableLabel?: string
  refetchList?: any
  userData?: any
  showModal?: any
  setShowModal?: any
}
export interface UseEditPropsType {
  url: string
  method?: string
  queryKey: any
  handleBody: any
  handleInitial: any
}
export interface FormikSelectPropsType {
  onChange?: () => void
  name: string
  label: string
  url: string
  queryKey: string
  placeholder: string
  optionLabel: string
  optionValue: string
  multiple?: boolean
  disabled?: boolean
  className?: string
  onChangeHandler?: (value: any) => void
}

// TODO:it is used in some other places just change name
export interface UseSelectScrollPropsType {
  url: string
  queryKey: string
}
export interface CustomAutoCompletePropsType {
  url: any
  name: string
  queryKey: string
  label: string
  optionTitle: string
  multiSelection?: boolean
  enabled?: boolean
}
export interface CustomAutoCompleteViewPropsType {
  data: any
  name: string
  label: string
  optionTitle: string
  isLoading: boolean
  multiSelection?: boolean
}
export interface UseAutoCompleteType {
  data: any
  isLoading: boolean
}
export interface CreatePropsType {
  onSubmit: any
  initialValues: any
  isLoadingSubmit: boolean
}
export interface EditPropsType {
  editData?: any
  initialValues: any
  isLoadingEditData: boolean
  isPendingSubmitEdit: boolean
  isSuccessEdit?: boolean
  onSubmit: any
}
export interface EditViewModelType {
  editData?: any
  initialValues?: any
  isLoadingEditData: boolean
  isPendingSubmitEdit: boolean
  isSuccessEdit?: boolean
  submitRequest?: any
  onSubmit?: any
}
export interface UseEditReturnType {
  editData: any
  isLoadingEditData: boolean
  isPendingSubmitEdit: boolean
  isSuccessEdit: boolean
  submitRequest: any
}
