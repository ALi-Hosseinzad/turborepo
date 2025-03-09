'use client'

import { useSelectScroll } from 'hooks/useSelectScroll'

export const useSelectViewModel = (url, queryKey): any => {
  const {
    items,
    defaultCurValue,
    isLoading,
    params,
    onScrollToLastItemHandler,
  } = useSelectScroll({ url, queryKey })

  return {
    items,
    defaultCurValue,
    isLoading,
    params,
    onScrollToLastItemHandler,
  }
}
