export interface ProfileViewModelType {
  initialValues: ProfileFieldsType
  validationSchema: yup.ObjectSchema<any>
  handleSubmit: (values: ProfileFieldsType) => void
  isPending: boolean
  dataProfile: any
  dataProfileGet: any
  isSuccessProfileGet: boolean
  isVerify: boolean
  isReject: boolean
  guidelinesTextKeys?: ProfileGuidelinesTextProps.guidelinesTextKeys
}
export interface ProfileGuidelinesTextProps {
  guidelinesTextKeys: {
    title: string
    items: string[]
  }
}
export interface ProfileUploaderPropsType {
  name: string
  isVerify: boolean
  icon: any
  textIcon: string
}

export interface ProfileFieldsType {
  companyName: string
  economicCode: string
  nationalCode: string
  taxCode: string
  phone: string
  registrationNumber: string
  postalCode: string
  address: string
}

interface ProfileViewModelType {
  dataProfileGet: any
  initialValues: any
  validationSchema: any
  handleSubmit: (values: any) => void
  isPending: boolean
  isSuccessProfileGet: boolean
  isVerify: boolean
  isReject: boolean
}
