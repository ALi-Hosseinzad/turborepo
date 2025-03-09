import { Form } from 'formik'
import type { FormWrapperPropsType } from '../../types'
import { FormikWrapper } from './formikWrapper'

export const FormWrapper = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}: FormWrapperPropsType): JSX.Element => {
  return (
    <FormikWrapper
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formikProps: any) => {
        return (
          <Form>
            {typeof children === 'function' ? children(formikProps) : children}
          </Form>
        )
      }}
    </FormikWrapper>
  )
}
