'use client'

import { PageUrlFormView, useTranslations } from '../../imports'

export const PageUrlForm = ({
  initialValues,
  onSubmit,
  isLoading,
  titleHeader1,
}): JSX.Element => {
  const t = useTranslations()
  return (
    <PageUrlFormView
      isLoading={isLoading}
      initialValues={initialValues}
      titleHeader1={titleHeader1 ? titleHeader1 : t('addPageUrl')}
      titleHeader2={t('pageUrl')}
      onSubmit={onSubmit}
    />
  )
}
