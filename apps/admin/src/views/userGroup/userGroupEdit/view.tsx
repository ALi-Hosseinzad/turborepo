'use client'

import {
  type FC, // type UserGroupCreateViewType,
  UserGroupForm,
  UsersInGroup,
  useTranslations,
} from '../imports'

const UserGroupEditView: FC<any> = (props) => {
  const t = useTranslations()
  const { initialValues, onSubmit, isLoading, isSuccessEdit } = props
  // TODO:NEGAR
  return (
    <div className="flex flex-col gap-4 mb-5">
      <UserGroupForm
        isLoading={false}
        initialValues={initialValues}
        titleHeader2={t('userGroupInfo')}
        titleHeader1={t('editGroup')}
        isSuccess={isSuccessEdit}
        onSubmit={onSubmit}
      />
      <UsersInGroup isLoadingEdit={isLoading} />
    </div>
  )
}

export default UserGroupEditView
