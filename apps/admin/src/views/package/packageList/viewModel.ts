'use client'

import {
  type PackagesBodyItemType,
  type UseListViewModelType,
  useTranslations,
} from '../imports'

export const usePackageListViewModel = (): UseListViewModelType => {
  const t = useTranslations()

  const handleBodyInfo = (body: PackagesBodyItemType[]): any[] => {
    return body?.map(
      ({
        id,
        title,
        category,
        status_label: status,
        tags,
        amount,
        discount_type: discountType,
      }) => {
        const categoryName = category.map((cat: any) => cat.name).toString()
        const tagsName = tags.map((tag: any) => tag.name).toString()
        const discountWithType =
          discountType === 'percent' ? `%${amount}` : amount
        return {
          id,
          title,
          categoryName,
          status,
          tagsName,
          discountWithType,
        }
      },
    )
  }

  const headInfo = [
    t('id'),
    t('type'),
    t('category'),
    t('status'),
    t('tags'),
    t('discountAmount'),
  ]

  return {
    headInfo,
    bodyInfo: handleBodyInfo,
  }
}
