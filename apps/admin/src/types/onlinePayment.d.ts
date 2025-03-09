import type * as yup from 'yup'
import type { UseListViewModelType } from './common'

export interface UseOnlinePaymentCreateViewModelType {
  initialValues: object
  isLoadingSubmit: boolean
  onSubmit: (values, formikProps?) => void
}
export interface UseOnlinePaymentEditViewModelType {
  initialValues: object
  isLoadingEditData: boolean
  isPendingSubmitEdit: boolean
  onSubmit: (body: any) => void
}

export interface OnlinePaymentCreateViewType {
  initialValues: object
  isLoading: boolean
  onSubmit: (values, formikProps?) => void
}

export interface UseOnlinePaymentListViewModelType
  extends UseListViewModelType {
  refetchList: any
}
export interface UseOnlinePaymentFormViewModelType {
  validationSchema: yup.ObjectSchema<object>
  handleDisablePrice: (value: any) => void
  disablePrice: boolean
}

export interface OnlinePaymentFormPropsType {
  isLoading: boolean
  initialValues: object
  onSubmit: (values, formikProps?) => void
  titleHeader1: string
  titleHeader2: string
}

export interface OnlinePaymentFormViewPropsType
  extends OnlinePaymentFormPropsType,
    UseOnlinePaymentFormViewModelType {}
