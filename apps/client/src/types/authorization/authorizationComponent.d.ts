export interface BankCardPropsType {
  numberOfCards: number
  cardInfo?: any
  handleBankCardDeleteGenuine?: any
}

//BankCardLegal
export interface BankColorsType {
  up: string
  middle: string
  down: string
}

export interface CardInfoType {
  id: string
  bank_colors: BankColorsType
  logo: string
  bank_name: string
  card_number: string
  sheba_number: string
  is_verify_label: string
}

export interface BankCardLegalPropsType {
  numberOfCards: number
  cardInfo: CardInfoType
  handleBankCardDelete?: (id: string) => void
}

export interface LevelPropsType {
  backgroundColor: string
  bgRounded: string
  style?: string
  borderRadius?: string
  cardIcon: JSX.Element
  external: string
  description: string
  fadingCircle?: string
  confirmation?: JSX.Element
  qualificationIcon?: JSX.Element
}
