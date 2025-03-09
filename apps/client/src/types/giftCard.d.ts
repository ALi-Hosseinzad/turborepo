export interface GiftCardDetailsViewModelType {
  productHeaderInfo: Record<string, any>
  regionsList: Record<{ value; label }, any>[]
  productList: Record<{ value; label }, any>[]
  selectedProduct: Record<string, any>
  isLoading: boolean
  getBreadCrumbs?: any
  handleRegionSelected: (id: string | number) => void
  handleProductSelected: (id: string | number) => void
}
