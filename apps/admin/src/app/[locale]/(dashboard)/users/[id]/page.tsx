import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import UserDetails from 'views/userDetails'
import type { PagePropsType } from 'types/common'

const EditUserPagePage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <UserDetails />
}

export default EditUserPagePage
