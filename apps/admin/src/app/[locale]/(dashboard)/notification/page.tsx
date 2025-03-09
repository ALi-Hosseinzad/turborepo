import React from 'react'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import Notification from 'views/notification'
import type { PagePropsType } from 'types/common'

const NotificationPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <Notification />
}

export default NotificationPage
