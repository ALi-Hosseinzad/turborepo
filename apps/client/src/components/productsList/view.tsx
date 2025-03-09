import { Products, ProductsCategory } from './imports'
import type { ProductsListViewType } from './imports'

export const ProductsListView = (props: ProductsListViewType): JSX.Element => {
  const {
    dataProductAll,
    dataProductFilter,
    setDataProductFilter,
    productType,
  } = props
  return (
    <div className="flex flex-col">
      <ProductsCategory
        productType={productType}
        setDataProductFilter={setDataProductFilter}
        dataProductAll={dataProductAll}
      />
      <Products productsList={dataProductFilter} />
    </div>
  )
}
