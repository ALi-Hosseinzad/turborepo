'use client'

import {
  DashboardIcon,
  GiftCardIcon,
  OrdersIcon,
  PayOnlineIcon,
  type SidebarItemType,
  TicketIcon,
  UserInfoIcon,
  useTranslations,
  WalletIcon,
} from '../import'

export const SidebarList = (): SidebarItemType[] => {
  const t = useTranslations()

  return [
    {
      title: t('dashboard'),
      icon: <DashboardIcon className="w-6 h-6" />,
      path: '/dashboard',
      isDisabled: false,
    },
    {
      title: t('userInfo'),
      icon: <UserInfoIcon className="w-6 h-6" />,
      path: '/profile',
      isDisabled: false,
    },
    {
      title: t('giftCard'),
      icon: <GiftCardIcon className="w-6 h-6" />,
      path: '/giftCard',
      isDisabled: false,
    },
    {
      title: t('wallet'),
      icon: <WalletIcon color='white' className="w-6 h-6" />,
      path: '/wallet',
      isDisabled: false,
    },
    {
      title: t('onlinePayment'),
      icon: <PayOnlineIcon />,
      path: '/onlinePayment',
      isDisabled: false,
    },
    {
      title: t('orders'),
      icon: <OrdersIcon />,
      path: '/orders',
      isDisabled: false,
    },
    {
      title: t('tickets'),
      icon: <TicketIcon className="w-6 h-6" />,
      path: '/tickets',
      isDisabled: true,
    },
  ]
}
