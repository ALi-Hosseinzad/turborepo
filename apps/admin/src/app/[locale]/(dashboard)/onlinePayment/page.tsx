import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import OnlinePayment from 'views/onlinePayment'
import type { PagePropsType } from 'types/common'

const OnlinePaymentPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <OnlinePayment />
}

export default OnlinePaymentPage
