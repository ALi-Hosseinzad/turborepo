import { ProductsView, useProductsViewModel } from '../../imports'

export const Products = ({ productsList }): JSX.Element => {
  const { cardNumberInRow, handleSliceArray } = useProductsViewModel()

  return (
    <ProductsView
      cardNumberInRow={cardNumberInRow}
      handleSliceArray={handleSliceArray}
      productsList={productsList}
    />
  )
}
