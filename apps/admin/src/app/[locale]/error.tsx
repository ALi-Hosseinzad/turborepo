'use client'

import { useTranslations } from 'next-intl'

export default function Error(): React.ReactElement {
  const t = useTranslations()

  return <h1>{t('title')}</h1>
}
