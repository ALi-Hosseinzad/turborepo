import React from 'react'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import { PermissionEdit } from 'views/permissions/permissionEdit/index'
import type { PagePropsType } from 'types/common'

const EditPermissionsPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <PermissionEdit />
}

export default EditPermissionsPage
