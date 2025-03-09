import React from 'react'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import RoleCreate from 'views/roles/roleCreate'
import type { PagePropsType } from 'types/common'

const AddNewRolePage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <RoleCreate />
}

export default AddNewRolePage
