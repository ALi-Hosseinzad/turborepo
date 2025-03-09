import React from 'react'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import { GiftCardPriceCreate } from 'views/giftCardPrices/giftCardPriceCreate'
import type { PagePropsType } from 'types/common'

const AddNewgiftCardPricePage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <GiftCardPriceCreate />
}
export default AddNewgiftCardPricePage
