import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import type { PagePropsType } from '@/types/nextIntl'
import TicketAdd from '@/views/tickets/ticketAdd'

const TicketFormPage: React.FC<PagePropsType> = ({ params: { locale } }) => {
  unstable(locale)

  return <TicketAdd />
}

export default TicketFormPage
