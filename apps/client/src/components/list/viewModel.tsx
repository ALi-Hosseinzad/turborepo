import { useMemo, useState } from 'react'
import { useTranslations } from 'use-intl'
import { useQuery } from '@tanstack/react-query'
import { queryStringEndpoint, showError, showSuccess } from 'ui'
import { INDEX_PARAMS } from '@/constants/constants'
import { axiosGet } from '@/configs/httpService/axiosInterceptors'

export const useListViewModel = ({
  url,
  queryKey,
  enabled,
  queryParams,
}: any): any => {
  const t = useTranslations()
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

  const afterDeleteHandler = async (): Promise<void> => {
    if (data?.pagination?.count === 1) {
      setParams((prev: any) => ({ ...prev, page: prev.page - 1 }))
    } else {
      await refetchList()
    }
    showSuccess(t('deletedSuccessfully'))
  }

  const onErrorDelete = (error: any): void => {
    showError(error.message)
  }

  const pageCount = data?.pagination?.total_pages

  return {
    data,
    pageCount,
    isLoading,
    isFetching,
    refetchList,
    onChangePage,
    onErrorDelete,
    page: params.page,
    afterDeleteHandler,
  }
}
