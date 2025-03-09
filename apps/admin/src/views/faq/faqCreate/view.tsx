'use client'

import type { FaqCreateViewType } from '../imports'
import { FaqForm, useTranslations } from '../imports'

const FaqCreateView = ({
  initialValues,
  onSubmit,
  isLoading,
}: FaqCreateViewType): JSX.Element => {
  const t = useTranslations()

  return (
    <FaqForm
      isLoading={isLoading}
      titleHeader1={t('addFaq')}
      titleHeader2={t('addQue')}
      initialValues={initialValues}
      onSubmit={onSubmit}
    />
  )
}

export default FaqCreateView
