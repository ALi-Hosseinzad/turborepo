'use client'

import { OnlinePaymentForm, useTranslations } from '../imports'

const OnlinePaymentEditView = ({
  initialValues,
  onSubmit,
  isLoading,
}: any): JSX.Element => {
  const t = useTranslations()

  return (
    <OnlinePaymentForm
      isLoading={isLoading}
      initialValues={initialValues}
      titleHeader1={t('editOnlinePayment')}
      titleHeader2={t('editOnlinePayment')}
      onSubmit={onSubmit}
    />
  )
}

export default OnlinePaymentEditView
