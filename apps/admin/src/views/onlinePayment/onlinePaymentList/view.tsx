import { ADMIN } from 'constants/routes'
import {
  type ListViewType,
  OstiganTable,
  SERVICE_URL,
  useTranslations,
} from '../imports'

const OnlinePaymentListView = (props: ListViewType): JSX.Element => {
  const {
    page,
    headInfo,
    bodyInfo,
    pageCount,
    isLoading,
    isFetching,
    onChangePage,
    onErrorDelete,
    afterDeleteHandler,
  } = props
  const t = useTranslations()

  return (
    <OstiganTable
      page={page}
      tableStyle={ADMIN}
      bodyInfo={bodyInfo}
      headInfo={headInfo}
      isLoading={isLoading}
      pageCount={pageCount}
      isFetching={isFetching}
      urlDeleteRequest={`${ADMIN}${SERVICE_URL}`}
      addBtnText={t('addOnlinePayment')}
      tableLabel={t('onlinePayment')}
      editNavigationLink="onlinePayment"
      addNavigationLink="onlinePayment/add"
      afterDeleteHandler={afterDeleteHandler}
      onChangePage={onChangePage}
      onErrorDelete={onErrorDelete}
    />
  )
}

export default OnlinePaymentListView
