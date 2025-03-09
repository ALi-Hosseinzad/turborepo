import { useTranslations } from '../../imports'
import useUserGroupEditViewModel from '../../regionEdit/viewModel'

export const useViewModelRegionProducts = (): any => {
  const t = useTranslations()
  const { editData } = useUserGroupEditViewModel()

  const headInfoTableHead = [
    t('id'),
    t('currencyConversionPrice'),
    t('count'),
    t('price'),
  ]

  const regionEditHandler = (dataRegionEdit: {
    gift_card_products: any
  }): any => {
    return dataRegionEdit?.gift_card_products?.map((dataRegionId: any) => {
      const {
        id,
        exchange_price: exchangePrice,
        quantity,
        price,
      } = dataRegionId

      return {
        id,
        exchangePrice: exchangePrice[0],
        quantity,
        price,
      }
    })
  }

  return {
    ReginEditData: regionEditHandler(editData),
    headInfoTableHead,
  }
}
