'use client'

import { UserGroupCreateView, useUserGroupCreateViewModel } from '../imports'

export const UserGroupCreate = (): JSX.Element => {
  const { initialValues, onSubmit, isLoadingSubmit, isSuccessCreate } =
    useUserGroupCreateViewModel()

  return (
    <UserGroupCreateView
      initialValues={initialValues}
      isLoadingSubmit={isLoadingSubmit}
      isSuccessCreate={isSuccessCreate}
      onSubmit={onSubmit}
    />
  )
}
