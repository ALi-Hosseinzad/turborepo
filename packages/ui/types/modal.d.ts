import type { ReactNode } from 'react'
import type { FormikType } from './formik'

export interface ModalType {
  children: ReactNode
  contentStyle?: object
  borderRadius?: string
  border?: string
  padding?: string
  boxShadow?: string
  open: boolean
  handleClose: () => void
}

export interface ConfirmModalType extends FormikType<T> {
  children: ReactNode
  headerTitle: string
  rejectTextButton: string
  acceptTextButton: string
  open: boolean
  isLoading?: boolean
  handleClose: () => void
}
export interface ConfirmModalTypeDelete {
  children: ReactNode
  headerTitle: string
  rejectTextButton: string
  acceptTextButton: string
  open: boolean
  handleClose: () => void
  onSuccess: () => void
  isLoading?: boolean
  styleTypeSuccessBtn?: 'error' | 'success'
}

export interface ModalHeaderType {
  handleClose: () => void
  headerTitle: string
}
