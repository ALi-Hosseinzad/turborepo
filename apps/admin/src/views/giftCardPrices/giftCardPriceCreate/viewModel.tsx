import type { GiftCardPriceCreateType } from '../imports'
import {
  axiosPost,
  GIFT_CARD_PRODUCT_BUY_PRICE_URL,
  handleLocalStorage,
  useMutation,
} from '../imports'

export const useGiftCardPriceCreateViewModel = (): GiftCardPriceCreateType => {
  const enumsStorage = handleLocalStorage({
    key: 'enums',
    type: 'getLocalStorage',
  })
  let statusList = []
  if (typeof window !== 'undefined') {
    const parsedEnum = enumsStorage?.GiftCard
    statusList = parsedEnum?.gift_card_product_buy_price_status
  }

  const initialValues = {
    currencyId: '',
    price: '',
    status: '',
    giftCardProductId: '',
  }

  const { mutate: handlePostGiftCardPrice } = useMutation({
    mutationFn: (values: any) => {
      const body = {
        gift_card_product_id: values?.giftCardProductId?.id,
        currency_id: values?.currencyId?.id,
        price: values?.price,
        status: values?.status?.value,
      }
      return axiosPost({
        url: GIFT_CARD_PRODUCT_BUY_PRICE_URL,
        body,
      })
    },
  })

  return {
    initialValues,
    statusList,
    handlePostGiftCardPrice,
  }
}
