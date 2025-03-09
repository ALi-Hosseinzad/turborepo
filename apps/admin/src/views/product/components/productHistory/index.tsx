'use client'

import { ProductHistoryView, useProductHistoryViewModel } from '../../imports'

export const ProductHistory = (): JSX.Element => {
  const { headInfo, bodyInfo, params, pageCount, onChangePage, isLoading } =
    useProductHistoryViewModel()
  return (
    <ProductHistoryView
      headInfo={headInfo}
      bodyInfo={bodyInfo}
      params={params}
      pageCount={pageCount}
      isLoading={isLoading}
      onChangePage={onChangePage}
    />
  )
}
