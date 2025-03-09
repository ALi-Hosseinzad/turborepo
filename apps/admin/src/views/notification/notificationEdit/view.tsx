'use client'

import { NotificationForm, useTranslations } from '../imports'

const NotificationEditView = ({
  initialValues,
  onSubmit,
  isLoading,
}: any): JSX.Element => {
  const t = useTranslations()

  return (
    <NotificationForm
      isLoading={isLoading}
      titleHeader1={t('editNotification')}
      titleHeader2={t('editNotification')}
      initialValues={initialValues}
      onSubmit={onSubmit}
    />
  )
}

export default NotificationEditView
