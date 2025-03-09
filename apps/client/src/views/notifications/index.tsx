'use client'

import { BreadCrumbs } from '../authorization/imports'
import { NotificationsView, useNotificationViewModel } from './imports'

const Notifications = () => {
  const { notifications, setPage, isFetching, getBreadCrumbs } =
    useNotificationViewModel()
  return (
    <>
      <BreadCrumbs breadCrumbs={getBreadCrumbs()} />

      <NotificationsView
        notifications={notifications}
        isFetching={isFetching}
        setPage={setPage}
      />
    </>
  )
}

export default Notifications
