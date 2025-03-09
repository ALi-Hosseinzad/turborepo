import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { queryStringEndpoint } from 'ui'
import { INDEX_PARAMS } from '@/constants/constants'
import { axiosGet } from '@/configs/httpService/axiosInterceptors'

export const useListCardsViewModel = ({
  url,
  queryKey,
  enabled,
  queryParams,
}: any): any => {
  const [params, setParams] = useState<any>({ ...INDEX_PARAMS, ...queryParams })

  const queryString = useMemo(() => {
    return queryStringEndpoint(params)
  }, [params])

  const {
    data,
    isLoading,
    isFetching,
    refetch: refetchList,
  } = useQuery({
    queryKey: [queryKey, params],
    queryFn: () =>
      axiosGet({
        url: `${url}${queryString}`,
      }),
    staleTime: 10 * 60000,
    enabled: typeof enabled !== 'boolean',
  })

  const onChangePage = (page: any): void => {
    setParams((prev: any) => ({ ...prev, page }))
  }
  const pageCount = data?.pagination?.total_pages

  return {
    data,
    pageCount,
    isLoading,
    isFetching,
    refetchList,
    onChangePage,
    page: params.page,
  }
}
