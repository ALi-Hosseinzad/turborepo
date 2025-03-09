'use client'

import {
  Breadcrumbs,
  TicketDetailCreate,
  TicketDetailHeader,
  TicketDetailList,
  TicketDetailSkeleton,
} from '../imports'

const TicketDetailView = ({
  ticketData,
  refetchDetailTicket,
  isLoading,
  breadCrumbs,
}: any): JSX.Element => {
  const ticketUser = ticketData?.arrayUser[0]
  const userTickets = ticketData?.arrayUser
  const adminTickets = ticketData?.arraySupporter
  const tickets = userTickets?.concat(adminTickets)
  const sortTickets = tickets?.sort((a: any, b: any) => (a.id > b.id ? 1 : -1))
  const lastTicketId = sortTickets?.[sortTickets?.length - 1].id

  if (isLoading) {
    return <TicketDetailSkeleton />
  }
  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <div className="flex flex-col gap-4 justify-between h-[80vh]">
        <TicketDetailHeader
          statusBg={ticketUser?.status_background_color}
          statusColor={ticketUser?.status_text_color}
          statusLabel={ticketUser?.status_label}
          department={ticketUser?.subject}
          title={ticketUser?.title}
        />
        <TicketDetailList sortTickets={sortTickets} />
        <TicketDetailCreate
          ticketStatus={ticketUser?.status}
          lastTicketId={lastTicketId}
          refetchDetailTicket={refetchDetailTicket}
        />
      </div>
    </>
  )
}

export default TicketDetailView
