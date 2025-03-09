'use client'

import { TicketDetailView, useTicketDetailViewModel } from '../imports'

const TicketDetail = (): JSX.Element => {
  const { ticketData, refetchDetailTicket, isLoading, getBreadCrumbs } =
    useTicketDetailViewModel()
  const breadCrumbs = getBreadCrumbs()
  return (
    <TicketDetailView
      breadCrumbs={breadCrumbs}
      ticketData={ticketData}
      refetchDetailTicket={refetchDetailTicket}
      isLoading={isLoading}
    />
  )
}

export default TicketDetail
