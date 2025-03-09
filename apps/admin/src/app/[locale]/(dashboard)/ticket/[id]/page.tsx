import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import TicketDetail from 'views/ticket/ticketDetail'
import type { PagePropsType } from 'types/common'

const TicketCreatePage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <TicketDetail />
}

export default TicketCreatePage
