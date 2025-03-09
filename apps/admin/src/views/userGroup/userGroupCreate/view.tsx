'use client'

import { type FC, UserGroupForm, useTranslations } from '../imports'

// TODO:NEGAR
const UserGroupCreateView: FC<any> = (props) => {
  const t = useTranslations()
  const { initialValues, onSubmit, isLoadingSubmit, isSuccessCreate } = props

  return (
    <UserGroupForm
      isLoading={isLoadingSubmit}
      initialValues={initialValues}
      titleHeader1={t('addNewGroup')}
      titleHeader2={t('newGroupSpecification')}
      isSuccess={isSuccessCreate}
      onSubmit={onSubmit}
    />
  )
}

export default UserGroupCreateView
