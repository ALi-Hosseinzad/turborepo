import ProductsListSkeleton from './components/other/productsListSkeleton'
import { ProductsListView, useProductsListViewModel } from './imports'

export const ProductsList = ({ url, productType }): JSX.Element => {
  const {
    dataProductFilter,
    isLoadingGetDataProducts,
    setDataProductFilter,
    dataProductAll,
  } = useProductsListViewModel(url)

  return (
    <>
      {isLoadingGetDataProducts ? (
        <ProductsListSkeleton isLoading={isLoadingGetDataProducts} />
      ) : (
        <ProductsListView
          dataProductAll={dataProductAll}
          dataProductFilter={dataProductFilter}
          productType={productType}
          setDataProductFilter={setDataProductFilter}
        />
      )}
    </>
  )
}
