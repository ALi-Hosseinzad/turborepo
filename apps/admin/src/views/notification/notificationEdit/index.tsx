'use client'

import { NotificationEditView, useNotificationEditViewModel } from '../imports'

const NotificationEdit = (): JSX.Element => {
  const { initialValues, isPendingSubmitEdit, onSubmit, isLoadingEditData } =
    useNotificationEditViewModel()

  return (
    <NotificationEditView
      initialValues={initialValues}
      isLoading={isPendingSubmitEdit || isLoadingEditData}
      onSubmit={onSubmit}
    />
  )
}

export default NotificationEdit
