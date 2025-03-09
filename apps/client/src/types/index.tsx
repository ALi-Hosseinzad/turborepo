import type * as yup from 'yup'

export interface AuthorizationInitialValuesType {
  email: string
  password: string
}

export interface AuthorizationViewModelType {
  initialValues: AuthorizationInitialValuesType
  validationSchema: yup.AnyObjectSchema
  onSubmit: (values: any, formikProps: any) => void
}

export interface AuthorizationViewsPropsType {
  initialValues: any // Replace 'any' with the actual type of initialValues
  validationSchema: any // Replace 'any' with the actual type of validationSchema
  onSubmit: any // Replace 'any' with the actual type of onSubmit
}
