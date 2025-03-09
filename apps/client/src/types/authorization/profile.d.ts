export interface ProfileLegalPropsType {
  disableAuth?: boolean
}

export interface ProfileViewPropsType {
  dataProfileGet: any
  initialValues: any
  validationSchema: any
  handleSubmit: (values: any) => void
  isPending?: boolean
  isSuccessProfileGet?: boolean
  isVerify?: boolean
  disableAuth?: boolean
}
