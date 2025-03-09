'use client'

import type { BodyInfoCategoryType, UseListViewModelType } from '../imports'
import { Image, useTranslations } from '../imports'

export const useCategoryListViewModel = (): UseListViewModelType => {
  const t = useTranslations()

  const headInfo = [
    t('id'),
    t('name'),
    t('englishSlug'),
    t('categoryType'),
    t('icon'),
  ]

  const bodyInfo = (categories: any): BodyInfoCategoryType[] => {
    return categories?.map((category: any) => {
      const { id, name, slug, image, type_label: typeLabel } = category
      return {
        id,
        name,
        slug,
        typeLabel,
        image: (
          <Image
            src={image}
            width={30}
            height={30}
            alt="icon"
            className="m-auto"
          />
        ),
      }
    })
  }

  return {
    headInfo,
    bodyInfo,
  }
}
