'use client'

import {
  GIFT_CARD_PRODUCT_BUY_PRICE_URL,
  OstiganTable,
  React,
  useTranslations,
} from '../imports'

const GiftCardPriceListView = ({
  page,
  headInfo,
  bodyInfo,
  pageCount,
  isLoading,
  isFetching,
  onChangePage,
  onErrorDelete,
  afterDeleteHandler,
}): JSX.Element => {
  const t = useTranslations()

  return (
    <OstiganTable
      headInfo={headInfo}
      tableLabel={t('priceManagement')}
      bodyInfo={bodyInfo}
      tableStyle="admin"
      isLoading={isLoading}
      pageCount={pageCount}
      page={page}
      urlDeleteRequest={`admin${GIFT_CARD_PRODUCT_BUY_PRICE_URL}`}
      addNavigationLink="giftCardPrice/add"
      addBtnText={t('addNewGiftCardPrice')}
      afterDeleteHandler={afterDeleteHandler}
      isFetching={isFetching}
      onChangePage={onChangePage}
      onErrorDelete={onErrorDelete}
    />
  )
}

export default GiftCardPriceListView
