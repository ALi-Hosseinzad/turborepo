export interface InitialValues {
  file: string
}

export interface ArticleOfAssociationPostData {
  data?: {
    status?: string
  }
}

export interface GuidelinesTextKeys {
  title: string
  items: string[]
}

export interface UseArticleOfAssociationViewModelReturn {
  initialValues: InitialValues
  validationSchema: any
  handleSubmit: (values: InitialValues) => void
  isPending: boolean
  dataArticleOfAssociationPost: ArticleOfAssociationPostData | undefined
  dataArticleOfAssociationGet: any
  isSuccessArticleOfAssociationGet: boolean
  isVerify: boolean
  isVerifyPost: boolean
  isReject: boolean
  guidelinesTextKeys: GuidelinesTextKeys
  isSuccessPost: boolean
  isSuccess: boolean
}
