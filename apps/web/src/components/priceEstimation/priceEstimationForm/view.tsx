import {
  FormikAutoComplete,
  FormikSelect,
  OstiganButton,
  t,
  usePriceEstimationFormViewMOdel,
  usePriceEstimationViewMOdel,
} from '../imports'

export const PriceEstimationForm = (): JSX.Element => {
  const { isLoading, data } = usePriceEstimationViewMOdel()
  const {
    isLoadingRegion,
    dataRegion,
    disabled,
    priceList,
    isLoadingPrice,
    currency,
  } = usePriceEstimationFormViewMOdel()

  return (
    <div className="flex flex-col gap-6 rounded-lg shadow-lg px-8 py-6">
      <div className="grid grid-cols-3 gap-8">
        <FormikAutoComplete
          listOption={data}
          optionTitle="title"
          name="productType"
          placeholder={t('choose')}
          autoCompleteLabel={t('chooseGiftCard')}
          isLoading={isLoading}
        />
        <FormikSelect
          disabled={disabled}
          listOptions={dataRegion?.regions}
          name="region"
          optionLabel="name"
          optionValue="name"
          placeholder={t('choose')}
          selectLabel={t('region')}
          isLoading={isLoadingRegion}
        />
        <FormikSelect
          disabled={disabled}
          listOptions={priceList}
          name="price"
          optionLabel="price"
          optionValue="price"
          placeholder={t('choose')}
          selectLabel={t('dollarCredit')}
          isLoading={isLoadingPrice}
          addintionalData={`- ${currency}`}
        />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <span>{t('finalCostBeforePayment')}:</span>
        </div>
        <OstiganButton type="submit" variant="contained">
          {t('submitOrder')}
        </OstiganButton>
      </div>
    </div>
  )
}
