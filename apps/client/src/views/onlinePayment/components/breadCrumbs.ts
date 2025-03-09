import { useTranslations } from 'next-intl'
import type { BreadcrumbType } from '@/types/checkout'
import { ONLINE_PAYMENT } from '@/constants/routes'

export const useBreadCrumbs = (service?: any) => {
  const t = useTranslations()
  const getBreadCrumbs = (): BreadcrumbType[] => {
    return [
      {
        name: t('onlinePayment'),
        url: ONLINE_PAYMENT,
      },
    ]
  }
  const getBreadCrumbsDetails = (): BreadcrumbType[] => {
    return [
      {
        name: t('onlinePayment'),
        url: ONLINE_PAYMENT,
      },
      {
        name: `${service?.title}`,
        url: `${service?.serviceId}`,
      },
    ]
  }
  return {
    getBreadCrumbs,
    getBreadCrumbsDetails,
  }
}
