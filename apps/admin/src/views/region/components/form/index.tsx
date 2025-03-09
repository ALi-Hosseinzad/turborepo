'use client'

import {
  CURRENCY_URL,
  CustomFormikSelect,
  FormikRadio,
  FormikTextField,
  FormikUploader,
  FormLayout,
  UploadIcon,
  useRegionFormViewModel,
  useTranslations,
} from '../../imports'

export const RegionForm = (props: any): JSX.Element => {
  const t = useTranslations()
  const { validationSchema } = useRegionFormViewModel()
  const { isLoading, initialValues, titleHeader1, titleHeader2, onSubmit } =
    props

  return (
    <FormLayout
      initialValues={initialValues}
      titleHeader1={titleHeader1}
      titleHeader2={titleHeader2}
      isLoading={isLoading}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="grid grid-cols-3 gap-6 w-full">
        <FormikTextField
          name="name"
          title={t('firstName')}
          placeholder={t('enterYourName')}
        />
        <FormikTextField
          name="slug"
          title={t('slug')}
          placeholder={t('slug')}
        />
        <FormikTextField
          name="symbol"
          title={t('symbol')}
          placeholder={t('symbol')}
        />
        <FormikUploader
          attachIcon={<UploadIcon />}
          name="flag_image"
          isPositionCenter
          title={t('flag')}
          limitationFileSizeText="25"
          typeUploader="typeInputUploader"
          errorCallback={() => {
            // TODO
          }}
        />
        <CustomFormikSelect
          name="currencyId"
          label={t('chooseCurrency')}
          placeholder={t('chooseCurrency')}
          queryKey="currency-list"
          url={CURRENCY_URL}
          optionLabel="name"
          optionValue="id"
        />
        <FormikRadio
          name="status"
          label={t('status')}
          options={[
            { label: t('active'), value: 'active' },
            { label: t('disable'), value: 'disable' },
          ]}
        />
      </div>
    </FormLayout>
  )
}
