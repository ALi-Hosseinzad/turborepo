import useWindowDimensions from '@/hooks/useWindowDimension'
import { ListCards } from '@/components/listCards/index'
import type { OrderListViewPropsType } from './import'
import { List, NotFoundSearchIcon, ORDER_URL, useTranslations } from './import'

const OrderListView: React.FC<OrderListViewPropsType> = ({
  headInfo,
  bodyInfo,
}) => {
  const t = useTranslations()
  const { width } = useWindowDimensions()

  return (
    <>
      {width > 768 ? (
        <List
          bodyInfo={bodyInfo}
          headInfo={headInfo}
          url={ORDER_URL}
          queryKey="order-list"
          tableTitleContent={t('orderTableHeader')}
          titleClass="text-normal-base sm:text-medium-base lg:title-base text-right pt-4 sm:pt-0"
          titleNotFound={t('noOrder')}
          iconNotFound={<NotFoundSearchIcon className="w-14 h-14" />}
        />
      ) : (
        <ListCards
          bodyInfo={bodyInfo}
          headInfo={headInfo}
          url={ORDER_URL}
          queryKey="order-list"
          titleContent={t('orderTableHeader')}
          titleClass="title-sm text-right pt-4 sm:pt-0"
          titleNotFound={t('noOrder')}
          iconNotFound={<NotFoundSearchIcon className="w-14 h-14" />}
        />
      )}
    </>
  )
}

export default OrderListView
