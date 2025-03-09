import React from 'react'
import { useLazyLoadingViewModel } from './viewModel'

export const LazyLoading = ({
  url,
  queryKey,
  children,
  className,
}: {
  url: string
  queryKey: string
  children: any
  className?: string
}) => {
  const { data, isFetching, status, handleScroll } = useLazyLoadingViewModel(
    url,
    queryKey,
  )

  return (
    <div
      className={`h-[calc(100vh-300px)] overflow-y-scroll ${className}`}
      onScroll={handleScroll}
    >
      {status === 'pending' ? (
        <p>loading...</p>
      ) : (
        <>{children?.(data, isFetching)}</>
      )}
    </div>
  )
}
