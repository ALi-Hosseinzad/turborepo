'use client'

import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { queryStringEndpoint } from 'ui'
import { INDEX_PARAMS } from 'constants/common'
import { axiosGet } from 'configs/httpService/axios/httpService'
import type { QueryListType, UseSelectScrollPropsType } from 'types/common'

export const useSelectScroll = (props: UseSelectScrollPropsType): any => {
  const { queryKey, url } = props
  const [params, setParams] = useState<QueryListType>(INDEX_PARAMS)
  const [items, setItems] = useState<any>([])

  const {
    data: itemsData,
    isLoading,
    isPending,
    isFetching,
  } = useQuery({
    queryKey: [queryKey, params, url],
    queryFn: () => axiosGet({ url: `${url}${queryStringEndpoint(params)}` }),
  })

  const itemsList = itemsData?.data

  const pageCount = itemsData?.pagination?.total_pages

  const onScrollToLastItemHandler = (): void => {
    if (!isPending) {
      setParams((prev) => {
        if (prev.page !== undefined && pageCount > parseInt(prev.page)) {
          return { ...prev, page: (Number(prev.page) + 1).toString() }
        }
        return { ...prev }
      })
    }
  }

  useEffect(() => {
    if (itemsList !== undefined) {
      if (params.page !== '1') {
        setItems((prev) => [...itemsList, ...prev])
      } else {
        setItems(() => [...itemsList])
      }
    }
  }, [itemsData])

  useEffect(() => {
    setParams(INDEX_PARAMS)
  }, [url])

  return {
    items: isLoading || isFetching ? [] : items,
    isLoading: isLoading || isFetching,
    params,
    onScrollToLastItemHandler,
  }
}
