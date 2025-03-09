import React from 'react'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import { TokenManagementEdit } from 'views/tokenManagement/tokenManagementEdit'
import type { PagePropsType } from 'types/common'

const EditTokenPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <TokenManagementEdit />
}

export default EditTokenPage
