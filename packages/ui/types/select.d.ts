import type { ElementType } from 'react'

// TODO:do by mehri defaultValue
export interface FormikSelectType {
  name: string
  listOptions?: any[]
  optionLabel?: string
  optionValue?: string
  classnametitle?: string
  isLoading?: boolean
  url?: string
  defaultValue?: any
  disabled?: boolean
  size?: 'Small' | 'Medium' | 'Large'
  variant?: 'outlined' | 'standard' | 'filled'
  selectLabel?: string
  icon?: ElementType | undefined
  optionTextColor?: string
  hoverBackgroundColorOption?: string
  focusedBackgroundColorOption?: string
  borderColor?: string
  hoverBorderColor?: string
  focusedBorderColor?: string
  multiple?: boolean
  placeholder: string
  onChangeHandler?: (value: any) => void
  addintionalData?: any
  onScrollToLastItem?: () => void
  sxPaper?: object
  addExteraOption?: boolean
}

// TODO:do by mehri addintionalData type ,  setFieldValue: (name: any, value: any) => void
export interface OstiganSelectType extends FormikSelectType {
  value: any
  name: string
  heightMenu?: string
  helperText?: string
  setFieldValue?: (name: any, value: any) => void
  onChange?: (value: string) => void
  onBlur?: () => void
  optionLabel?: string
  optionValue?: string
  isLoading?: boolean
  error?: boolean
  onFocus?: () => void
  addintionalData?: any
}

export type SelectChangeEvent<Values = string> =
  | (Event & { target: { value: Values; name: string } })
  | React.ChangeEvent<HTMLInputElement>
