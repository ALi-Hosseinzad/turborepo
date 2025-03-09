export interface ButtonType {
  variant: 'text' | 'outlined' | 'contained'
  type: 'button' | 'reset' | 'submit'
  children: React.ReactNode
  styleType?: 'error' | 'success'
  disableRipple?: boolean
  disabled?: boolean | undefined
  endIcon?: JSX.Element | null
  startIcon?: JSX.Element | null
  backgroundColor?: string
  hoverBackgroundColor?: string
  activeBackgroundColor?: string
  activeColor?: string
  color?: string
  hoverColor?: string
  className?: string
  borderColor?: string
  hoverBorderColor?: string
  fontSize?: number | string
  fontFamily?: string
  borderRadius?: number | string
  fullWidth?: boolean
  width?: string
  height?: string
  padding?: string | number
  isLoading?: boolean
  colorPallet?: {
    default: string
    hover: string
    active: string
    disabled: string
  }
  handleClick?: (event?: any) => void
}
