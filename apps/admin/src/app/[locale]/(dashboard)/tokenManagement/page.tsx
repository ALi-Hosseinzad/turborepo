import React from 'react'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import TokenManagement from 'views/tokenManagement'
import type { PagePropsType } from 'types/common'

const TokenManagementPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <TokenManagement />
}

export default TokenManagementPage
