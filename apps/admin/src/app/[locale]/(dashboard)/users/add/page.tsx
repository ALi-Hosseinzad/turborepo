import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import UserCreate from 'views/users/userCreate'
import type { PagePropsType } from 'types/common'

const AddNewUserPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <UserCreate />
}

export default AddNewUserPage
