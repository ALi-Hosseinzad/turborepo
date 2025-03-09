'use client'

import { OstiganStatus } from 'ui'
import type {
  OrderListViewType,
  OrderQueryListType,
  PaginationType,
} from '../import'
import {
  axiosGet,
  INDEX_PARAMS,
  ORDER_URL,
  useEffect,
  useQuery,
  useState,
  useTranslations,
} from '../import'

export const useOrderListViewModel = (): OrderListViewType => {
  const t = useTranslations()
  const [orderData, setOrderData] = useState<[]>()
  const [orderPagination, setOrderPagination] = useState<PaginationType>()
  const [params, setParams] = useState<OrderQueryListType>(INDEX_PARAMS)

  const { data, isLoading } = useQuery({
    queryKey: ['order', params.page],
    queryFn: () => axiosGet({ url: ORDER_URL }),
  })

  useEffect(() => {
    if (data?.data) {
      const newUsers = data?.data.map(
        ({
          id,
          tracking_code: trackingCode,
          created_at: createdAt,
          user_name: userName,
          user_phone: userPhone,
          full_price: fullPrice,
          count,
          status,
          status_label: statusLabel,
          product,
        }) => {
          const [firstName, lastName] = userName
            ? userName.split('_')
            : [null, null]
          const [date, time] = createdAt.split('T')

          return {
            id,
            trackingCode,
            createdAt: (
              <div className="flex flex-col">
                <p>{date}</p>
                <p>{time.split('.')[0]}</p>
              </div>
            ),
            firstName,
            lastName,
            userPhone,
            fullPrice,
            count,
            statusLabel: (
              <div className="flex justify-center items-center w-full">
                <OstiganStatus
                  text={statusLabel}
                  status={status}
                  className="!text-sm py-2"
                />
              </div>
            ),
            product: product?.name,
          }
        },
      )

      setOrderPagination(data?.pagination)
      setOrderData(newUsers)
    }
  }, [data])

  const onChangePage = (page: string): void => {
    setParams((prev) => ({ ...prev, page }))
  }

  const headInfoTable = [
    t('id'),
    t('trackingCode'),
    t('date'),
    t('firstName'),
    t('lastName'),
    t('phone'),
    t('price'),
    t('count'),
    t('status'),
    t('OrderType'),
  ]

  return {
    orderData,
    headInfoTable,
    orderPagination,
    params,
    data,
    onChangePage,
    isLoading,
  }
}
