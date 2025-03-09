import {
  TICKET_URL,
  TICKETS,
  useAxiosMutation,
  useParams,
  useRouter,
  useTranslations,
  yup,
} from '../../imports'

export const useTicketFormViewModel = () => {
  const t = useTranslations()
  const { mutateAsync, isPending, isSuccess } = useAxiosMutation(
    TICKET_URL,
    'post',
  )
  const { subjectId } = useParams()
  const router = useRouter()

  const initialValues = {
    title: '',
    importanceLevel: '',
    message: '',
    attachment: '',
    subjectId,
  }

  const validationSchema = yup.object({
    title: yup
      .string()
      .matches(/^[\u0600-\u06FF\s]+$/, t('languageError'))
      .required(t('emptyError')),
    message: yup
      .string()
      .matches(/^[\u0600-\u06FF\s]+$/, t('languageError'))
      .required(t('emptyError')),
    importanceLevel: yup.object().required(t('emptyError')),
  })

  const handleSubmit = (values: any) => {
    const formData = {
      title: values?.title,
      description: values?.message,
      priority: values?.importanceLevel?.value,
      subject_id: values?.subjectId,
    }

    const body =
      values.attachment != ''
        ? { ...formData, attachment: values?.attachment }
        : formData
    mutateAsync(body).then((data) => {
      router.push(`${TICKETS}/${data.data.id}` as any)
    })
  }

  const priorityList = [
    { label: 'کم', value: 'low' },
    { label: 'متوسط', value: 'middle' },
    { label: 'زیاد', value: 'high' },
    { label: 'بحرانی', value: 'emergency' },
  ]

  return {
    initialValues,
    validationSchema,
    handleSubmit,
    isPending,
    isSuccess,
    priorityList,
  }
}
