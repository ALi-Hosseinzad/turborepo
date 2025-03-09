import {
  ArrowLeftIcon,
  DiscountFlagIcon,
  OstiganButton,
  ProductCard,
  useTomanToRial,
  useTranslations,
} from '../import'

export const RecommendedProductCard = (props) => {
  const {
    id,
    title,
    region,
    price,
    currency,
    amount,
    priceAfterDiscount,
    fullPrice,
  } = props.data
  const t = useTranslations()

  return (
    <ProductCard {...props} height="365px" className="!pt-[95px]">
      <div className="">
        <div className="flex flex-col gap-2 justify-between">
          <div className="flex flex-col gap-2 justify-between h-full">
            <div className="flex flex-col gap-1">
              <p className="title-lg w-max">{title}</p>
              <p className="text-normal-sm">
                {price} {currency} - {region}
              </p>
            </div>

            <div className="relative flex flex-col gap-0.5 text-left pl-[40%] pb-2">
              <DiscountFlagIcon className="absolute -right-7" />
              <p className="text-medium-sm absolute -right-3 top-0 text-white">
                % {amount}
              </p>
              <p className="title-sm text-darkTypo opacity-15 line-through">
                {useTomanToRial(fullPrice)} {t('rial')}
              </p>
              <p className="title-lg">
                {useTomanToRial(priceAfterDiscount)} {t('rial')}
              </p>
            </div>
          </div>
        </div>

        <OstiganButton
          variant="contained"
          type="button"
          fullWidth
          handleClick={() => props.haldleProductClick(id)}
        >
          <div className="flex justify-between items-center px-4">
            <p className="text-medium-lg text-customWhite">{t('buyCard')}</p>
            <ArrowLeftIcon className="w-6 h-6" />
          </div>
        </OstiganButton>
      </div>
    </ProductCard>
  )
}
