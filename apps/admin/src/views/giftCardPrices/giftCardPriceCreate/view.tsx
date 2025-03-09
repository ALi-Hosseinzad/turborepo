import { GiftCardPriceCreateForm, useTranslations } from '../imports'

export const GiftCardPriceCreateView = ({
  initialValues,
  validationSchema,
  onSubmit,
}): JSX.Element => {
  const t = useTranslations()

  return (
    <GiftCardPriceCreateForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      titleHeader1={t('addNewPackage')}
      titleHeader2={t('packageInfo')}
      onSubmit={onSubmit}
    />
  )
}
