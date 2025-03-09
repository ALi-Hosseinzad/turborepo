'use client'

import { BannerImageForm, useTranslations } from '../imports'

const BannerImageEditView = ({
  initialValues,
  onSubmit,
  isLoading,
}: any): JSX.Element => {
  const t = useTranslations()

  return (
    <BannerImageForm
      isLoading={isLoading}
      titleHeader1={t('editBannerImage')}
      titleHeader2={t('editQue')}
      initialValues={initialValues}
      onSubmit={onSubmit}
    />
  )
}

export default BannerImageEditView
