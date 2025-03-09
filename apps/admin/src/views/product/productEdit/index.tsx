'use client'

import {
  Loading,
  ProductForm,
  ProductHistory,
  useProductEditViewModel,
  useTranslations,
} from '../imports'

export const ProductEdit = (): JSX.Element => {
  const {
    initialValues,
    handleEditNewProduct,
    isPendingPostData,
    isLoadingGetData,
  } = useProductEditViewModel()
  const t = useTranslations()
  return (
    <>
      <div className="flex flex-col gap-16">
        <ProductForm
          initialValues={initialValues}
          isLoading={isPendingPostData}
          disabled={isPendingPostData}
          titleHeader1={` ${t('edit')} ${t('product')} `}
          onSubmit={handleEditNewProduct}
        />
        <ProductHistory />
      </div>
      <Loading isLoading={isLoadingGetData} />
    </>
  )
}
