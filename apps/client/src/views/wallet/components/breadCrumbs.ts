import { useTranslations } from 'next-intl'
import type { BreadcrumbType } from '@/types/checkout'
import { WALLET } from '@/constants/routes'

export const useBreadCrumbs = () => {
  const t = useTranslations()

  const getBreadCrumbs = (): BreadcrumbType[] => {
    return [
      {
        name: t('wallet'),
        url: WALLET,
      },
    ]
  }

  return {
    getBreadCrumbs,
  }
}
