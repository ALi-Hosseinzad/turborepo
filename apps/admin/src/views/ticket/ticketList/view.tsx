import { OstiganTable, useTranslations } from '../imports'
import type { UseListViewModelType } from '../imports'

const TicketListview = (props: UseListViewModelType): JSX.Element => {
  const {
    bodyInfo,
    headInfo,
    pageCount,
    onChangePage,
    isLoading,
    page,
    isFetching,
  } = props

  const t = useTranslations()
  return (
    <OstiganTable
      headInfo={headInfo}
      bodyInfo={bodyInfo || []}
      tableLabel={t('ticket')}
      pageCount={pageCount}
      page={page}
      tableStyle="admin"
      showDetailUrl="ticket"
      isLoading={isLoading}
      isFetching={isFetching}
      onChangePage={onChangePage}
    />
  )
}

export default TicketListview
