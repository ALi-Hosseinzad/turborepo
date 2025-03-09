import type { UseListViewModelType } from '../imports'
import { useTranslations } from '../imports'

export const useFormManagementListViewModel = (): UseListViewModelType => {
  const t = useTranslations()

  const headInfo = [t('id'), t('formName'), t('status')]

  const handleBodyInfo = (curData): any => {
    return curData?.map(({ id, name, status_label: status }) => {
      return { id, name, status }
    })
  }

  return {
    bodyInfo: handleBodyInfo,
    headInfo,
  }
}
