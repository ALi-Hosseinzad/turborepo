import {
  OstiganRadio,
  PreInvoice,
  ProductDetailHeaderBox,
  useTranslations,
} from '../imports'

export const GiftCardDetailsView = ({
  productHeaderInfo,
  regionsList,
  productsList,
  selectedProduct,
  handleRegionSelected,
  handleProductSelected,
}) => {
  const t = useTranslations()
  return (
    <div className="flex flex-col">
      <ProductDetailHeaderBox productHeaderInfo={productHeaderInfo} />
      <div className="lg:grid lg:grid-cols-12 flex flex-col gap-2 pt-12">
        <div className="flex lg:flex-col sm:flex-row flex-col lg:gap-12 gap-4 col-span-6 w-full">
          <div className="bg-white rounded-xl w-full md:px-4 px-3 py-6">
            <p className="title-lg md:title-lg pb-5">{t('chooseRegionCard')}</p>
            <OstiganRadio
              name="region"
              options={regionsList}
              showRadioIcon={false}
              flexDirection="grid grid-cols-3 md:grid-cols-4 gap-2"
              activeBackgroundColor="var(--primary-background)"
              onChange={(value) => {
                handleRegionSelected(JSON.parse(value).id)
              }}
            />
          </div>
          <div className="bg-white rounded-xl w-full md:px-4 px-3 py-6">
            <p className="title-base md:title-lg pb-5">{t('chooseGiftCard')}</p>
            <OstiganRadio
              name="product"
              options={productsList}
              showRadioIcon={false}
              flexDirection="grid grid-cols-3 md:grid-cols-4 gap-2"
              activeBackgroundColor="var(--primary-background)"
              onChange={(value) => handleProductSelected(value)}
            />
          </div>
        </div>
        <div className="col-span-1 text-white">.</div>
        <div className="col-span-5 bg-white rounded-xl px-6 py-6">
          <PreInvoice selectedProduct={selectedProduct} />
        </div>
      </div>
    </div>
  )
}
