import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import OnlinePaymentCreate from 'views/onlinePayment/onlinePaymentCreate'
import type { PagePropsType } from 'types/common'

const OnlinePaymentCreatePage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <OnlinePaymentCreate />
}

export default OnlinePaymentCreatePage
