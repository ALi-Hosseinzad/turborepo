'use client'

import {
  type CurrencyCreateViewType,
  CurrencyForm,
  CurrencyHistory,
  useTranslations,
} from '../imports'

const CurrencyEditView = ({
  initialValues,
  onSubmit,
  isLoading,
}: CurrencyCreateViewType): JSX.Element => {
  const t = useTranslations()

  return (
    <>
      <CurrencyForm
        isLoading={isLoading}
        initialValues={initialValues}
        titleHeader1={t('editCurrency')}
        onSubmit={onSubmit}
      />
      <CurrencyHistory />
    </>
  )
}

export default CurrencyEditView
