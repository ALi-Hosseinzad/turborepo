import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import NotificationCreate from 'views/notification/notificationCreate'
import type { PagePropsType } from 'types/common'

const NotificationCreatePage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <NotificationCreate />
}

export default NotificationCreatePage
