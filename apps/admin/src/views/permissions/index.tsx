'use client'

import {
  ADD,
  List,
  PERMISSION_URL,
  PERMISSIONS,
  React,
  usePermissionsViewModel,
  useTranslations,
} from './imports'

const Permissions = (): JSX.Element => {
  const { headInfo, bodyInfo } = usePermissionsViewModel()
  const t = useTranslations()
  return (
    <List
      bodyInfo={bodyInfo}
      headInfo={headInfo}
      url={PERMISSION_URL}
      tableLabel={t('permissions')}
      queryKey="permission-list"
      tableUrlDeleteRequest="admin/permission"
      tableEditNavigationLink={PERMISSIONS}
      tableAddNavigationLink={`${PERMISSIONS}/${ADD}`}
      tableAddBtnText={t('addNewPermission')}
    />
  )
}

export default Permissions
