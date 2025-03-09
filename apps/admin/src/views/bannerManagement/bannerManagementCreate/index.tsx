'use client'

import {
  BannerManagementForm,
  useBannerManagementCreateViewModel,
  useTranslations,
} from '../imports'

const BannerManagementCreate = (): JSX.Element => {
  const t = useTranslations()

  const { initialValues, isLoadingSubmit, onSubmit } =
    useBannerManagementCreateViewModel()

  return (
    <BannerManagementForm
      initialValues={initialValues}
      isLoading={isLoadingSubmit}
      titleHeader1={t('createBannerManagement')}
      titleHeader2={t('createBannerManagement')}
      onSubmit={onSubmit}
    />
  )
}

export default BannerManagementCreate
