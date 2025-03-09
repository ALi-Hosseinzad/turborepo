'use client'

import { useTranslations } from '../imports'
import type { RolesBodyItemType, UseListViewModelType } from '../imports'

export const useRolesViewModel = (): UseListViewModelType => {
  const t = useTranslations()
  const headInfo = [t('id'), t('rolesName'), t('permissions')]

  const permission = (permissions: any[]): string => {
    const typeLableArr = permissions?.map(({ meta_name: name }) => name)
    return typeLableArr.join(' , ')
  }

  const handleBodyInfo = (body: RolesBodyItemType[]): any[] => {
    if (body?.length) {
      return body.map(({ id, name, permissions }) => {
        return {
          id,
          name,
          permissions: permission(permissions),
        }
      })
    }
    return []
  }

  return { bodyInfo: handleBodyInfo, headInfo }
}
