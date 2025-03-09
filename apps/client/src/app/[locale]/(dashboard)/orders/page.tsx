import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import type { PagePropsType } from '@/types/nextIntl'
import Order from '@/views/order'

const OrderPage: React.FC<PagePropsType> = ({ params: { locale } }) => {
  unstable(locale)

  return <Order />
}

export default OrderPage
