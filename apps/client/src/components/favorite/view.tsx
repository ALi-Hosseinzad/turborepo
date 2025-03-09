'use client'

import { CircularProgress } from '@mui/material'
import { LoveIcon, NotLoveIcon } from 'ui/components/icons'

const FavoriteView = ({
  isLiked,
  isLoading,
  handleAddToFavorite,
}: any): JSX.Element => {
  return (
    <button
      type="button"
      className="cursor-pointer"
      onClick={handleAddToFavorite}
    >
      {isLoading ? (
        <CircularProgress
          className="z-[999]"
          size="20px"
          sx={{
            color: 'white',
          }}
        />
      ) : (
        <>
          {isLiked ? (
            <LoveIcon className="w-6 h-6" />
          ) : (
            <span className="z-20">
              <NotLoveIcon className="w-6 h-6 hover:fill-[#F5455B] hover:ease-in" />
            </span>
          )}
        </>
      )}
    </button>
  )
}

export default FavoriteView
