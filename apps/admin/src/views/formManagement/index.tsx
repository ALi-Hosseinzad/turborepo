'use client'

import {
  ADD,
  FORM_MANAGEMENT,
  FORM_URL,
  List,
  useFormManagementListViewModel,
  useTranslations,
} from './imports'

export const FormManagement = (): JSX.Element => {
  const { headInfo, bodyInfo } = useFormManagementListViewModel()
  const t = useTranslations()
  return (
    <List
      bodyInfo={bodyInfo}
      headInfo={headInfo}
      url={FORM_URL}
      queryKey="form-list"
      tableUrlDeleteRequest="admin/form"
      tableEditNavigationLink={FORM_MANAGEMENT}
      tableAddNavigationLink={`${FORM_MANAGEMENT}/${ADD}`}
      tableAddBtnText={t('addNewForm')}
      tableLabel={t('formsManagement')}
    />
  )
}
