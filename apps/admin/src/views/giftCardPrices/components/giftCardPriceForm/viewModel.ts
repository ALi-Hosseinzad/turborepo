import type { GiftCardPriceCreateType } from '../../imports'
import {
  axiosPost,
  GIFT_CARD_PRODUCT_BUY_PRICE_URL,
  handleLocalStorage,
  useMutation,
  useTranslations,
  yup,
} from '../../imports'

export const useGiftCardPriceFormViewModel = (): GiftCardPriceCreateType => {
  const t = useTranslations()
  const enumsStorage = handleLocalStorage({
    key: 'enums',
    type: 'getLocalStorage',
  })
  let statusList = []
  if (typeof window !== 'undefined') {
    const parsedEnum = enumsStorage?.GiftCard
    statusList = parsedEnum?.gift_card_product_buy_price_status
  }

  const validationSchema = yup.object({
    giftCardProductId: yup.object().required(t('emptyError')),
    currencyId: yup.object().required(t('emptyError')),
    price: yup.string().required(t('emptyError')),
    status: yup.object().required(t('emptyError')),
  })

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
    validationSchema,
    statusList,
    handlePostGiftCardPrice,
  }
}
