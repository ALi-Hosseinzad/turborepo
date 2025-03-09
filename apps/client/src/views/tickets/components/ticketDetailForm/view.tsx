import {
  DesktopTicketDetailFormView,
  FormWrapper,
  MobileTicketDetailFormView,
  useWindowDimensions,
} from '../../imports'

const TicketDetailFormView = ({
  initialValues,
  validationSchema,
  handleSubmit,
  isPendingAdd,
  isPendingClose,
  handleCloseTicket,
}) => {
  const { width } = useWindowDimensions()

  return (
    <FormWrapper
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <div className="bottom-0">
        {width > 425 ? (
          <DesktopTicketDetailFormView
            handleCloseTicket={handleCloseTicket}
            isPendingClose={isPendingClose}
            isPendingAdd={isPendingAdd}
          />
        ) : (
          <MobileTicketDetailFormView
            isPendingClose={isPendingClose}
            handleCloseTicket={handleCloseTicket}
            isPendingAdd={isPendingAdd}
          />
        )}
      </div>
    </FormWrapper>
  )
}

export default TicketDetailFormView
