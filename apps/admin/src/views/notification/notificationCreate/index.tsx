'use client'

import {
  NotificationCreateView,
  useNotificationCreateViewModel,
} from '../imports'

const NotificationCreate = (): JSX.Element => {
  const { initialValues, isLoadingSubmit, onSubmit } =
    useNotificationCreateViewModel()

  return (
    <NotificationCreateView
      initialValues={initialValues}
      isLoading={isLoadingSubmit}
      onSubmit={onSubmit}
    />
  )
}

export default NotificationCreate
