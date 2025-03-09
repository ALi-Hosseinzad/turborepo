import React from 'react'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import Faq from 'views/faq'
import type { PagePropsType } from 'types/common'

const FaqPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <Faq />
}

export default FaqPage
