'use client'

import {
  type PermissionsBodyItemType,
  type UseListViewModelType,
  useTranslations,
} from '../imports'

export const usePermissionsViewModel = (): UseListViewModelType => {
  const t = useTranslations()

  const headInfo = [
    t('id'),
    t('englishAccessName'),
    t('type'),
    t('farsiAccessName'),
  ]

  const handleBodyInfo = (body: PermissionsBodyItemType[]): any[] => {
    if (body?.length) {
      return body.map(
        ({ id, name, type_label: typeLabel, meta_name: metaName }) => {
          return {
            id,
            name,
            typeLabel,
            metaName,
          }
        },
      )
    }
    return []
  }

  return {
    bodyInfo: handleBodyInfo,
    headInfo,
  }
}
