import type { Dispatch, SetStateAction } from 'react'

export interface ProductsListViewModelType {
  dataProductAll: Record<string, any>[]
  dataProductFilter: Record<string, any>[]
  isLoadingGetDataProducts: boolean
  setDataProductFilter: Dispatch<SetStateAction<any[]>>
}

export type ProductsListViewType = Omit<
  ProductsListViewModelType,
  'isLoadingGetDataProducts'
> & { productType: 'gift_card' | 'online_payment' }

interface PropsHandleSliceArrayType {
  startIndex: number | string
  stopIndex?: number | string
  arrayList: any[]
}
export interface ProductsViewModeltype {
  cardNumberInRow: number
  handleSliceArray: ({
    startIndex,
    stopIndex,
    arrayList,
  }: PropsHandleSliceArrayType) => JSX.Element
}

export interface ProductsViewType extends ProductsViewModeltype {
  productsList: Record<string, any>[]
}

export interface ProductsCategoryViewModelType {
  clientWindowHeight: boolean
  filterProductHandler: (categoryId: string | number) => void
  dataCategoryList: Record<string, any>[]
  isLoading: boolean
}

export type ProductsCategoryViewType = ProductsCategoryViewModelType &
  Pick<ProductsListViewModelType, 'dataProductAll' | 'setDataProductFilter'>
