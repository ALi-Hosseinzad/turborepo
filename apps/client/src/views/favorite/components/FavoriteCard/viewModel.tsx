import { BOOKMARK_URL, useAxiosQuery } from '../../imports'

export const useFavoriteCardViewModel = () => {
  const { refetch, data, isLoading } = useAxiosQuery({
    url: `${BOOKMARK_URL}?page=1&perPage=10`,
    queryKey: ['bookmark-cards'],
  })

  return { refetch, data, isLoading }
}
