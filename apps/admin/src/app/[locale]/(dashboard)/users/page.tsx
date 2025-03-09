import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import Users from 'views/users'
import type { PagePropsType } from 'types/common'

const UsersPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <Users />
}

export default UsersPage
