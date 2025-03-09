import {
  CHANGE_PASSWORD_URL,
  handleLoginStep,
  PASSWORD_REGEX,
  type RootState,
  useAxiosMutation,
  useDispatch,
  useSelector,
  useTranslations,
  yup,
} from '../../imports'

export const useLegalUserChangePasswordViewModel = () => {
  const t = useTranslations()
  const dispatch = useDispatch()
  const { phone: email } = useSelector((state: RootState) => state.auth)

  const { mutateAsync, isPending } = useAxiosMutation(
    CHANGE_PASSWORD_URL,
    'post',
  )

  const initialValues = {
    password: '',
    password_confirmation: '',
  }

  const validationSchema = yup.object({
    password: yup
      .string()
      .matches(PASSWORD_REGEX, t('passwordError'))
      .required(t('required')),
    password_confirmation: yup
      .string()
      .required(t('required'))
      .oneOf([yup.ref('password')], t('matchPassError')),
  })

  const handleSubmit = (body: any) => {
    mutateAsync({ ...body, email }).then(() => {
      dispatch(handleLoginStep('initStep'))
    })
  }

  return { validationSchema, initialValues, handleSubmit, isPending }
}
