import React from 'react'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import RoleEdit from 'views/roles/roleEdit'
import type { PagePropsType } from 'types/common'

const RoleEditPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <RoleEdit />
}

export default RoleEditPage
