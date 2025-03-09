import {
  FormikAutoComplete,
  FormikRadio,
  FormikSelect,
  FormikTextField,
  useTranslations,
} from '../../imports'

export const ProductFormView = ({
  dataProductsOption,
  isLoadingProduct,
  dataRegionOption,
  isLoadingRegion,
  status,
}): JSX.Element => {
  const t = useTranslations()

  return (
    <div className="grid grid-cols-2 w-full gap-8">
      <FormikAutoComplete
        listOption={dataProductsOption}
        optionTitle="title"
        name="package"
        placeholder={t('chooseOrtype')}
        autoCompleteLabel={t('packageName')}
        isLoading={isLoadingProduct}
      />
      <FormikAutoComplete
        listOption={dataRegionOption}
        optionTitle="name"
        name="region"
        placeholder={t('chooseOrtype')}
        autoCompleteLabel={t('region')}
        isLoading={isLoadingRegion}
      />
      <FormikSelect
        listOptions={status}
        optionLabel="label"
        optionValue="value"
        name="status"
        placeholder={t('choose')}
        selectLabel={t('status')}
        isLoading={false}
      />
      <FormikTextField name="price" title={t('value')} />
      <FormikTextField name="discount" title={t('discountAmount')} />
      <FormikRadio
        name="discountType"
        label={t('discountType')}
        defaultValue="null"
        options={[
          { label: t('percent'), value: 'percent' },
          { label: t('decimal'), value: 'amount' },
        ]}
      />
      <FormikTextField name="quantity" title={t('amount')} />
      <FormikTextField name="slug" title="slug" />
      <FormikTextField name="sku" title="sku" />
    </div>
  )
}
