interface VerifyState {
  national_card?: boolean
  bank_account?: boolean
  media_authorization?: boolean
  guild?: boolean
  verify_article_of_association?: boolean
  verify_bank_account?: boolean
  verify_official_gazette?: boolean
  verify_profile?: boolean
  verify_signatory?: boolean
  verify_undertaking?: boolean
}
interface LegalUserName {
  is_legal: true
  company?: {
    company_name?: string
  }
}

interface RealUserName {
  is_legal: false
  name?: string
}

export interface UserData {
  balance?: number
  avatar?: {
    path?: string
  }
  verify_state: VerifyState
  is_legal: boolean
}

export interface WalletMenuViewProps {
  userData: UserData
}

export interface ProfileMenuViewProps {
  onClick?: (event: MouseEvent<HTMLElement>) => void
  userData: UserData
  handleClose: () => void
  anchorEl: HTMLElement | null
}

export type UserNameType = LegalUserName | RealUserName

export interface NavBarProps {
  handleDrawerToggle?: () => void
}

export interface NavBarModalType {
  handleClick: (event: MouseEvent<HTMLElement>) => void
  handleClose: () => void
}
export interface NavbarWrapperProps {
  children?: ReactNode
}
export interface ProfileModalPropsType {
  handleClose: () => void
  userData: UserData
  anchorEl: HTMLElement | null
}

export interface NavbarViewModelType {
  userData: UserData
  anchorEl: HTMLButtonElement | null
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>
}
