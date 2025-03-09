'use client'

import {
  TicketDetailHead,
  TicketDetailList,
  type TicketDetailViewPropsType,
  TicketReplyForm,
  TicketSubject,
} from '../imports'

const tickeDetailView = (props: TicketDetailViewPropsType): JSX.Element => {
  const {
    ticketDetailData,
    lastUserTicketId,
    onSubmitSubject,
    initialValues,
    validationSchema,
    onSubmitTicketReply,
  } = props

  return (
    <>
      <div className="bg-white rounded-lg pt-8 px-8">
        <TicketDetailHead ticketDetailData={ticketDetailData} />
        <TicketSubject
          subject={ticketDetailData?.subject}
          onSubmitSubject={onSubmitSubject}
        />
      </div>
      <TicketDetailList ticketDetailData={ticketDetailData} />
      <TicketReplyForm
        lastUserTicketId={lastUserTicketId}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmitTicketReply={onSubmitTicketReply}
      />
    </>
  )
}

export default tickeDetailView
