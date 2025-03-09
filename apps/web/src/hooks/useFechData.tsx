import { QueryClient } from '@tanstack/query-core'
import {
  getDataFech,
  getQueryKey,
} from '@/configs/httpService/reactQuery/fechData'

export const useDataFech = async (props: {
  nameQueryKey: string
  urlQueryFn: string
}): Promise<QueryClient> => {
  const { nameQueryKey, urlQueryFn } = props
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: getQueryKey(nameQueryKey),
    queryFn: () => getDataFech(urlQueryFn),
  })

  return queryClient
}
