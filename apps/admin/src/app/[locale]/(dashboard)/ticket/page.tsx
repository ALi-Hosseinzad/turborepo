import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import Tickets from 'views/ticket'
import type { PagePropsType } from 'types/common'

const TicketPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <Tickets />
}

export default TicketPage
