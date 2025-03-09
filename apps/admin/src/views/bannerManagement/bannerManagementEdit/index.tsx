'use client'

import {
  BannerManagementForm,
  BannerManagementHistory,
  useBannerManagementEditViewModel,
  useTranslations,
} from '../imports'

const BannerManagementEdit = (): JSX.Element => {
  const t = useTranslations()
  const { initialValues, isLoadingSubmit, onSubmit, isLoadingEditData } =
    useBannerManagementEditViewModel()

  return (
    <>
      <BannerManagementForm
        isLoading={isLoadingSubmit || isLoadingEditData}
        titleHeader1={t('editBannerManagement')}
        titleHeader2={t('editBannerManagement')}
        initialValues={initialValues}
        onSubmit={onSubmit}
      />

      <BannerManagementHistory />
    </>
  )
}

export default BannerManagementEdit
