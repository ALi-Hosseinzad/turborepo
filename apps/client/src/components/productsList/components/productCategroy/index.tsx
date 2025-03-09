import {
  ProductsCategoryView,
  useProductsCategoryViewModel,
} from '../../imports'

export const ProductsCategory = ({
  setDataProductFilter,
  dataProductAll,
  productType,
}): any => {
  const {
    clientWindowHeight,
    filterProductHandler,
    dataCategoryList,
    isLoading,
  } = useProductsCategoryViewModel(
    dataProductAll,
    setDataProductFilter,
    productType,
  )

  return (
    <ProductsCategoryView
      dataCategoryList={dataCategoryList}
      clientWindowHeight={clientWindowHeight}
      setDataProductFilter={setDataProductFilter}
      dataProductAll={dataProductAll}
      filterProductHandler={filterProductHandler}
      isLoading={isLoading}
    />
  )
}
