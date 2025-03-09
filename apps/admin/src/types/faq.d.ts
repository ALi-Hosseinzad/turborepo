import type * as yup from 'yup'

export interface UseFaqEditViewModelType {
  isLoadingEditData: boolean
  onSubmit: (body: any) => void
  initialValues: object
  isLoadingSubmit: boolean
  onSubmit: (values, formikProps?) => void
}

export interface FaqCreateViewType {
  initialValues: object
  isLoading: boolean
  onSubmit: (values, formikProps?) => void
}
export interface UseFaqFormViewModelType {
  validationSchema: yup.ObjectSchema<object>
}

export interface FaqFormPropsType {
  isLoading: boolean
  initialValues: object
  onSubmit: (values, formikProps?) => void
  titleHeader1: string
  titleHeader2: string
}

export interface FaqFormViewPropsType extends FaqFormPropsType {
  validationSchema: yup.ObjectSchema<object>
}
