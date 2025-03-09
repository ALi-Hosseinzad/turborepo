import { useTranslations } from '../../imports'
import type { ManagementProductListViewModelType } from '../../imports'

export const useManagementProductListViewModel = (
  editData,
): ManagementProductListViewModelType => {
  const t = useTranslations()
  const headInfo = [t('id'), t('region'), t('status'), t('amount'), t('price')]

  const handleGiftCardProductData = (editData: any): any => {
    const productList: any[] = []
    if (editData?.regions) {
      for (const region of editData.regions) {
        if (region.gift_card_products) {
          for (const item of region.gift_card_products) {
            const { id, quantity, price } = item
            productList.push({
              id,
              region: region.name,
              status: region.status_label,
              quantity,
              price,
            })
          }
        }
      }
    }
    return productList
  }

  return { headInfo, giftCardProductData: handleGiftCardProductData(editData) }
}
