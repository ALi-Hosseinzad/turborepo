'use client'

import type { ReactNode } from 'react'
import type { FormikProps, FormikValues } from 'formik'
import { Formik } from 'formik'
import type { FormikWrapperPropsType } from '../../types'

export const FormikWrapper = <T extends FormikValues>({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}: FormikWrapperPropsType): React.ReactElement => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    enableReinitialize
    onSubmit={onSubmit}
  >
    {(formikProps: FormikProps<T>) => {
      return children(formikProps) as ReactNode
    }}
  </Formik>
)
