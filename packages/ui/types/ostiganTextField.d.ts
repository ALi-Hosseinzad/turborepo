import type { InputBaseComponentProps, SxProps } from '@mui/material'
import type { TextFieldPropsSizeOverrides } from '@mui/material/TextField'
import type { OverridableStringUnion } from '@mui/types'

export interface OstiganTextFieldType {
  onChangeHandler?: (value: any) => unknown
  onKeyPress?: any
  label?: string
  value?: any
  showErrorText?: boolean
  name: string
  type?: string
  classNameContainer?: string
  classnametitle?: string
  variant?: 'filled' | 'outlined' | 'standard'
  handleTextChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  fullWidth?: false | true
  color?: OverridableStringUnion<
    'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
  >
  helperText?: any
  placeholder?: string
  multiline?: boolean | undefined
  select?: boolean
  rows?: number | string
  maxRows?: number | string
  minRows?: number | string
  InputProps?: any
  inputProps?: InputBaseComponentProps | undefined

  inputLabelProps?: {
    shrink: boolean
    required: boolean
  }
  disabled?: boolean
  autoComplete?: 'off' | 'on'
  margin?: 'dense' | 'none' | 'normal'
  required?: boolean

  autoFocus?: boolean
  sx?: SxProps
  id?: string
  defaultValue?: string
  inputRef?: React.Ref<HTMLInputElement>
  error?: any
  ref?: any
  onBlur?: any
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange?: any
  className?: string
  sizeInput?: string
  size?: OverridableStringUnion<'small' | 'medium', TextFieldPropsSizeOverrides>
  title?: string
  borderColor?: string
  borderColorOnHover?: string
  borderColorOnFocus?: string
  borderColorError?: string
  borderColorHoverDisabled?: string
  borderColorCustomState?: string
  borderColorDefault?: string
  borderColorDisabled?: string
  borderColorOnHover?: string
  customTextColorInputText?: string
  labelColor?: string
  onKeyDown?: any
}
