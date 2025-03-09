import { type UseListViewModelType, useTranslations } from '../imports'

export const useNotificationListViewModel = (): UseListViewModelType => {
  const t = useTranslations()

  const bodyInfo = (curData: any): any[] => {
    return curData?.map(
      ({
        id,
        title,
        notificationable_type: type,
        created_at: date,
        detail,
      }) => {
        const sendingWay = Object.entries(detail)
          .map(([key, value]): any => {
            return value ? t(key) : null
          })
          .filter((item) => item !== null)
          .join(', ')

        return { id, title, type, sendingWay, date }
      },
    )
  }

  const headInfo = [t('id'), t('title'), t('type'), t('sendingWay'), t('date')]

  return {
    headInfo,
    bodyInfo,
  }
}
