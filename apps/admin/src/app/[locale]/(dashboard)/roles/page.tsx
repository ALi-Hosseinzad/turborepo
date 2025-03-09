import React from 'react'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import Roles from 'views/roles'
import type { PagePropsType } from 'types/common'

const RolesPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <Roles />
}

export default RolesPage
