export interface AuthenticationResultItem {
  description: string
}

export interface DataProfileGet {
  authentication_result: AuthenticationResultItem[]
}

export interface AuthenticationResultProps {
  data: any
  isReject: boolean
}

