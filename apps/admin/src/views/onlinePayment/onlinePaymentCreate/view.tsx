'use client'

import type { OnlinePaymentCreateViewType } from '../imports'
import { OnlinePaymentForm, useTranslations } from '../imports'

const OnlinePaymentCreateView = ({
  initialValues,
  onSubmit,
  isLoading,
}: OnlinePaymentCreateViewType): JSX.Element => {
  const t = useTranslations()

  return (
    <OnlinePaymentForm
      isLoading={isLoading}
      titleHeader1={t('addOnlinePayment')}
      titleHeader2={t('addOnlinePayment')}
      initialValues={initialValues}
      onSubmit={onSubmit}
    />
  )
}

export default OnlinePaymentCreateView
