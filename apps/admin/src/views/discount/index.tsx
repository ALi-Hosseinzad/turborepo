'use client'

import { DiscountListView, useDiscountListViewModel } from './imports'

const Discount = (): JSX.Element => {
  const {
    headInfo,
    bodyInfo,
    page,
    isLoading,
    pageCount,
    onChangePage,
    onErrorDelete,
    afterDeleteHandler,
    isFetching,
  } = useDiscountListViewModel()
  return (
    <DiscountListView
      bodyInfo={bodyInfo}
      headInfo={headInfo}
      pageCount={pageCount}
      isLoading={isLoading}
      afterDeleteHandler={afterDeleteHandler}
      page={page}
      isFetching={isFetching}
      onChangePage={onChangePage}
      onErrorDelete={onErrorDelete}
    />
  )
}

export default Discount
