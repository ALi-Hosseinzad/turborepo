import type { FormikHelpers } from 'formik'

export interface PageUrlFormDataType {
  name: string
  description?: string
  href: string
  slug: string
  type?: any
}

export interface PageUrlCreateViewModelType {
  initialValues: {
    name: string
    description?: string
    href: string
    slug: string
    type?: any
  }
  isLoading: boolean
  onSubmit: (
    values: PageUrlFormDataType,
    formikProps: FormikHelpers<PageUrlFormDataType>,
  ) => Promise<void>
  refetchList: () => Promise<void>
}
