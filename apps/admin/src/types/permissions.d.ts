import type { OptionalObjectType } from './common'

export interface ValidationType {
  initialValues: {
    type: {
      value: string
      label: string
    }
    name: {
      value: string
      label: string
    }
    meta_name: string
    description: string
  }
  validationSchema: object
}

export interface AccessListType {
  accessTypeList: any[]
  accessNameList: any[]
  handlePermission: (
    values: any,
    formikProps: UserOnSubmitFormikPropsType,
  ) => Promise<void>
}

export interface PermissionsBodyInTableType {
  id: string
  type: string
  name: string
  type_label: string
}

export type PermissionsBodyItemType = PermissionsBodyInTableType &
  OptionalObjectType

// TODO: do by mamad
// export type PermissionCreateType = ValidationType & AccessListType
export interface PermissionCreateType {
  initialValues: any
  validationSchema: any
  accessTypeList: any
  accessNameList: any
  handlePermission: any
  isPendingPostData: boolean
  isLoadingGetData?: boolean
}

export interface UsePermissionsViewModelType {
  params: QueryStringType
  headInfo?: string[]
  bodyInfo: any[]
  isLoading: boolean
  pageCount: number | string
  refetchPermissionsList: (
    options?: any,
  ) => Promise<QueryObserverResult<any, Error>>
  onChangePage: (arg: string) => void
  afterDeleteHandler?: (arg: any[]) => Promise<any>
}
