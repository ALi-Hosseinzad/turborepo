import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import { UserGroupEdit } from 'views/userGroup/userGroupEdit'
import type { PagePropsType } from 'types/common'

const UserGroupEditPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <UserGroupEdit />
}

export default UserGroupEditPage
