import { useMutation } from '@tanstack/react-query'
import type { UseAxiosMutationType } from '@/types/common.d'
import {
  axiosPost,
  axiosPut,
  axiosPutQuery,
} from '@/configs/httpService/axiosInterceptors'

export const useAxiosMutation = (
  url: string,
  method: 'post' | 'put' | 'putQuery',
): UseAxiosMutationType => {
  const {
    mutateAsync,
    isPending,
    data,
    error,
    isError,
    isIdle,
    isPaused,
    isSuccess,
    failureCount,
    failureReason,
    mutate,
    reset,
    status,
  } = useMutation({
    mutationFn: (argument: any) => {
      const { query, ...body } = argument
      const { ...params } = argument
      if (method === 'putQuery') {
        return axiosPutQuery({ url, params })
      }
      if (method === 'put') {
        return axiosPut({ url: query ? `${url}/${query}` : url, body })
      }
      return axiosPost({ url: query ? `${url}/${query}` : url, body })
    },
  })

  return {
    isPending,
    mutateAsync,
    data,
    error,
    isError,
    isIdle,
    isPaused,
    isSuccess,
    failureCount,
    failureReason,
    mutate,
    reset,
    status,
  }
}
