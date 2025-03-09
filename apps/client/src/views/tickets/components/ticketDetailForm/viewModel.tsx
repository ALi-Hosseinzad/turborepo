import {
  TICKET_UPDATE_URL,
  TICKET_URL,
  useAxiosMutation,
  useParams,
  useTranslations,
  yup,
} from '../../imports'

export const useTicketDetailFormViewModel = (
  lastTicketId: number,
  refetchDetailTicket: any,
) => {
  const t = useTranslations()
  const { ticketId } = useParams()
  const { isPending: isPendingAdd, mutateAsync } = useAxiosMutation(
    TICKET_URL,
    'post',
  )
  const { isPending: isPendingClose, mutateAsync: mutateAsyncClose } =
    useAxiosMutation(`${TICKET_UPDATE_URL}/${ticketId as string}`, 'post')

  const validationSchema = yup.object({
    description: yup.string().required(t('required')),
  })

  const initialValues = {
    description: '',
  }

  const handleSubmit = (body: any, formikProps: any): void => {
    const value = {
      parent_id: lastTicketId,
      ...body,
    }
    const curBody = body?.attachment
      ? { ...value, attachment: body?.attachment }
      : value
    mutateAsync(curBody).then(() => {
      refetchDetailTicket()
      formikProps.resetForm()
    })
  }

  const handleCloseTicket = () => {
    const curBody = {
      status: 'closed',
    }
    mutateAsyncClose(curBody).then(() => {
      refetchDetailTicket()
    })
  }

  return {
    validationSchema,
    initialValues,
    handleSubmit,
    isPendingAdd,
    isPendingClose,
    handleCloseTicket,
  }
}
