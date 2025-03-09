import {
  axiosGet,
  DASHBOARD,
  ENUM_URL,
  handleEnum,
  handleLoginedUser,
  handleLoginStep,
  handlePhone,
  LEGAL_LOGIN_URL,
  ME_URL,
  setCookie,
  useAxiosMutation,
  useDispatch,
  useRouter,
  useTranslations,
  yup,
} from '../../imports'

export const useLegalUserTabViewModel = () => {
  const t = useTranslations()
  const { mutateAsync, isPending } = useAxiosMutation(LEGAL_LOGIN_URL, 'post')
  const router = useRouter()
  const dispatch = useDispatch()
  const initialValues = {
    email: '',
    password: '',
  }

  const validationSchema = yup.object({
    email: yup.string().email(t('emailError')).required(t('required')),
    password: yup.string().required(t('required')),
  })

  const handleSubmit = (body: any) => {
    dispatch(handlePhone(body.email))

    mutateAsync(body).then((res: any) => {
      if (res?.data?.email_verified_at) {
        res?.data?.access_token && setCookie('token', res?.data?.access_token)
        setCookie('hasVerified', true)
        void axiosGet({ url: ME_URL }).then((res: any) => {
          dispatch(handleLoginedUser(res))
          router.push(DASHBOARD)
        })
        void axiosGet({ url: ENUM_URL }).then((res: any) => {
          dispatch(handleEnum(res))
        })
      } else {
        dispatch(handleLoginStep('legalUserOtp'))
      }
    })
  }

  return { initialValues, validationSchema, handleSubmit, isPending }
}
