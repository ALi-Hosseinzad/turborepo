'use client'

import { useEffect, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { useAxiosMutation } from '@/hooks/useAxiosMutation'
import { showError, showInfo, showSuccess } from '@/hooks/useToust'
import { STORE_DELETE_BOOKMARK_URL } from '@/constants/endPoints'

export const useFavoriteViewModel = (
  id,
  productType,
  isFavorite,
  queryKeyForRefetch?: string[],
): any => {
  const [isLiked, setIsLiked] = useState(isFavorite)
  const queryClient = useQueryClient()
  const t = useTranslations()
  useEffect(() => {
    setIsLiked(isFavorite)
  }, [isFavorite])

  const handlerData = (event): void => {
    queryKeyForRefetch?.length &&
      void queryClient.invalidateQueries({
        predicate: (query) =>
          queryKeyForRefetch.includes(query?.queryKey[0] as string),
      })

    if (event?.data === true) {
      setIsLiked(true)
      showSuccess(t('addToFavorite'))
    } else {
      setIsLiked(false)
      showInfo(t('removeFromFavorite'))
    }
  }
  const { mutateAsync, isPending } = useAxiosMutation(
    STORE_DELETE_BOOKMARK_URL,
    'post',
  )

  const handleAddToFavorite = async (event): Promise<void> => {
    event.stopPropagation()
    const body = {
      bookmarkable_type: productType,
      bookmarkable_id: id,
    }

    await mutateAsync(body as any)
      .then((e) => {
        handlerData(e)
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  return {
    isLiked,
    isLoading: isPending,
    handleAddToFavorite,
  }
}
