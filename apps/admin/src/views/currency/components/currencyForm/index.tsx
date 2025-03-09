'use client'

import { CurrencyFormView, useTranslations } from '../../imports'

export const CurrencyForm = ({
  initialValues,
  onSubmit,
  isLoading,
  titleHeader1,
}): JSX.Element => {
  const t = useTranslations()

  return (
    <CurrencyFormView
      isLoading={isLoading}
      initialValues={initialValues}
      titleHeader1={titleHeader1 || t('addCurrency')}
      titleHeader2={t('currencyInformation')}
      onSubmit={onSubmit}
    />
  )
}
