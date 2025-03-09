export interface SwitchType {
  title?: string
  color?: ColorType
  disabled?: boolean
  containerClass?: string
  onChange?: (e?) => any
  defaultChecked?: boolean
  checked?: boolean
}
export interface FormikSwitchType extends Partial<SwitchType> {
  name: string
}
