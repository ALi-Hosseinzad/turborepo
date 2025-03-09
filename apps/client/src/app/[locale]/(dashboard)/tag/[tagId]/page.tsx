import React from 'react'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import type { PagePropsType } from '@/types/nextIntl'
import TagProducts from '@/views/tagProducts'

const TagProductPage: React.FC<PagePropsType> = ({ params: { locale } }) => {
  unstable(locale)

  return <TagProducts />
}

export default TagProductPage
