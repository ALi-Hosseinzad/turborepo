import type { ReactNode } from 'react'

export interface FormUserDetailsLayoutType {
  children: ReactNode
  titleHeader2?: string
  hasButton?: boolean
  hasAuthHeader?: boolean
  id?: string
  url?: string
  isLoading: boolean
  dataConfirmOptions: string[]
  isLoadingConfirmOptions: boolean
  isLoadingPostConfirmOptions: boolean
  disabledButton: boolean
  initialValuesConfirmOptions: {
    reason: string
    confirmData: string
  }
  validationSchemaConfirmOptions: object
  initialValuesConfirmOptions: {
    reason: string
    confirmData: string
  }
  handleConfirm: ({
    id,
    url,
    isVerify,
    values,
  }: {
    id: string | undefined
    url: string | undefined
    isVerify: 0 | 1
    values?: any
  }) => Promise<void>
  handleOpen: (type: string) => void
  handleClose: () => void
  showConfirmModal: {
    accept: boolean
    reject: boolean
  }
}
