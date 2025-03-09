// TODO:ask from mehri
export interface FormikCheckboxType {
  label?: string
  checkboxClassName?: string
  color?: string
  checkedColor?: string
  name?: string
  title?: string
}
export interface CheckboxType extends FormikCheckboxType {
  onChange?: (value: any) => void
  value?: boolean
  error?: string
}
