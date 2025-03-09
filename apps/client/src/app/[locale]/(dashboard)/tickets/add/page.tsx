import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import type { PagePropsType } from '@/types/nextIntl'
import TicketSubjects from '@/views/tickets/ticketSubjects'

const AddTicketPage: React.FC<PagePropsType> = ({ params: { locale } }) => {
  unstable(locale)

  return <TicketSubjects />
}

export default AddTicketPage
