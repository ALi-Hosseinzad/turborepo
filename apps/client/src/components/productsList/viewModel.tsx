import { axiosGet, useEffect, useQuery, useState } from './imports'
import type { ProductsListViewModelType } from './imports'

export const useProductsListViewModel = (
  url: string,
): ProductsListViewModelType => {
  const [dataProductFilter, setDataProductFilter] = useState<any[]>([])

  const { data: dataProductAll, isLoading: isLoadingGetDataProducts } =
    useQuery({
      queryKey: [url],
      queryFn: () =>
        axiosGet({
          url,
        }),
      staleTime: 10 * 60000,
    })

  useEffect(() => {
    if (dataProductAll) {
      setDataProductFilter(dataProductAll)
    }
  }, [dataProductAll])

  return {
    dataProductAll,
    dataProductFilter,
    isLoadingGetDataProducts,
    setDataProductFilter,
  }
}
