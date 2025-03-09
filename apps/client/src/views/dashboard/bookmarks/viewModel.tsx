import { BOOKMARK_URL, useAxiosQuery } from '../import'

interface BookmarksViewModelType {
  bookmarksList: Record<string, any>[]
  isLoading: boolean
  isError: boolean
  refetchBookmarks: () => void
}

export const useBookmarksViewModel = (): BookmarksViewModelType => {
  const selectFunction = (data) => {
    return data?.map(({ products }) => ({ ...products }))
  }
  const fallback = []
  const {
    data: bookmarksList = fallback,
    isLoading,
    isError,
    refetch: refetchBookmarks,
  } = useAxiosQuery({
    url: BOOKMARK_URL,
    queryKey: ['bokmark-list'],
    enabled: true,
    selectFn: selectFunction,
  })

  return { bookmarksList, isLoading, isError, refetchBookmarks }
}
