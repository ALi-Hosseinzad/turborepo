'use client'

import {
  FormLayout,
  Loading,
  ProductFormView,
  useProductFormViewModel,
  useTranslations,
} from '../../imports'

export const ProductForm = ({
  initialValues,
  onSubmit,
  isLoading,
  disabled,
  titleHeader1,
}): JSX.Element => {
  const t = useTranslations()
  const {
    validationSchema,
    dataProductsOption,
    isLoadingProduct,
    dataRegionOption,
    isLoadingRegion,
    status,
  } = useProductFormViewModel()

  return (
    <FormLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      titleHeader1={titleHeader1}
      titleHeader2={t('productInfo')}
      isLoading={isLoading}
      disabled={disabled}
      onSubmit={onSubmit}
    >
      <Loading isLoading={isLoading} />
      <ProductFormView
        dataProductsOption={dataProductsOption}
        isLoadingProduct={isLoadingProduct}
        dataRegionOption={dataRegionOption}
        isLoadingRegion={isLoadingRegion}
        status={status}
      />
    </FormLayout>
  )
}
