import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useAxiosQuery } from '@/hooks/useAxiosQuery'
import { NOTIFICATION_URL } from '@/constants/endPoints'
import NotificationListSkeleton from '@/components/skeletons/notificationListSkeleton'
import { BellIcon } from 'ui/components/icons'
import { TablePagination } from 'ui/components/table/tablePagination'
import NoNotification from './components/noNotification'
import NotificationsList from './components/notificationsList'
import NotificationsView from './view'
import { useNotificationViewModel } from './viewModel'

export {
  useState,
  BellIcon,
  useTranslations,
  useAxiosQuery,
  NOTIFICATION_URL,
  NotificationListSkeleton,
  TablePagination,
  NotificationsList,
  NotificationsView,
  useNotificationViewModel,
  NoNotification,
}
