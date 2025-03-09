import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import type { PagePropsType } from '@/types/nextIntl'
import { ProfileUser } from '@/views/profile'

const ProfileUserPage: React.FC<PagePropsType> = ({ params: { locale } }) => {
  unstable(locale)

  return <ProfileUser />
}

export default ProfileUserPage
