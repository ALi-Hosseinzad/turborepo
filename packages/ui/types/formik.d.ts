import type { ReactNode } from 'react'
import type { FormikHelpers, FormikValues } from 'formik'

export interface FormikType<T extends FormikValues> {
  initialValues: T
  validationSchema?: unknown // Replace 'any' with the actual validation schema type
  isValid?: boolean
  dirty?: boolean
  onSubmit: (values: T, formikProps: FormikHelpers<T>) => any
}
export interface FormikWrapperPropsType extends FormikType<T> {
  children: (formikProps: FormikProps<T>) => ReactNode
}

export interface FormWrapperPropsType extends FormikType<T> {
  children: any
}
