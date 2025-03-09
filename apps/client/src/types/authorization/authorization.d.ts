export interface HeadAuthorizationViewModelType {
  dataNationCardInfo?: any
  refetchNationCardInfo?: any
  isLoadingNationCardInfo?: any
  user?: any
  refetchUserProfileME?: any
  isLoading?: any
  onSubmit?: any
  BREADCRUMBS_DATA?: any
}

export interface ConfirmCardType {
  backgroundColor: string
  bgRounded: string
  cardIcon: ReactNode
  external: string
  description: string
  qualificationIcon?: ReactNode
  borderRadius?: string
  fadingCircle?: any
  confirmation?: any
}

export interface NationalCardValuesType {
  nationalNumber: string
  gender: any
  birthDate: string | null
  nationalCardImg: string
}
export interface FormNationalCardViewModelType {
  initialValues?: any
  validationSchema?: any
  handleSubmit?: any
  isLoading?: boolean
  isSuccess?: boolean
  isPending?: boolean
  isVerify?: boolean
  itemList?: any
  momentBirthDate?: any
  dataNationalCardPost?: any
  dataNationalCardGet?: any
  isReject?: boolean
  isSuccessNationalCard?: any
}

export interface AuthLevelFormPropsType {
  disableAuth?: boolean
}
