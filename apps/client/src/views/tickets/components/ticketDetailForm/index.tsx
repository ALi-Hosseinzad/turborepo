import {
  TicketDetailFormView,
  useTicketDetailFormViewModel,
} from '../../imports'

const TicketDetailForm = ({ lastTicketId, refetchDetailTicket }) => {
  const {
    initialValues,
    validationSchema,
    handleSubmit,
    isPendingAdd,
    isPendingClose,
    handleCloseTicket,
  } = useTicketDetailFormViewModel(lastTicketId, refetchDetailTicket)

  return (
    <TicketDetailFormView
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={handleSubmit}
      isPendingAdd={isPendingAdd}
      isPendingClose={isPendingClose}
      handleCloseTicket={handleCloseTicket}
    />
  )
}

export default TicketDetailForm
