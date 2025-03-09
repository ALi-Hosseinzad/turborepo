import type { OrdersInfoViewType } from '../imports'
import { NoData, OrdersIcon, OstiganTable, useTranslations } from '../imports'

export const OrdersInfoView = (props: OrdersInfoViewType): JSX.Element => {
  const { headInfoTable, data, isLoading } = props
  const t = useTranslations()

  return (
    <>
      {data?.length > 0 ? (
        <OstiganTable
          headInfo={headInfoTable}
          bodyInfo={data}
          tableStyle="admin"
          showDetailUrl="order"
          isLoading={isLoading}
        />
      ) : (
        <NoData
          icon={<OrdersIcon className="w-10 h-10" />}
          text={t('headerWithoutTable')}
        />
      )}
    </>
  )
}
