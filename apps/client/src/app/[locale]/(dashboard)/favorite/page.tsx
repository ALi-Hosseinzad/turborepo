import React from 'react'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import type { PagePropsType } from '@/types/nextIntl'
import Favorites from '@/views/favorite'

const FavoritePage: React.FC<PagePropsType> = ({ params: { locale } }) => {
  unstable(locale)
  return <Favorites />
}
export default FavoritePage
