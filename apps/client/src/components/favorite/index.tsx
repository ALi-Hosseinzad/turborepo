import React from 'react'
import FavoriteView from './view'
import { useFavoriteViewModel } from './viewModel'

export const Favorite = ({
  id,
  productType,
  isFavorite,
  queryKeyForRefetch,
}): any => {
  const { isLiked, isLoading, handleAddToFavorite } = useFavoriteViewModel(
    id,
    productType,
    isFavorite,
    queryKeyForRefetch,
  )
  return (
    <FavoriteView
      isLiked={isLiked}
      isLoading={isLoading}
      handleAddToFavorite={handleAddToFavorite}
    />
  )
}
