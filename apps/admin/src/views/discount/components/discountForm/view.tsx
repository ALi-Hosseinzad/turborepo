'use client'

import {
  CustomFormikSelect,
  FormikRadio,
  FormikSelect,
  FormikTextField,
  FormLayout,
  GIFT_CARD_PACKAGE_URL,
  GIFT_CARD_PRODUCT_URL,
  GROUP_URL,
  Loading,
  SERVICE_URL,
  useDiscountFormViewModel,
  useEffect,
  useParams,
  useState,
  useTranslations,
} from '../../imports'

const DiscountFormView = (props: any): JSX.Element => {
  const t = useTranslations()
  const { id } = useParams()

  const { isLoading, initialValues, onSubmit, titleHeader1, titleHeader2 } =
    props

  const {
    validationSchema,
    DiscountTypesAmountType,
    DiscountTypesType,
    DiscountTypesWhatFor,
    DiscountTypeStatus,
    DiscountTypeSendNotify,
  } = useDiscountFormViewModel()

  const [type, setType] = useState({ value: '', label: '' })
  const [whatFor, setWhatFor] = useState({ value: '', label: '' })

  useEffect(() => {
    const whatInitial = { value: '', label: '' }
    whatInitial.value = initialValues?.whatFor?.value
    whatInitial.label = initialValues?.whatFor?.label
    setWhatFor(whatInitial)
  }, [initialValues?.whatFor])

  const renderCustomFormikSelect = (): JSX.Element | null => {
    if (!id && type.value === 'specific') {
      return (
        <CustomFormikSelect
          label={t('userIds')}
          name="userIds"
          placeholder={t('userIds')}
          queryKey="GROUP-id"
          url={GROUP_URL}
          optionLabel="name"
          optionValue="id"
        />
      )
    }
    return null
  }

  const renderSelectUserIds = (): JSX.Element | null => {
    if (whatFor?.value === 'service') {
      return (
        <CustomFormikSelect
          label={t('service')}
          name="serviceIds"
          placeholder={t('service')}
          queryKey="services-id"
          url={SERVICE_URL}
          optionLabel="title"
          optionValue="id"
          multiple
        />
      )
    } else if (whatFor?.value === 'gift_card_package') {
      return (
        <CustomFormikSelect
          label={t('giftCardPackage')}
          name="giftCardPackageIds"
          placeholder={t('giftCardPackage')}
          queryKey="gift_card_package-id"
          url={GIFT_CARD_PACKAGE_URL}
          optionLabel="title"
          optionValue="id"
          multiple
        />
      )
    } else if (whatFor?.value === 'gift_card_product') {
      return (
        <CustomFormikSelect
          label={t('giftCardProduct')}
          name="giftCardProductIds"
          placeholder={t('giftCardProduct')}
          queryKey="gift_card_product-id"
          url={GIFT_CARD_PRODUCT_URL}
          optionLabel="product.name"
          optionValue="id"
          multiple
        />
      )
    }
    return null
  }
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
        {(formikProps) => {
          return (
            <div className="grid grid-cols-2 gap-11 w-full">
              <FormikTextField
                name="code"
                title={t('code')}
                placeholder={t('codeWrite')}
                className="w-full"
              />

              <FormikTextField
                name="expireDay"
                title={t('validityPeriod')}
                placeholder="5"
                className="w-full"
              />

              <FormikTextField
                name="min"
                title={t('min')}
                placeholder={t('min')}
                className="w-full"
                onChange={() => {
                  formikProps.setFieldValue('max', '')
                }}
              />
              <FormikTextField
                name="max"
                title={t('max')}
                placeholder={t('max')}
                className="w-full"
              />

              <FormikTextField
                name="amount"
                title={t('discountAmount')}
                placeholder={t('discountAmount')}
                className="w-full"
              />

              <FormikRadio
                name="amountType"
                label={t('discountType')}
                options={DiscountTypesAmountType}
              />

              {!id ? (
                <FormikTextField
                  name="userUsed"
                  title={t('userUsed')}
                  placeholder={t('userUsed')}
                  className="w-full"
                />
              ) : null}
              <FormikSelect
                name="status"
                optionValue="value"
                optionLabel="label"
                selectLabel={t('status')}
                placeholder={t('choose')}
                listOptions={DiscountTypeStatus}
              />
              <FormikSelect
                name="type"
                optionValue="value"
                optionLabel="label"
                selectLabel={t('type')}
                placeholder={t('choose')}
                listOptions={DiscountTypesType}
                onChangeHandler={(dataType) => {
                  setType(dataType)
                }}
              />
              {renderCustomFormikSelect()}
              <FormikSelect
                name="whatFor"
                optionValue="value"
                optionLabel="label"
                selectLabel={t('ServiceSelection')}
                placeholder={t('choose')}
                listOptions={DiscountTypesWhatFor}
                onChangeHandler={(dataWhatFor) => {
                  setWhatFor(dataWhatFor)
                }}
              />
              {renderSelectUserIds()}

              {!id ? (
                <FormikSelect
                  name="sendNotify"
                  optionValue="value"
                  optionLabel="label"
                  selectLabel={t('sendNotify')}
                  placeholder={t('choose')}
                  listOptions={DiscountTypeSendNotify}
                />
              ) : null}
            </div>
          )
        }}
      </FormLayout>
    </>
  )
}

export default DiscountFormView
