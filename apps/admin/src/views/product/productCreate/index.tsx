'use client'

import {
  ProductForm,
  useProductCreateViewModel,
  useTranslations,
} from '../imports'

export const ProductCreate = (): JSX.Element => {
  const { initialValues, handleAddNewProduct, isPending } =
    useProductCreateViewModel()
  const t = useTranslations()
  return (
    <ProductForm
      initialValues={initialValues}
      isLoading={isPending}
      disabled={isPending}
      titleHeader1={t('addNewProduct')}
      onSubmit={handleAddNewProduct}
    />
  )
}
