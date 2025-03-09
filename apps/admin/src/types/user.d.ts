import type { SetStateAction } from 'react'
import type * as yup from 'yup'
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import type { QueryListType } from './common'

export type UserCreateViewModelRouteType = string[] | AppRouterInstance

export type UserType = User | null

export interface CreateValuesType {
  firstName: string
  lastName: string
  phone: string
  email: string
  role_id: string
  password: string
  passwordRepeat: string
}

export interface OrderInfoType {
  firstname: string
  lastname: string
  phone: string
  email: string
}

export interface UseUserCreateViewModelReturnType {
  initialValues: CreateValuesType
  validationSchema: yup.AnyObjectSchema
  isPendingPostData: boolean
  onSubmit: any
}

export interface UserOnSubmitFormikPropsType {
  resetForm: () => void
}

interface UserRouteType {
  push: (href: string, options?: NavigateOptions) => void
}

export interface User {
  id: number
  name: string
  email: string
  birthday: string
  gender: 'male' | 'female'
  phone: string
  admin: boolean
  roles: any
  avatar: any
  phone_status: boolean
  verify_state: number
  has_verified: boolean
  national_card: any
  bank_account: any
  notification_is_unread: boolean
  created_at: string
  updated_at: string
}

export interface UserListViewType {
  bodyInfo: any[]
  headInfo: string[]
  params: QueryListType
  pageCount?: string | number
  isLoading: boolean
  onChangePage: (arg: string) => any
  handleAfterDelete: (() => void) | undefined
}

export interface UserStatusModalType {
  userData: {
    nationalCardData: Record<string, any>
    bankCardData: any[]
    userLevel: string
  }
  showModal: any
  setShowModal: SetStateAction
  id: string | number
}
