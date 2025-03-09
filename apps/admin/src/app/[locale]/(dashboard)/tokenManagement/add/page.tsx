import React from 'react'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import { TokenManagementCreate } from 'views/tokenManagement/tokenManagementCreate'
import type { PagePropsType } from 'types/common'

const AddNewTokenPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <TokenManagementCreate />
}

export default AddNewTokenPage
