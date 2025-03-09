'use client'

import {
  ADD,
  GROUP_URL,
  List,
  useTranslations,
  useUserGroupListViewModel,
} from './imports'

const UserGroups = (): JSX.Element => {
  const t = useTranslations()
  const { bodyInfo, headInfo } = useUserGroupListViewModel()

  return (
    <>
      {!bodyInfo || (
        <List
          bodyInfo={bodyInfo}
          headInfo={headInfo}
          url={GROUP_URL}
          queryKey="user-group-list"
          tableUrlDeleteRequest={`admin${GROUP_URL}`}
          tableEditNavigationLink="userGroupManagement"
          tableAddNavigationLink={`userGroupManagement/${ADD}`}
          tableAddBtnText={t('addNewUserGroup')}
          tableLabel={t('groupsManagement')}
        />
      )}
    </>
  )
}

export default UserGroups
