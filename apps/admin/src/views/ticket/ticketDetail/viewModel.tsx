'use client'

import { showError, showSuccess } from 'hooks/useToust'
import {
  axiosGet,
  axiosPost,
  handleLocalStorage,
  TICKET_URL,
  useMutation,
  useParams,
  useQuery,
  type UseTicketDetailViewModelType,
  useTranslations,
  yup,
} from '../imports'

export const useTicketDetailViewModel = (): UseTicketDetailViewModelType => {
  const t = useTranslations()
  const { id } = useParams()

  const loginedUser = handleLocalStorage({
    type: 'getLocalStorage',
    key: 'user',
  })
  const parsedUser = window !== undefined && loginedUser
  const loginedUserId = parsedUser?.id

  const {
    data: ticketDetailData,
    refetch: refetchTicket,
    isLoading: isLoadingGetTicket,
  } = useQuery({
    queryKey: ['ticket', id],
    enabled: id !== undefined,
    queryFn: () => axiosGet({ url: `${TICKET_URL}/${id as string}` }),
  })

  const validationSchema = yup.object({
    parent_id: yup.number().required(t('emptyError')),
    description: yup.string().required(t('emptyError')),
  })

  const handleLastUserTicketId = (data): any => {
    let lastUserTicketId
    const returnFall = (ticketDetailData): any => {
      if (ticketDetailData) {
        if (loginedUserId !== ticketDetailData?.user_id_from_info?.id) {
          lastUserTicketId = ticketDetailData?.id
        }
        if (ticketDetailData?.children) {
          for (const item of ticketDetailData.children) {
            if (loginedUserId !== item?.user_id_from_info?.id) {
              lastUserTicketId = item?.id
            }
            returnFall(item)
          }
        }
      }
    }
    returnFall(data)
    return lastUserTicketId
  }

  const { mutate: onSubmitSubject, isPending: isLoadingSubmitSubject } =
    useMutation({
      mutationFn: (body: any) => {
        return axiosPost({
          url: `${TICKET_URL}/${id as string}`,
          body: { subject_id: body.id },
        })
      },
      onSuccess: () => {
        showSuccess(t('editedSuccessfully'))
      },
    })

  const initialValues = {
    parent_id: handleLastUserTicketId(ticketDetailData),
    description: '',
  }

  const { mutateAsync, isPending: isLoadingSubmitReply } = useMutation({
    mutationFn: (values: any) => {
      return axiosPost({
        url: TICKET_URL,
        body: values,
      })
    },
  })

  const onSubmitTicketReply = async (
    values: object,
    formikProps: any,
  ): Promise<any> => {
    await mutateAsync(values)
      .then(async () => {
        await refetchTicket()
        formikProps.resetForm()
      })
      .catch((error) => {
        showError(error.message)
        formikProps.resetForm()
      })
  }

  return {
    lastUserTicketId: handleLastUserTicketId(ticketDetailData),
    ticketDetailData,
    onSubmitSubject,
    isLoadingGetTicket,
    initialValues,
    validationSchema,
    onSubmitTicketReply,
    isLoadingSubmitReply,
    isLoadingSubmitSubject,
  }
}
