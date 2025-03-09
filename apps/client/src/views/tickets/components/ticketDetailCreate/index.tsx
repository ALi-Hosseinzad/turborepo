import { ScurityIcon, TicketDetailForm, useTranslations } from '../../imports'

const TicketDetailCreate = ({
  ticketStatus,
  lastTicketId,
  refetchDetailTicket,
}) => {
  const t = useTranslations()

  return (
    <>
      {ticketStatus !== 'closed' ? (
        <TicketDetailForm
          lastTicketId={lastTicketId}
          refetchDetailTicket={refetchDetailTicket}
        />
      ) : (
        <div className="flex items-center gap-2 bg-white rounded-lg shadow-md p-6">
          <ScurityIcon className="w-6 h-6" />
          <p className="title-base text-error-default">{t('closedTicket')}</p>
        </div>
      )}
    </>
  )
}

export default TicketDetailCreate
