import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import { UserGroupCreate } from 'views/userGroup/userGroupCreate'
import type { PagePropsType } from 'types/common'

const UserGroupEditPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <UserGroupCreate />
}

export default UserGroupEditPage
