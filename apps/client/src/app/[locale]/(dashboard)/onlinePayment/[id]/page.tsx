import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import type { PagePropsType } from '@/types/nextIntl'
import { OnlinePaymentDetails } from '@/views/onlinePayment/onlinePaymentDetaile'

const OnlinePaymentDetailPage: React.FC<PagePropsType> = ({
  params: { locale, id },
}) => {
  unstable(locale)
  return <OnlinePaymentDetails serviceId={id} />
}
export default OnlinePaymentDetailPage
