import type { ReactNode } from 'react'

export interface FormikAutoCompleteType {
  name: string
  listOption?: any[]
  optionTitle: string
  autoCompleteLabel?: string
  multiSelection?: boolean
  placeholder: string
  hasCheckbox?: boolean
  numberMenuColumns?: number
  limitTags?: number
  hoverBackgroundColorOption?: string
  focusedBackgroundColorOption?: string
  groupedOptions?: unknown
  isLoading?: boolean
  disabled?: boolean
  url?: string | undefined
  defaultValue?: any
  querykey?: any
  arrowIcon?: ReactNode | undefined
  optionDisabled?: (option: unknown) => boolean
  groupBy?: (option: unknown) => string
  onChangeHandler?: (value) => void
}

export interface OstiganAutoCompleteType extends FormikAutoCompleteType {
  value: any
  onBlur?: () => boolean
  onChange?: (value: string) => void
  error?: boolean | undefined | null
  helperText?: string
  optionTitle?: string
  placeholder?: string

  setFieldValue?: (name: string, value: any[] | string) => void
}
