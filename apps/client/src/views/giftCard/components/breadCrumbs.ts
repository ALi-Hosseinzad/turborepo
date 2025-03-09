import { useTranslations } from 'next-intl'
import type { BreadcrumbType } from '@/types/checkout'
import { GIFT_CARD } from '@/constants/routes'

export const useBreadCrumbs = () => {
  const t = useTranslations()

  const getBreadCrumbs = (): BreadcrumbType[] => {
    return [
      {
        name: t('giftCard'),
        url: GIFT_CARD,
      },
    ]
  }

  return {
    getBreadCrumbs,
  }
}
