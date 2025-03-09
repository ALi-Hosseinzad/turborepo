'use client'

import {
  FormikSelect,
  FormikTextField,
  FormLayout,
  Loading,
  usePageUrlFormViewModel,
  useTranslations,
} from '../../imports'

const PageUrlFormView = (props: any): JSX.Element => {
  const t = useTranslations()
  const { isLoading, initialValues, onSubmit, titleHeader1, titleHeader2 } =
    props
  const { validationSchema, PageUrlPlatformTypesAmountType } =
    usePageUrlFormViewModel()

  return (
    <>
      <Loading isLoading={Boolean(isLoading)} />
      <FormLayout
        initialValues={initialValues}
        validationSchema={validationSchema}
        titleHeader1={titleHeader1}
        titleHeader2={titleHeader2}
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-2 gap-11 w-full">
          <FormikTextField
            name="name"
            title={t('name')}
            placeholder={t('name')}
            className="w-full"
          />

          <FormikSelect
            name="type"
            placeholder={t('type')}
            selectLabel={t('name')}
            optionValue="value"
            optionLabel="label"
            isLoading={false}
            listOptions={PageUrlPlatformTypesAmountType}
          />

          <FormikTextField
            name="href"
            title={t('href')}
            placeholder={t('href')}
            className="w-full"
          />

          <FormikTextField
            name="slug"
            title={t('slug')}
            placeholder={t('slug')}
            className="w-full"
          />

          <FormikTextField
            name="description"
            title={t('description')}
            placeholder={t('description')}
            className="w-full"
          />
        </div>
      </FormLayout>
    </>
  )
}

export default PageUrlFormView
