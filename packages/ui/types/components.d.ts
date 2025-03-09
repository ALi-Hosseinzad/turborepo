import type { FormikProps } from 'formik'

type NumStrType = number | string
type ColorType =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning'
  | 'default'

export interface DatepickerPropsInterface {
  label: string
  name: string
  title: string
  defaultValue: string
  className: string
  helperText: string
  classnametitle: string
  hasError: boolean
  onClose?: any
  onChange?: (e) => void
  error: boolean
  disabled?: boolean
  setFieldValue?: (name: any, value: any) => void
}

export interface RadioButtonPropsInterface {
  options: array
  radioLabel: any
  className: any
  labelClassName: string
  onChange: () => void
  defaultValue: string
  containerClassName: string
  field: any
}

export type FileUploaderArrType = FilesUploaderType[]
export interface FilesUploaderType {
  base64: string
  name: string
  lastModified: number
}

//FIXME
export interface CustomUploadPropsInterface {
  onChange: (arg: string | ArrayBuffer) => void
  onDelete: (id: any) => void
  type: string
  form: FormikProps<any>
  field: FormikProps<any>
  acceptedFile?: string
  className?: string
}

interface OptionsInterface {
  label: string
  value: string
}

export interface RadioPropsInterface {
  options: OptionsInterface[]
  radioLabel: string
  className: string
  labelClassName: string
  onChange: () => void
  defaultValue: string
  containerClassName: string
  //FIXME
  field: any
}

export interface SelectPropsInterface {
  options: OptionsInterface[]
  defaultValue: string
  label: string
  helperText?: string
  containerClass?: string
  className?: string
}
