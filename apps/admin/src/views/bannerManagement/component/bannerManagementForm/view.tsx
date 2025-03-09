'use client'

import {
  CustomFormikSelect,
  FormikSelect,
  FormikTextField,
  FormLayout,
  Loading,
  PAGE_URL_URL,
  useBannerManagementFormViewModel,
  useTranslations,
} from '../../imports'

const BannerManagementFormView = ({
  isLoading,
  validationSchema,
  initialValues,
  onSubmit,
  titleHeader1,
  titleHeader2,
}: any): JSX.Element => {
  const t = useTranslations()
  const { bannerPlatformType, bannerStatusformTypes, bannerTypeformTypes } =
    useBannerManagementFormViewModel()

  return (
    <FormLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      titleHeader1={titleHeader1}
      titleHeader2={titleHeader2}
      onSubmit={onSubmit}
    >
      <Loading isLoading={isLoading} />
      <div className="grid grid-cols-2 gap-11 w-full">
        <FormikSelect
          optionLabel="label"
          optionValue="value"
          name="platformType"
          placeholder={t('choose')}
          listOptions={bannerPlatformType}
          selectLabel={t('platformType')}
          isLoading={false}
        />
        <FormikSelect
          optionLabel="label"
          optionValue="value"
          name="status"
          placeholder={t('choose')}
          listOptions={bannerStatusformTypes}
          selectLabel={t('status')}
          isLoading={false}
        />
        <FormikSelect
          optionLabel="label"
          optionValue="value"
          name="bannerType"
          placeholder={t('choose')}
          listOptions={bannerTypeformTypes}
          selectLabel={t('typeBanner')}
          isLoading={false}
        />

        <CustomFormikSelect
          label={t('giftCardProduct')}
          name="pageUrlId"
          placeholder={t('giftCardProduct')}
          queryKey="PAGE_URL_URL"
          url={PAGE_URL_URL}
          optionLabel="name"
          optionValue="id"
        />

        <FormikTextField
          name="slug"
          title={t('slug')}
          placeholder={t('slug')}
          className="w-full"
        />
      </div>
    </FormLayout>
  )
}

export default BannerManagementFormView
