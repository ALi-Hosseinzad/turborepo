export interface UseUndertakingViewModelReturnType {
  initialValues: InitialValues
  validationSchema: any
  handleSubmit: (values: InitialValues) => void
  isPending: boolean
  dataUndertakingPost: UndertakingPostData | undefined
  dataUndertakingGet: any
  isSuccessUndertakingGet: boolean
  isVerify: boolean
  isVerifyPost: boolean
  isReject: boolean
  guidelinesTextKeys: GuidelinesTextKeys
  isSuccessPost: boolean
}

export interface UndertakingPostData {
  data?: {
    status?: string
  }
}
