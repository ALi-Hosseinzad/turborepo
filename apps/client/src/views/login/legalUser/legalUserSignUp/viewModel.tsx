import {
  handleLoginStep,
  handlePhone,
  JUST_PERSIAN_REGEX,
  LEGAL_REGISTER_URL,
  useAxiosMutation,
  useDispatch,
  useTranslations,
  yup,
} from '../../imports'

export const useLegalUserSignUpViewModel = () => {
  const t = useTranslations()
  const { mutateAsync, isPending } = useAxiosMutation(
    LEGAL_REGISTER_URL,
    'post',
  )
  const dispatch = useDispatch()

  const initialValues = {
    company_name: '',
    email: '',
    password: '',
    password_confirmation: '',
  }

  const validationSchema = yup.object({
    company_name: yup
      .string()
      .required(t('required'))
      .matches(JUST_PERSIAN_REGEX, t('languageError')),
    email: yup.string().email(t('emailError')).required(t('required')),
    password: yup.string().required(t('required')),
    password_confirmation: yup
      .string()
      .required(t('required'))
      .oneOf([yup.ref('password')], t('matchPassError')),
  })

  const handleSubmit = (body: any) => {
    dispatch(handlePhone(body.email))
    mutateAsync(body).then(() => {
      dispatch(handleLoginStep('legalUserSignUpOtp'))
    })
  }

  return { validationSchema, initialValues, handleSubmit, isPending }
}
