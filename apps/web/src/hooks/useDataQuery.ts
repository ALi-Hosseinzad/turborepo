import { useQuery } from '@tanstack/react-query'
import { getDataFech } from '@/configs/httpService/reactQuery/fechData'

export const useDataQuery = (props: {
  nameQueryKey: string
  urlQueryFn: string
}): any => {
  const { nameQueryKey, urlQueryFn } = props

  const result = useQuery({
    queryKey: [nameQueryKey],
    queryFn: () => getDataFech(urlQueryFn),
  })

  return result.data
}
