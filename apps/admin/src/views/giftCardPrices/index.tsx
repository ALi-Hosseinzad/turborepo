'use client'

import {
  GiftCardPriceListView,
  React,
  useGiftCardPriceViewModel,
} from './imports'

const GiftCardPrices = (): JSX.Element => {
  const {
    headInfo,
    page,
    onChangePage,
    bodyInfo,
    isLoading,
    isFetching,
    pageCount,
    afterDeleteHandler,
    onErrorDelete,
  } = useGiftCardPriceViewModel()

  return (
    <GiftCardPriceListView
      headInfo={headInfo}
      bodyInfo={bodyInfo}
      page={page}
      pageCount={pageCount}
      isLoading={isLoading}
      isFetching={isFetching}
      afterDeleteHandler={afterDeleteHandler}
      onChangePage={onChangePage}
      onErrorDelete={onErrorDelete}
    />
  )
}

export default GiftCardPrices
