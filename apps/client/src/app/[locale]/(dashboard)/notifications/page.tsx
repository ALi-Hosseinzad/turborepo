import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import Notifications from '@/views/notifications'

const NotificationsPage = ({ params: { locale } }): React.ReactElement => {
  unstable(locale)
  return <Notifications />
}

export default NotificationsPage
