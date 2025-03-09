'use client'

import { ProductSliderView, useProductSliderViewModel } from '../../import'

export const ProductSlider = ({
  productsList,
  isLoading,
  isError,
  title,
  queryKeyForRefetch,
}) => {
  const { handleSliceArray, handleSliceLoading } =
    useProductSliderViewModel(queryKeyForRefetch)

  return (
    <ProductSliderView
      title={title}
      productsList={productsList}
      isLoading={isLoading}
      isError={isError}
      handleSliceArray={!isLoading ? handleSliceArray : handleSliceLoading}
      queryKeyForRefetch={queryKeyForRefetch}
    />
  )
}
