export interface UsePriceEstimationFormViewMOdelType {
  isLoadingRegion: boolean
  isLoadingPrice: boolean
  dataRegion: []
  disabled: boolean
  priceList: any[]
  currency: string
}
export interface FormikValuesPriceEstimationFormType {
  productType: any
  region: any
}
export interface UsePriceEstimationViewMOdelType {
  initialValues: {
    productType: string
    region: string
    price: string
  }
  validationSchema: object
  onSubmit: (values: any) => any
  data: any[]
  isLoading: boolean
}
