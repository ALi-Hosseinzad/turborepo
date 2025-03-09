import {
  DASHBOARD,
  handleLoginedUser,
  setCookie,
  useAxiosMutation,
  useDispatch,
  USER_INFO_URL,
  useRouter,
  useTranslations,
  yup,
} from '../../imports'

export const useRealUserVerificationViewModel = () => {
  const { mutateAsync, isPending, isSuccess } = useAxiosMutation(
    USER_INFO_URL,
    'post',
  )
  const router = useRouter()
  const t = useTranslations()
  const dispatch = useDispatch()

  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
  }

  const validationSchema = yup.object({
    firstname: yup.string().required(t('required')),
    lastname: yup.string().required(t('required')),
    email: yup.string().required(t('required')),
  })

  const handleSubmit = (body: any) => {
    mutateAsync(body).then((response) => {
      setCookie('hasVerified', true)
      dispatch(handleLoginedUser(response?.data))
      router.push(DASHBOARD)
    })
  }

  return { initialValues, validationSchema, handleSubmit, isPending, isSuccess }
}
