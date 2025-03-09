export interface ProductCardType {
  id: string | number
  image: string
  imageAlt: string
  discountAmount?: string | number
  productType?: string
  isFavorite?: boolean
  hasForverit?: boolean
  hasDiscountFlag?: boolean
  addFavoriteProduct?: any
  imageClassName?: string
  setAddFavoriteProduct?: () => void
}
