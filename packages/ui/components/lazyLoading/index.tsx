import React, { useEffect, useState } from 'react'
import { Loading } from '../loading/loading'

export const LazyLoading = ({
  children,
  className,
  getCurData,
}: {
  children: any
  getCurData: any
  className?: string
}): any => {
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<any[]>([])

  const getData = async (curPage: number): Promise<any> => {
    setIsLoading(false)
    const pagination = `page=${curPage}&perPage=10`
    const res = await getCurData?.(pagination)
    setTotal(res?.pagination?.totalPage)
    return res
  }

  const onScroll = (): void => {
    setPage((prev) => {
      if (prev < total) {
        getData(prev + 1)
        setIsLoading(false)
        return prev + 1
      }
      return prev
    })
  }

  const handleScroll = (e: any): any => {
    const { currentTarget } = e
    const { scrollHeight, scrollTop, clientHeight } = currentTarget
    if (scrollHeight - scrollTop === clientHeight) {
      onScroll()
    }
  }

  useEffect(() => {
    if (page > 1) {
      getData(page).then((res) => {
        setData((prev: any) => {
          return [...prev, ...res.data]
        })
        setIsLoading(false)
      })
    }
  }, [page])

  useEffect(() => {
    getData(page).then((res) => {
      setData(res?.data)
      setIsLoading(false)
    })
  }, [])

  return (
    <>
      <Loading isLoading={isLoading} />
      <div
        className={`h-[calc(100vh-235px)] overflow-y-scroll ${className}`}
        onScroll={handleScroll}
      >
        {children?.(data)}
      </div>
    </>
  )
}
