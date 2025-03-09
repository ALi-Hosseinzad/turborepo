import React from 'react'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import Product from 'views/product'
import type { PagePropsType } from 'types/common'

const ProductPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <Product />
}

export default ProductPage
