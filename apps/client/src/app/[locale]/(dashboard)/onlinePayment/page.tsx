import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import type { PagePropsType } from '@/types/nextIntl'
import { OnlinePayment } from '@/views/onlinePayment'

const OnlinePaymentPage: React.FC<PagePropsType> = ({ params: { locale } }) => {
  unstable(locale)
  return <OnlinePayment />
}
export default OnlinePaymentPage
