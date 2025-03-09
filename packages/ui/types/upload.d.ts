export interface FormikFileUploaderPropsType {
  onloadHandler?: (files: string[]) => void
  wrapperClass?: string
  fileNames?: any
  placeholder?: any
  placeholderClass?: string
  attachIcon?: JSX.Element
  acceptedFile?: string
  isPositionCenter?: boolean
  isColumn?: boolean
  limitationFileSizeText?: string
  disabled?: boolean
  sizeLimit?: number
  errorCallback?: any
  multiple?: boolean
  title?: string
  result?: string
  uploadAreaClass?: string
  border?: string
  typeUploader?: any
  showPreviewUploader?: string
  handleFileUploadClick?: any
  handelDelete?: any
  handleFileInputChange?: any
  fileItems?: any
  imgUploader?: any
  imagePreview?: any
  name: string
  classNameImagePreview?: string
  errors?: any
  textButton?: any
  sx?: Record<string, any>
  startAdornment?: any
  endAdornment?: any
  onChange?: (name: any[]) => void
}
export interface OstiganUploaderPropsType extends FormikFileUploaderPropsType {
  value: string
  errors?: string
  onBlur?: (value: boolean) => void
  handelDeleteflle?: any
  defaultImage?: string
}
