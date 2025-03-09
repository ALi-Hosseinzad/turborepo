export type UserType = User | null

export interface User {
  id: number
  name: string
  email: string
  birthday: string
  gender: 'male' | 'female'
  phone: string
  admin: boolean
  roles: any
  avatar: any
  phone_status: boolean
  verify_state: number
  has_verified: boolean
  national_card: any
  bank_account: any
  notification_is_unread: boolean
  created_at: string
  updated_at: string
}
