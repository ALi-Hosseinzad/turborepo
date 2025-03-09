import { useQuery } from '@tanstack/react-query'
import type { UseAxiosQueryPropsType, UseAxiosQueryType } from '@/types/common'
import { axiosGet } from '@/configs/httpService/axiosInterceptors'

export const useAxiosQuery = (
  props: UseAxiosQueryPropsType,
): UseAxiosQueryType => {
  const { url, selectFn, ...otherProps } = props

  const {
    data,
    isLoading,
    isPending,
    isFetching,
    isSuccess,
    isFetched,
    isError,
    refetch,
    fetchStatus,
  } = useQuery({
    ...otherProps,
    select: selectFn ? selectFn : undefined,
    queryFn: () =>
      axiosGet({
        url,
      }),
  })

  return {
    data,
    isLoading,
    isPending,
    isFetching,
    isSuccess,
    fetchStatus,
    isFetched,
    isError,
    refetch,
  }
}
