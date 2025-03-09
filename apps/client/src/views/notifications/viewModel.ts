import type { BreadcrumbType } from '@/types/checkout'
import { NOTIFICATION } from '@/constants/routes'
import {
  NOTIFICATION_URL,
  useAxiosQuery,
  useState,
  useTranslations,
} from './imports'

export const useNotificationViewModel = () => {
  const t = useTranslations()

  const [page, setPage] = useState(1)
  const { data: notifications, isFetching } = useAxiosQuery({
    url: `${NOTIFICATION_URL}?perPage=20&page=${page}`,
    queryKey: ['notification-list', page],
  })
  const getBreadCrumbs = (): BreadcrumbType[] => {
    return [
      {
        name: t('notification'),
        url: NOTIFICATION,
      },
    ]
  }
  return { notifications, setPage, page, isFetching, getBreadCrumbs }
}
