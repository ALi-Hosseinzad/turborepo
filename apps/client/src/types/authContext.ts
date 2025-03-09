import type { Dispatch, SetStateAction } from 'react'
import type { User } from './user'

// interface Response {
//     success: boolean
//     message: string
// }

export interface PhoneInterface {
  phone: string
}
export interface Otp {
  otp: string
  phone: string
}
export interface UserInfo {
  firstname: string
  lastname: string
  email: string
}

export interface LoginResponse {
  data: {
    has_verified: boolean
    otp: string
    otp_expires_in: string
    otp_length: string
    phone: string
  }
}

export interface OtpResponse extends Response {
  access_token: string
  token_type: 'Bearer'
  expire_in: string
  has_verified: boolean
  user_setting: []
}

export interface UserInfoResponse extends Response {
  data: User
}

export interface AuthContextValue {
  user: User | null | undefined
  loading: boolean
  error: boolean
  stepWizard: number
  setUser: Dispatch<SetStateAction<User | null | undefined>>
  setLoading: Dispatch<SetStateAction<boolean>>
  setError: Dispatch<SetStateAction<boolean>>
  setStepWizard: Dispatch<SetStateAction<number>>

  login: (params: PhoneInterface) => void
  verifyOtp: (params: Otp) => void
  logout: () => void
  postUserInfo: (params: UserInfo) => void
}
