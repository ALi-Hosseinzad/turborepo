'use client'

import { FormikRadio } from 'ui'
import {
  BANNER_URL,
  CustomFormikSelect,
  FormikSelect,
  FormikTextField,
  FormikUploader,
  FormLayout,
  GIFT_CARD_PACKAGE_URL,
  Loading,
  SERVICE_URL,
  UploadIcon,
  useConstants,
  useTranslations,
} from '../../imports'

const BannerImageFormView = ({
  isLoading,
  validationSchema,
  initialValues,
  onSubmit,
  titleHeader1,
  titleHeader2,
  onChageRelationType,
}: any): JSX.Element => {
  const t = useTranslations()
  const { fileTypes, relationTypes } = useConstants()

  return (
    <>
      <Loading isLoading={isLoading} />
      <FormLayout
        initialValues={initialValues}
        validationSchema={validationSchema}
        titleHeader1={titleHeader1}
        titleHeader2={titleHeader2}
        onSubmit={onSubmit}
      >
        {(formikProps: any) => {
          return (
            <div className="grid grid-cols-3 gap-5 w-full">
              <div className="flex flex-col gap-5">
                <CustomFormikSelect
                  name="banner_id"
                  label={t('choseBanner')}
                  placeholder={t('chooseBanner')}
                  queryKey="banners"
                  url={BANNER_URL}
                  optionLabel="slug"
                  optionValue="id"
                />
                <FormikTextField
                  name="time"
                  placeholder={t('example5Sec')}
                  title={t('time')}
                />
                <FormikRadio
                  name="relation_type"
                  options={relationTypes}
                  label={t('choseRelationType')}
                  onChange={(value) => {
                    onChageRelationType(value, formikProps)
                  }}
                />
                <CustomFormikSelect
                  name="gift_card_package_id"
                  label={t('chosePackageGiftcard')}
                  placeholder={t('choosePackageGiftcard')}
                  queryKey="gift-card-packages"
                  url={GIFT_CARD_PACKAGE_URL}
                  optionLabel="title"
                  optionValue="id"
                  className={
                    formikProps.values.relation_type !== 'entity'
                      ? 'hidden'
                      : 'block'
                  }
                />
              </div>
              <div className="flex flex-col gap-5">
                <FormikTextField
                  name="priority"
                  placeholder={t('priority')}
                  title={t('priority')}
                />
                <FormikSelect
                  name="file_type"
                  placeholder={t('chooseFileType')}
                  listOptions={fileTypes}
                  selectLabel={t('choseFileType')}
                />
                <CustomFormikSelect
                  name="service_id"
                  label={t('choseOnlinePayment')}
                  placeholder={t('chooseOnlinePayment')}
                  queryKey="services"
                  url={SERVICE_URL}
                  optionLabel="title"
                  optionValue="id"
                  className={
                    formikProps.values.relation_type !== 'entity'
                      ? 'hidden'
                      : 'block'
                  }
                />
                {formikProps.values.relation_type !== 'link' || (
                  <FormikTextField
                    name="href"
                    placeholder="href"
                    title="href"
                  />
                )}
              </div>
              <div className="flex flex-col gap-5">
                <FormikUploader
                  attachIcon={<UploadIcon />}
                  name="file"
                  isPositionCenter
                  title={t('uploadImg')}
                  limitationFileSizeText="25"
                />
              </div>
            </div>
          )
        }}
      </FormLayout>
    </>
  )
}

export default BannerImageFormView
