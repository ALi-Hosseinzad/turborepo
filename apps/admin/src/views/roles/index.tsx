'use client'

import {
  ADD,
  List,
  React,
  ROLE_URL,
  ROLES,
  useRolesViewModel,
  useTranslations,
} from './imports'

const Roles = (): JSX.Element => {
  const { headInfo, bodyInfo } = useRolesViewModel()
  const t = useTranslations()
  
  return (
    <List
      bodyInfo={bodyInfo}
      headInfo={headInfo}
      url={ROLE_URL}
      tableLabel={t('role')}
      queryKey="roles-list"
      tableUrlDeleteRequest={`admin${ROLE_URL}`}
      tableEditNavigationLink={ROLES}
      tableAddNavigationLink={`${ROLES}/${ADD}`}
      tableAddBtnText={t('addNewRole')}
    />
  )
}

export default Roles
