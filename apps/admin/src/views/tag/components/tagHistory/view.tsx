import { Header2, OstiganTable, useTranslations } from '../../imports'

export const TagHistoryView = ({
  bodyInfo,
  headInfo,
  params,
  pageCount,
  isLoading,
  onChangePage,
}): JSX.Element => {
  const t = useTranslations()

  return (
    <>
      {bodyInfo.length > 0 ? (
        <div>
          <Header2 title={t('tableTags')} />
          <OstiganTable
            headInfo={headInfo}
            bodyInfo={bodyInfo}
            pageCount={pageCount}
            page={params.page}
            tableStyle="admin"
            isLoading={isLoading}
            onChangePage={onChangePage}
          />
        </div>
      ) : null}
    </>
  )
}
