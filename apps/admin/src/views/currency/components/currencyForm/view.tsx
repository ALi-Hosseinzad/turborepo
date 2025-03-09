'use client'

import {
  type CurrencyFormViewType,
  FormikRadio,
  FormikTextField,
  FormLayout,
  useSubjectFormViewModel,
  useTranslations,
} from '../../imports'

const CurrencyFormView = (props: CurrencyFormViewType): JSX.Element => {
  const t = useTranslations()
  const { isLoading, initialValues, onSubmit, titleHeader1, titleHeader2 } =
    props
  const { validationSchema } = useSubjectFormViewModel()

  return (
    <FormLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      titleHeader1={titleHeader1}
      titleHeader2={titleHeader2}
      isLoading={isLoading}
      onSubmit={onSubmit}
    >
      <div className="grid grid-cols-2 gap-11 w-full">
        <FormikTextField
          name="name"
          title={t('nameCurrency')}
          placeholder={`${t('example')}:${t('nameexample')}`}
          className="w-full"
        />
        <FormikTextField
          name="symbol"
          title={t('symbols')}
          placeholder={`${t('example')}:USD`}
          className="w-full"
        />
        <FormikRadio
          name="status"
          label={t('status')}
          labelClassName="mb-2"
          options={[
            { label: t('active'), value: 'active' },
            { label: t('disable'), value: 'disable' },
          ]}
        />
        <FormikTextField
          name="exchange_price"
          title={t('exchangeRateCurrency')}
          placeholder={`${t('example')}: 1,000,000 ${t('rial')}`}
          className="w-full"
        />
      </div>
    </FormLayout>
  )
}

export default CurrencyFormView
