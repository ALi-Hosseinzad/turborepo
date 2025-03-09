import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import UserGroup from 'views/userGroup'
import type { PagePropsType } from 'types/common'

const UserGroupPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <UserGroup />
}

export default UserGroupPage
