import type { OptionalObjectType, QueryStringType } from './common'

interface RolesBodyInTableType {
  id: string | number
  name: string
  permissions: object[]
}

export type RolesBodyItemType = RolesBodyInTableType & OptionalObjectType
export interface UseRolesViewModelType {
  data: any
  isLoading: boolean
  bodyInfo: (body: RolesBodyItemType) => any[]
  params: QueryStringType
  afterDeleteHandler: (arg: any[]) => Promise<any>
  onChangePage: (arg: number) => void
}

export interface ValidationType {
  initialValues: {
    name: string
    type: string
    permissionType: any[]
  }
  validationSchema?: object
}

export interface AccessListType {
  permissionTypeList: any[]
  isPendingPostData?: boolean
  handleAddNewRole: (
    values: any,
    formikProps: UserOnSubmitFormikPropsType,
  ) => Promise<void>
}
export type RoleCreateType = ValidationType & AccessListType

// TODO:any of initialValues be done by mamad
export interface RoleEditType {
  initialValues: any
  validationSchema: object
  isLoadingGetData: boolean
  isPendingSubmitEdit: boolean
  handleAddNewRole: (
    values: any,
    formikProps: UserOnSubmitFormikPropsType,
  ) => Promise<void>
}
