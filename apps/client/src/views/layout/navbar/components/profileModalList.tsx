'use client'

import {
  BellIcon,
  type SidebarItemType,
  UserAuthenticationIcon,
  UserEditAccountIcon,
  useTranslations,
} from '../import'

export const ProfileModalList = (): SidebarItemType[] => {
  const t = useTranslations()

  return [
    {
      title: t('authentication'),
      icon: <UserAuthenticationIcon className="w-6 h-6 ml-3" />,
      path: '/authorization',
      isDisabled: false,
    },
    {
      title: t('editUserAccount'),
      icon: <UserEditAccountIcon className="w-6 h-6 ml-3" />,
      path: '/profile',
      isDisabled: false,
    },
    {
      title: t('notification'),
      icon: <BellIcon color="#737373" className="w-6 h-6 ml-3" />,
      path: '/notifications',
      isDisabled: false,
    },
  ]
}
