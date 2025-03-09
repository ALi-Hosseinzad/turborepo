export interface LayoutAuthType {
  initialValues: Record<string, any>
  validationSchema: any
  children?: React.ReactNode
  handleSubmit: any
  handleDeactivate?: any
  isSuccess?: boolean
  isVerify?: boolean | undefined
  showWarning?: boolean | undefined
  textWarning?: string | null
  data?: any
  disabled?: any
  titleLayout?: string
  isPending?: boolean
  showOstiganButton?: boolean
  deactivateBtn?: boolean
  disabledDeactivateBtn?: boolean
  isPendingBtn?: boolean
  isLoading?: boolean
  TextDeactivateBtn?: string
}
