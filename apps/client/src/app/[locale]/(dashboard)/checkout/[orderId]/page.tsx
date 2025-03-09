import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import type { PagePropsType } from '@/types/nextIntl'
import Checkout from '@/views/checkout/index'

const CheckoutPage: React.FC<PagePropsType> = ({
  params,
}): React.ReactElement => {
  const { locale, orderId } = params
  unstable(locale)

  return <Checkout orderId={orderId} />
}

export default CheckoutPage
