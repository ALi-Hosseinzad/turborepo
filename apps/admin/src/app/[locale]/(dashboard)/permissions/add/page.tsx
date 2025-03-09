import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import { PermissionCreate } from 'views/permissions/permissionCreate'
import type { PagePropsType } from 'types/common'

const AddNewPermissionPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <PermissionCreate />
}

export default AddNewPermissionPage
