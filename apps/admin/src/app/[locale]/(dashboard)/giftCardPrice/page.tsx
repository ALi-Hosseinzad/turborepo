import React from 'react'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import GiftCardPrices from 'views/giftCardPrices'
import type { PagePropsType } from 'types/common'

const GiftCardPricesPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <GiftCardPrices />
}

export default GiftCardPricesPage
