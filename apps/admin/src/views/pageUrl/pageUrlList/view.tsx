import {
  ADD,
  ADMIN,
  OstiganTable,
  PAGE_URL,
  PAGE_URL_URL,
  useTranslations,
} from '../imports'

const PageUrlListView = (props: any): JSX.Element => {
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
          urlDeleteRequest={`${ADMIN}${PAGE_URL_URL}`}
          addNavigationLink={`${PAGE_URL}/${ADD}`}
          addBtnText={t('addNewPageUrl')}
          editNavigationLink={PAGE_URL}
          afterDeleteHandler={afterDeleteHandler}
          isFetching={isFetching}
          onChangePage={onChangePage}
          onErrorDelete={onErrorDelete}
        />
      )}
    </>
  )
}

export default PageUrlListView
