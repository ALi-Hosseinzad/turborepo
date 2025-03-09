import type { BreadcrumbType } from '@/types/checkout'
import { TICKETS, useTranslations } from '../imports'

export const useBreadCrumbs = () => {
  const t = useTranslations()

  const getBreadCrumbs = (): BreadcrumbType[] => {
    return [
      {
        name: t('tickets'),
        url: TICKETS,
      },
    ]
  }

  return {
    getBreadCrumbs,
  }
}
