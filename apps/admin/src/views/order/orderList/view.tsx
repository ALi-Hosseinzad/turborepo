import type { OrderListViewType } from '../import'
import { Loading, OstiganTable, useTranslations } from '../import'

const OrderListview = (props: OrderListViewType): JSX.Element => {
  const {
    orderData,
    headInfoTable,
    orderPagination,
    params,
    onChangePage,
    isLoading,
  } = props
  const t = useTranslations()
  return (
    <>
      {orderData?.length === 0 ? (
        <div className="flex justify-center items-center w-full h-[30vh] text-lg	font-semibold	 ">
          {t('dontHaveData')}
        </div>
      ) : (
        <>
          <Loading isLoading={isLoading} />
          <OstiganTable
            headInfo={headInfoTable}
            bodyInfo={orderData || []}
            tableLabel={t('orders')}
            pageCount={orderPagination?.total_pages}
            page={params.page}
            tableStyle="admin"
            showDetailUrl="order"
            isLoading={isLoading}
            onChangePage={onChangePage}
          />
        </>
      )}
    </>
  )
}

export default OrderListview
