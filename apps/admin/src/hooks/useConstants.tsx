import { useTranslations } from 'next-intl'

export const useConstants = (): any => {
  const t = useTranslations()
  const fileTypes = [
    { value: 'image', label: t('image') },
    { value: 'video', label: t('video') },
    { value: 'motion', label: t('motion') },
    { value: 'gift', label: t('gift') },
  ]
  const relationTypes = [
    { value: 'entity', label: t('entity') },
    { value: 'link', label: t('link') },
  ]
  return { fileTypes, relationTypes }
}
