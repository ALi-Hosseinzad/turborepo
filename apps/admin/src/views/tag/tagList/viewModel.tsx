import type { TagBodyInTableType, UseListViewModelType } from '../imports'
import { useTranslations } from '../imports'

export const useTagListViewModel = (): UseListViewModelType => {
  const t = useTranslations()
  const headInfo = [t('id'), t('category'), t('englishSlug')]

  const handleBodyInfo = (body: TagBodyInTableType[]): any[] => {
    if (body?.length) {
      return body.map(({ id, name, slug }) => {
        return {
          id,
          name,
          slug,
        }
      })
    }

    return []
  }

  return {
    bodyInfo: handleBodyInfo,
    headInfo,
  }
}
