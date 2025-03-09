import {
  handleDate,
  type UseListViewModelType,
  useTranslations,
} from '../imports'

export const useUserGroupListViewModel = (): UseListViewModelType => {
  const t = useTranslations()

  const bodyInfo = (curData: any): any[] => {
    return curData?.map(({ id, name, slug, created_at: createdAt }) => {
      const date = handleDate(createdAt)
      return { id, name, slug, date }
    })
  }

  const headInfo = [t('id'), t('name'), t('slug'), t('createDateGroup')]

  return {
    headInfo,
    bodyInfo,
  }
}
