'use client'

import { DiscountFormView, useTranslations } from '../../imports'

export const DiscountForm = ({
  initialValues,
  onSubmit,
  isLoading,
  titleHeader1,
}): JSX.Element => {
  const t = useTranslations()

  return (
    <DiscountFormView
      isLoading={isLoading}
      initialValues={initialValues}
      titleHeader1={titleHeader1 ? titleHeader1 : t('addCurrency')}
      titleHeader2={t('currencyInformation')}
      onSubmit={onSubmit}
    />
  )
}
