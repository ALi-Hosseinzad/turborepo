import React from 'react'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import type { PagePropsType } from '@/types/nextIntl'
import Tickets from '@/views/tickets'

const TicketPage: React.FC<PagePropsType> = ({ params: { locale } }) => {
  unstable(locale)
  return <Tickets />
}

export default TicketPage
