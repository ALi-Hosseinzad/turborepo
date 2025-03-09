import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import NotificationEdit from 'views/notification/notificationEdit'
import type { PagePropsType } from 'types/common'

const NotificationEditPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <NotificationEdit />
}

export default NotificationEditPage
