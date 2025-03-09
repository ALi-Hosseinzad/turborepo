import {
  ADD,
  ADMIN,
  BANNER,
  BANNER_URL,
  OstiganTable,
  useTranslations,
} from '../imports'

const BannerManagementListView = (props: any): JSX.Element => {
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
          tableStyle={ADMIN}
          isLoading={isLoading}
          pageCount={pageCount}
          page={page}
          urlDeleteRequest={`${ADMIN}${BANNER_URL}`}
          addNavigationLink={`${BANNER}Management/${ADD}`}
          addBtnText={t('addNewContentBanner')}
          editNavigationLink={`${BANNER_URL}Management`}
          afterDeleteHandler={afterDeleteHandler}
          isFetching={isFetching}
          onChangePage={onChangePage}
          onErrorDelete={onErrorDelete}
        />
      )}
    </>
  )
}

export default BannerManagementListView
