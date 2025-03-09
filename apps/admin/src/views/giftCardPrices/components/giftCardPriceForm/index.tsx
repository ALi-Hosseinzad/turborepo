import {
  CURRENCY_URL,
  CustomFormikAutoComplete,
  FormikSelect,
  FormikTextField,
  FormLayout,
  GET_NAME_GIFT_CARD_PRODUCT_URL,
  useGiftCardPriceCreateViewModel,
  useTranslations,
} from '../../imports'

export const GiftCardPriceCreateForm = (props): JSX.Element => {
  const { statusList, validationSchema } = useGiftCardPriceCreateViewModel()
  const t = useTranslations()
  const { initialValues, onSubmit, titleHeader1, titleHeader2 } = props

  return (
    <FormLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      titleHeader1={titleHeader1}
      titleHeader2={titleHeader2}
      onSubmit={onSubmit}
    >
      <div className="grid grid-cols-2 w-full gap-4">
        <CustomFormikAutoComplete
          name="giftCardProductId"
          url={GET_NAME_GIFT_CARD_PRODUCT_URL}
          queryKey="gift-card-product-list"
          label={t('product')}
          optionTitle="name"
        />
        <CustomFormikAutoComplete
          name="currencyId"
          url={CURRENCY_URL}
          queryKey="currency"
          label={t('currency')}
          optionTitle="name"
        />
        <FormikTextField
          name="price"
          title={t('buyPrice')}
          placeholder={t('enterPrice')}
        />
        <FormikSelect
          name="status"
          selectLabel={t('chooseStatus')}
          optionValue="value"
          optionLabel="label"
          listOptions={statusList}
          placeholder={t('chooseStatus')}
        />
      </div>
    </FormLayout>
  )
}
