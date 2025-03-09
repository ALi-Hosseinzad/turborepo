import { type UseListViewModelType, useTranslations } from '../imports'

export const useBannerImageListViewModel = (): UseListViewModelType => {
  const t = useTranslations()

  const bodyInfo = (curData: any): any[] => {
    return curData?.map(
      ({
        id,
        file_type: fileType,
        relation_type: relation,
        time,
        priority,
      }) => {
        return { id, fileType, relation, time, priority }
      },
    )
  }

  const headInfo = [
    t('id'),
    t('type'),
    t('relationType'),
    t('time'),
    t('priority'),
  ]

  return {
    headInfo,
    bodyInfo,
  }
}
