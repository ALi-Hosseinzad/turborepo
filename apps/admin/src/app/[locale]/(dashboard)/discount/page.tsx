import React from 'react'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import Discount from 'views/discount'
import type { PagePropsType } from 'types/common'

const DiscountPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <Discount />
}

export default DiscountPage
