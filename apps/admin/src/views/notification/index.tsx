'use client'

import {
  ADD,
  List,
  NOTIFICATION_URL,
  useNotificationListViewModel,
  useTranslations,
} from './imports'

const Notifications = (): JSX.Element => {
  const { headInfo, bodyInfo } = useNotificationListViewModel()
  const t = useTranslations()

  return (
    <List
      bodyInfo={bodyInfo}
      headInfo={headInfo}
      url={NOTIFICATION_URL}
      queryKey="notification-list"
      tableUrlDeleteRequest="admin/notification"
      tableEditNavigationLink="notification"
      tableAddNavigationLink={`notification/${ADD}`}
      tableAddBtnText={t('addNotification')}
      tableLabel={t('notificationManagement')}
    />
  )
}

export default Notifications
