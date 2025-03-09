export interface InitialValuesType {
  firstname: string
  lastname: string
  phone: string
  email: string
}

export interface UsePersonalInfoViewModelReturnType {
  initialValues: InitialValuesType
  validationSchema: yup.ObjectSchema<any>
  handleSubmit: () => void
  isdisabled: boolean
  isLoadingUser: boolean
}
