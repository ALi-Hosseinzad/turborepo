'use client'

import { UserGroupEditView, useUserGroupEditViewModel } from '../imports'

export const UserGroupEdit = (): JSX.Element => {
  const {
    initialValues,
    isPendingSubmitEdit,
    onSubmit,
    isLoadingGetData,
    isSuccessEdit,
  } = useUserGroupEditViewModel()

  return (
    <UserGroupEditView
      initialValues={initialValues}
      isSuccessEdit={isSuccessEdit}
      isLoading={isPendingSubmitEdit || isLoadingGetData}
      onSubmit={onSubmit}
    />
  )
}
