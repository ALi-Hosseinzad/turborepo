import { useTranslations } from 'next-intl'

export const useStatus = (): { statusList: any[] } => {
  const t = useTranslations()
  const statusList = [
    { value: 'draft', label: t('draft') },
    { value: 'active', label: t('active') },
    { value: 'disable', label: t('disable') },
    { value: 'unavailable', label: t('unavailable') },
  ]
  return { statusList }
}
