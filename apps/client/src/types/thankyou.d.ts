export interface OrderDataType {
  tracking_code?: string
  updated_at?: string
}
interface ThankYouViewProps {
  thankYouData: TankYouData
  isPending: boolean
  onSubmit: () => void
  visualConfetti: boolean
  matchType: 'ORDER' | 'CHARGE' // Adjust type based on your actual use case
}
interface TankYouData {
  trackingCode?: {
    title: string
    key: string
    value: string | undefined
  }
  paymentTime?: {
    title: string
    key: string
    value: string | undefined
  }
  chargeAmount?: {
    title: string
    key: string
    value: string | undefined
  }
  chargeTime?: {
    title: string
    key: string
    value: string | undefined
  }
}
