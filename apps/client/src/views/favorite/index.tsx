'use client'

import { BreadCrumbs, FavoriteCard, useTranslations } from './imports'

const Favorites = () => {
  const t = useTranslations()
  const breadCrumbs = [{ name: t('favorites'), url: '' }]

  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <FavoriteCard />
    </>
  )
}

export default Favorites
