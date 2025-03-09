import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import OnlinePaymentEdit from 'views/onlinePayment/onlinePaymentEdit'
import type { PagePropsType } from 'types/common'

const OnlinePaymentEditPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <OnlinePaymentEdit />
}

export default OnlinePaymentEditPage
