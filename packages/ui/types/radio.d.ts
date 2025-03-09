// import type { ChangeEvent } from 'react'

export type OptionType = Record<string, string>

export interface RadioType {
  name: string
  label?: string
  sx?: any
  value?: string
  optionLabel?: string
  labelClassName?: string
  borderColor?: string
  optionValue?: string
  options: OptionType[]
  insideBlockStyles?: any
  // onChange: (e: ChangeEvent<HTMLInputElement>, value: string) => void
  onChange?: any
  helperText?: string
  activeBorder?: string
  flexDirection?: string
  wrapperClassName?: string
  hasError?: boolean
  checkedIcon?: React.ReactNode
  color?: string
  checkedColor?: string
  disabled?: boolean
  disableRipple?: boolean
  icon?: React.ReactNode
  size?: number
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom'
  showRadioIcon?: boolean
  defaultValue?: string
  activeBackgroundColor?: string
  setFieldValue?: any
}

export type RadioFormikType = Omit<RadioType, 'value'>
