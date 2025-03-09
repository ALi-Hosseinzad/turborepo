import type { Dispatch, SetStateAction } from 'react'
import type ReactQuill from 'react-quill'

interface TextEditorFormikType {
  placeholder: string
  direction?: boolean
  fontSize?: boolean
  fontWeight?: boolean
  fontFamily?: boolean
  alignText?: boolean
  attachment?: boolean
  header?: boolean
  orderList?: boolean
  formattingButton?: boolean
  textFeildLabel?: string
  name?: string
  className?: string
}

export interface TextEditorType extends TextEditorFormikType {
  value: any
  error: boolean | null
  helperText: string
  handleChange: Dispatch<SetStateAction<ReactQuill.Value | undefined>>
}
