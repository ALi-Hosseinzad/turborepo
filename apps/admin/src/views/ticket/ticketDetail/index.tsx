'use client'

import { Loading, TicketDetailView, useTicketDetailViewModel } from '../imports'

const TicketDetail = (): JSX.Element => {
  const {
    ticketDetailData,
    initialValues,
    isLoadingGetTicket,
    lastUserTicketId,
    onSubmitSubject,
    isLoadingSubmitReply,
    onSubmitTicketReply,
    isLoadingSubmitSubject,
    validationSchema,
  } = useTicketDetailViewModel()

  return (
    <>
      <Loading
        isLoading={
          isLoadingGetTicket || isLoadingSubmitReply || isLoadingSubmitSubject
        }
      />
      {!isLoadingGetTicket && (
        <TicketDetailView
          ticketDetailData={ticketDetailData}
          initialValues={initialValues}
          lastUserTicketId={lastUserTicketId}
          validationSchema={validationSchema}
          onSubmitSubject={onSubmitSubject}
          onSubmitTicketReply={onSubmitTicketReply}
        />
      )}
    </>
  )
}

export default TicketDetail
