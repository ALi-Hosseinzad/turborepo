'use client'

// import type { NotificationCreateViewType } from '../imports'
import { NotificationForm, useTranslations } from '../imports'

const NotificationCreateView = ({
  initialValues,
  onSubmit,
  isLoading,
}: any): JSX.Element => {
  const t = useTranslations()

  return (
    <NotificationForm
      isLoading={isLoading}
      titleHeader1={t('addNotification')}
      titleHeader2={t('addNotification')}
      initialValues={initialValues}
      onSubmit={onSubmit}
    />
  )
}

export default NotificationCreateView
