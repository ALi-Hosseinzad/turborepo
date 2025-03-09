'use client'

import { PageUrlForm, useTranslations } from '../imports'

const PageUrlEditView = ({
  initialValues,
  onSubmit,
  isLoading,
}: any): JSX.Element => {
  const t = useTranslations()

  return (
    <PageUrlForm
      isLoading={isLoading}
      initialValues={initialValues}
      titleHeader1={t('editPageUrl')}
      onSubmit={onSubmit}
    />
  )
}

export default PageUrlEditView
