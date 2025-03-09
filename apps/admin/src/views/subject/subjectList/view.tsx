import { OstiganTable, SUBJECT_URL, useTranslations } from '../imports'

const SubjectListView = (props: any): JSX.Element => {
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
    <OstiganTable
      headInfo={headInfo}
      bodyInfo={bodyInfo}
      tableStyle="admin"
      isLoading={isLoading}
      pageCount={pageCount}
      page={page}
      urlDeleteRequest={`admin${SUBJECT_URL}`}
      addNavigationLink="subject/add"
      addBtnText={t('addSubject')}
      afterDeleteHandler={afterDeleteHandler}
      editNavigationLink="subject"
      isFetching={isFetching}
      tableLabel={t('subjects')}
      onChangePage={onChangePage}
      onErrorDelete={onErrorDelete}
    />
  )
}

export default SubjectListView
