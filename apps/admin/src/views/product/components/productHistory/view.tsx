import { Header2, OstiganTable, useTranslations } from '../../imports'

export const ProductHistoryView = ({
  bodyInfo,
  headInfo,
  params,
  pageCount,
  isLoading,
  onChangePage,
}): JSX.Element => {
  const t = useTranslations()
  return (
    <div>
      <Header2 title={t('tokensHistory')} />
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
  )
}
