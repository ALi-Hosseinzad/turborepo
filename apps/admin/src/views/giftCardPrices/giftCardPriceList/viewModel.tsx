'use client'

import UseTomanToRial from 'hooks/useTomanToRial'
import { useListViewModel } from 'components/list/viewModel'
import {
  GIFT_CARD_PRODUCT_BUY_PRICE_URL,
  type UseListViewModelType,
  useTranslations,
} from '../imports'

export const useGiftCardPriceViewModel = (): UseListViewModelType => {
  const t = useTranslations()

  const headInfo = [
    t('id'),
    t('chooseProduct'),
    t('buyPrice'),
    `${t('currencyPrice')} (${t('rial')} ) `,
    t('status'),
  ]

  const {
    data,
    page,
    isLoading,
    pageCount,
    isFetching,
    refetchList,
    onChangePage,
    onErrorDelete,
    afterDeleteHandler,
  } = useListViewModel({
    queryKey: 'GIFT_CARD_PRODUCT_BUY_PRICE_URL',
    url: GIFT_CARD_PRODUCT_BUY_PRICE_URL,
  })

  const handleBodyInfo = (giftCardPrice: any): any[] => {
    return giftCardPrice?.data?.map((giftCardPrices: any) => {
      const {
        id,
        gift_card_product_name: giftCardProductName,
        price,
        currency,
        status_label: status,
      } = giftCardPrices
      return {
        id,
        giftCardProductName,
        price: ` ${price} ${currency?.name}`,
        currency: UseTomanToRial(currency?.exchange_money_active),
        status,
      }
    })
  }

  return {
    page,
    headInfo,
    pageCount,
    isLoading,
    isFetching,
    refetchList,
    onChangePage,
    onErrorDelete,
    afterDeleteHandler,
    bodyInfo: handleBodyInfo(data),
  }
}
