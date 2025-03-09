import {
  axiosGet,
  PRODUCTS_CATEGORY_URL,
  useEffect,
  useQuery,
  useState,
} from '../../imports'
import type { ProductsCategoryViewModelType } from '../../imports'

export const useProductsCategoryViewModel = (
  dataProducts,
  setDataProductFilter,
  productType,
): ProductsCategoryViewModelType => {
  const [clientWindowHeight, setClientWindowHeight] = useState(false)

  const { data: dataCategoryList, isLoading } = useQuery({
    queryKey: [`product-category-${productType}`],
    queryFn: () =>
      axiosGet({
        url: `${PRODUCTS_CATEGORY_URL}?type=${productType}`,
      }),
    staleTime: 10 * 60000,
  })

  const handleScroll = (): any => {
    if (window?.scrollY >= 350) {
      setClientWindowHeight(true)
    }
    if (window?.scrollY < 150) {
      setClientWindowHeight(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const filterProductHandler = (categoryId: string | number) => {
    const filterGiftCardList = dataProducts.filter(
      (item) => item.id === Number(categoryId),
    )
    setDataProductFilter(filterGiftCardList)
  }

  return {
    clientWindowHeight,
    filterProductHandler,
    dataCategoryList,
    isLoading,
  }
}
