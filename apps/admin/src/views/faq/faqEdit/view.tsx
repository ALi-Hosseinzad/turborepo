'use client'

import { FaqForm, useTranslations } from '../imports'

const FaqEditView = ({
  initialValues,
  onSubmit,
  isLoading,
}: any): JSX.Element => {
  const t = useTranslations()

  return (
    <FaqForm
      isLoading={isLoading}
      titleHeader1={t('editFaq')}
      titleHeader2={t('editQue')}
      initialValues={initialValues}
      onSubmit={onSubmit}
    />
  )
}

export default FaqEditView
