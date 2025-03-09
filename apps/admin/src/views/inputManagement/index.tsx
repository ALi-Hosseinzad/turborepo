'use client'

import {
  ADD,
  FORM_INPUT_URL,
  INPUT_MANAGEMENT,
  List,
  useInputManagementListViewModel,
  useTranslations,
} from './imports'

export const InputManagement = (): JSX.Element => {
  const { headInfo, bodyInfo } = useInputManagementListViewModel()
  const t = useTranslations()

  return (
    <List
      bodyInfo={bodyInfo}
      headInfo={headInfo}
      url={FORM_INPUT_URL}
      queryKey="input-management-list"
      tableUrlDeleteRequest="admin/form-input"
      tableEditNavigationLink={INPUT_MANAGEMENT}
      tableAddNavigationLink={`${INPUT_MANAGEMENT}/${ADD}`}
      tableAddBtnText={t('addNewInput')}
      tableLabel={t('inputsManagement')}
    />
  )
}
