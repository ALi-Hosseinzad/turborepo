import { useInfiniteQuery } from '@tanstack/react-query'
import { axiosGet } from '../productsList/imports'

export const useLazyLoadingViewModel = (url, queryKey) => {
  const fetchPage = async (page) => {
    const data = await axiosGet({
      url: `${url}?page=${page}&perPage=5`,
    })
    return data
  }

  const { data, fetchNextPage, isFetching, status } = useInfiniteQuery({
    queryKey: [queryKey],
    queryFn: ({ pageParam = 1 }) => {
      return fetchPage(pageParam)
    },
    initialPageParam: 1,
    // staleTime: Infinity,
    gcTime: Infinity,
    getNextPageParam: (data) => {
      if (data.pagination.current_page < data.pagination.total_pages) {
        return data.pagination.current_page + 1
      }
      return null
    },
  })

  const getData = async (): Promise<any> => {
    const res = await fetchNextPage()
    return res
  }

  const handleScroll = (e: any): any => {
    const { currentTarget } = e
    const { scrollHeight, scrollTop, clientHeight } = currentTarget
    if (scrollHeight - scrollTop === clientHeight) {
      getData()
    }
  }
  return { data, handleScroll, isFetching, status }
}
