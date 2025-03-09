import type * as yup from 'yup'
import type { UseListViewModelType } from './common'

export interface NotificationCreateViewType {
  initialValues: object
  isLoadingSubmit: boolean
  onSubmit: (values, formikProps?) => void
}

export interface NotificationFormPropsType
  extends UseOnlinePaymentCreateViewModelType {
  isLoadingEditData: boolean
  onSubmit: (body: any) => void
}

export interface NotificationFormViewPropsType {
  initialValues: object
  isLoading: boolean
  onSubmit: (values, formikProps?) => void
}

export interface UseNotificationEditViewModelType extends UseListViewModelType {
  refetchList: any
}
export interface UseNotificationFormViewModelType {
  validationSchema: yup.ObjectSchema<object>
}
