import {
  ADD,
  ADMIN,
  DISCOUNT,
  DISCOUNT_URL,
  OstiganTable,
  useTranslations,
} from '../imports'

const DiscountListView = (props: any): JSX.Element => {
  const {
    page,
    headInfo,
    bodyInfo,
    isLoading,
    afterDeleteHandler,
    onChangePage,
    pageCount,
    onErrorDelete,
    isFetching,
  } = props
  const t = useTranslations()

  return (
    <>
      {bodyInfo?.length === 0 ? (
        <div>{t('noData')}</div>
      ) : (
        <OstiganTable
          headInfo={headInfo}
          bodyInfo={bodyInfo}
          urlDeleteRequest={`${ADMIN}${DISCOUNT_URL}`}
          addNavigationLink={`${DISCOUNT}/${ADD}`}
          tableStyle={ADMIN}
          isLoading={isLoading}
          pageCount={pageCount}
          page={page}
          addBtnText={t('addNewDiscount')}
          tableLabel={t('discount')}
          // editNavigationLink={DISCOUNT_URL}
          afterDeleteHandler={afterDeleteHandler}
          isFetching={isFetching}
          onChangePage={onChangePage}
          onErrorDelete={onErrorDelete}
        />
      )}
    </>
  )
}

export default DiscountListView
