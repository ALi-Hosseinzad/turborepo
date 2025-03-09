import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import Permissions from 'views/permissions'
import type { PagePropsType } from 'types/common'

const PermissionsPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <Permissions />
}

export default PermissionsPage
