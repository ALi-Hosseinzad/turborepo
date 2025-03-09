import type * as yup from 'yup'

export interface GiftCardPriceCreateType {
  statusList: any[]
  initialValues?: object
  validationSchema?: yup.ObjectSchema<{
    giftCardProductId: object
    currencyId: object
    price: string
    status: object
  }>
  handlePostGiftCardPrice: any
}
