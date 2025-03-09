export interface UserInfoViewModelType {
  tabUserItems: { text: string; icon: JSX.Element }[]
  tabLegalUserItems: { text: string; icon: JSX.Element }[]
  tabUserPanelItems: Record<string, any>[]
  tabLegalUserPanelItems: Record<string, any>[]
  isLoading: boolean
  isLegal: boolean
}

export interface UseUserDetailsLayoutType {
  dataConfirmOptions: string[]
  isLoadingConfirmOptions: boolean
  isLoadingPostConfirmOptions: boolean
  validationSchemaConfirmOptions: object
  initialValuesConfirmOptions: {
    reason: string
    confirmData: string
  }
  showConfirmModal: {
    accept: boolean
    reject: boolean
  }
  handleConfirm: ({ id, url, isVerify, values }) => Promise<void>
  handleOpen: (type: string) => void
  handleClose: () => void
  refetchUserInfo: () => Promise<any>
}

export interface DevicesInfoViewType {
  data: any[]
  headInfoTable: string[]
  isLoading: boolean
}

export interface IdentificationInfoViewType {
  data: Record<string, any>
  refetchUserInfo: () => Promise<any>
  isLoading: boolean
}
export interface MediaAuthorizationInfoViewType
  extends IdentificationInfoViewType {
  nationalCardImage: string
}
export interface OrdersInfoViewType {
  data: Record<string, any>[]
  headInfoTable: string[]
  isLoading: boolean
}
export interface UserInfoViewType {
  data: Record<string, any>
  isLoading: boolean
}
export interface BankInfoViewType {
  verifiedBankCard: Record<string, any>[]
  unVerifiedBankCard: Record<string, any>[]
  needAdminverifiedBankCard: Record<string, any>[]
  bankCardNumber: number | string
}

export interface BankCardType {
  cardInfo: Record<string, any>
  disabled?: boolean
}
export interface UserDetailsLayoutViewModelType {
  refetchUserInfo: () => Promise<any>
}
