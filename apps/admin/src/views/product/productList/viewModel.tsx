import type { ProductBodyInTableType, UseListViewModelType } from '../imports'
import { useTranslations } from '../imports'

import Button from '@mui/material/Button'

export const useProductListViewModel = (): UseListViewModelType => {
  const t = useTranslations()

  const headInfo = [
    t('id'),
    t('packageName'),
    t('region'),
    t('status'),
    t('count'),
    t('discountAmount'),
    t('price'),
  ]

  const handleBodyInfo = (body: ProductBodyInTableType[]): any[] => {
    if (body?.length) {
      return body.map(
        ({
          id,
          product,
          region,
          status_label: statusLabel,
          quantity,
          price,
          amount,
          discount_type: discountType,
        }) => {
          return {
            id,
            product: product?.name,
            region: region?.name,
            statusLabel,
            quantity,
            amount: discountType != 'amount' ? `${amount}%` : amount,
            price: `${price} ${region?.currency}`,
          }
        },
      )
    }

    return []
  }

  return {
    bodyInfo: handleBodyInfo,
    headInfo,
  }
}
