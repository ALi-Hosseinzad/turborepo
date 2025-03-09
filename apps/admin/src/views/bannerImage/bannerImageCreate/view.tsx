'use client'

import { BannerImageForm, useTranslations } from '../imports'

const BannerImageCreateView = ({
  initialValues,
  onSubmit,
  isLoading,
}: any): JSX.Element => {
  const t = useTranslations()

  return (
    <BannerImageForm
      isLoading={isLoading}
      titleHeader1={t('addContentBanner')}
      titleHeader2={t('contentBanner')}
      initialValues={initialValues}
      onSubmit={onSubmit}
    />
  )
}

export default BannerImageCreateView
