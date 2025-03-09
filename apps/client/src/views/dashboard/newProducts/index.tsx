'use client'

import {
  ProductSlider,
  useNewProductsViewModel,
  useTranslations,
} from '../import'

export const NewProducts = () => {
  const { newProductsList, isLoading, isError } = useNewProductsViewModel()
  const t = useTranslations()
  return (
    <ProductSlider
      productsList={newProductsList || []}
      isLoading={isLoading}
      isError={isError}
      title={t('newProducts')}
      queryKeyForRefetch={['bokmark-list']}
    />
  )
}
