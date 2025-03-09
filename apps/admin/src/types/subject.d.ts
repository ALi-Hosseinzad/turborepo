import type { RefetchOptions } from '@tanstack/query-core'

export interface SubjectsSelectPropsType {
  onChange?: () => void
  defaultValue?: any
  name: string
  label?: string
}

export interface RoleIdsType {
  id: string | number
  name: string
}

export interface InitialValuesType {
  title: string
  icon: string
  role_ids: RoleIdsType[]
}

export interface SubjectCreateViewType {
  initialValues: InitialValuesType
  isLoading: boolean
  onSubmit: (values: T, formikProps: FormikHelpers<T>) => any
}

export interface SubjectFormViewType extends SubjectCreateViewType {
  titleHeader1: string
  titleHeader2: string
}

export interface UseSubjectCreateViewModelType extends SubjectCreateViewType {
  refetchList: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<any, Error>>
}
export interface FaqsType {
  answer: string
  created_at: string
  id: number
  question: string
  subject_id: number
  updated_at: string
}

export interface PermissionsType {
  id: number
  created_at: string | null
  meta_name: string
  description: string
  name: string
  type: string
  type_label: string
  updated_at: string
}
export interface RolesType {
  id: number
  created_at: string
  meta_name: string
  name: string
  permissions: PermissionsType[]
  status: string
  updated_at: string
}

export interface SubjectRecordType {
  created_at: string
  faq: FaqsType[]
  icon: string | null
  id: number
  roles: RolesType[]
  title: string
  updated_at: string
}
export interface TableBodyType {
  id: number
  title: string
  roles: string
}

export interface SubjectRecordType {
  created_at: string
  faq: FaqsType[]
  icon: string | null
  id: number
  roles: RolesType[]
  title: string
  updated_at: string
}
