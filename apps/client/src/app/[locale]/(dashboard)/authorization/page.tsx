import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import type { PagePropsType } from '@/types/nextIntl'
import Authorization from '@/views/authorization'

const AuthorizationPage: React.FC<PagePropsType> = ({ params: { locale } }) => {
  unstable(locale)

  return <Authorization />
}

export default AuthorizationPage
