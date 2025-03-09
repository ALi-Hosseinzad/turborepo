export interface FormLayoutType {
  children: React.Element
  initialValues: object
  onSubmit: UseMutateFunction<any, Error, any, unknown>
  validationSchema: yup.AnyObjectSchema
  titleHeader1?: string
  titleHeader2?: string
  hasCancleButton?: boolean
  disabled?: boolean
  dontShowCancelBtn?: boolean
  isLoading?: boolean
}
