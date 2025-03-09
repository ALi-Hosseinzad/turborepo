import React from 'react'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import Currency from 'views/currency'
import type { PagePropsType } from 'types/common'

const currencyPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <Currency />
}

export default currencyPage
