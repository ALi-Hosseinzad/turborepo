import { useQuery } from '@tanstack/react-query'
import { axiosGet } from 'configs/httpService/axios/httpService'
import type { UseAutoCompleteType } from 'types/common'

export const useCustomFormikAutoComplete = (
  url: string,
  queryKey: string,
  enabled = true,
): UseAutoCompleteType => {
  const { data, isLoading, isPending } = useQuery({
    queryKey: [queryKey, url],
    queryFn: () =>
      axiosGet({
        url,
      }),
    enabled,
  })
  return {
    data,
    isLoading: isLoading || isPending,
  }
}
