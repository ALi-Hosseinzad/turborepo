import { ME_REQUEST_INTERVAL_REFETCH_TIME } from '@/constants/constants'
import { ME_URL, NOTIFICATION_URL } from '@/constants/endPoints'
import { useAxiosQuery } from './useAxiosQuery'

export const useGetMeAndNotifData = () => {
  const {
    data: meData,
    isFetching: isFetchingMe,
    refetch: refetchMeRequestMe,
  } = useAxiosQuery({
    url: ME_URL,
    queryKey: ['me'],
    refetchInterval: ME_REQUEST_INTERVAL_REFETCH_TIME,
  })

  const {
    data: notificationData,
    refetch: refetchNotif,
    isFetching: isFetchingNotif,
    refetch: refetchRequestNotif,
  } = useAxiosQuery({
    url: `${NOTIFICATION_URL}?status=unread&page=1&perPage=3`,
    queryKey: ['notifications'],
    enabled: Boolean(meData?.notification_is_unread),
  })

  return {
    notificationData,
    refetchRequestNotif,
    meData,
    refetchMeRequestMe,
    isFetchingMe,
    isFetchingNotif,
    refetchNotif,
  }
}
