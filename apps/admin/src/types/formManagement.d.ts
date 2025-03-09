import type { SetStateAction } from 'react'

export interface FormManagementCreateViewModelType {
  initialValues: OptionalObjectType
  handleAddNewInput: (values, formikProps) => Promise<any>
  isPending: boolean
  isSuccess: boolean
}
export interface FormManagementEditViewModelType {
  initialValues: OptionalObjectType
  handleEditForm: (values) => Promise<any>
  isPending: boolean
  isLoadingGetData: boolean
}
export interface FormManagementFormType {
  initialValues: OptionalObjectType
  onSubmit?: any
  isLoading: boolean
  disabled: boolean
  isSuccessPostForm?: boolean
}

export interface FormPreviewViewModelType {
  inputData: any[]
  setinputData: SetStateAction
  handleRemoveInput: (id: string) => void
  handleDragStart: (_event: any, position: any) => void
  handleDragEnter: (_event: any, position: any) => void
  handleDropEnd: () => void
}
export type FormPreviewViewType = Omit<FormPreviewViewModelType, 'setinputData'>
