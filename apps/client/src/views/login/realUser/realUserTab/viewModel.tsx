import {
  handleLoginStep,
  handlePhone,
  LOGIN_URL,
  PHONE_REGEX,
  type PhoneType,
  useAxiosMutation,
  useDispatch,
  useTranslations,
  yup,
} from '../../imports'

export const useRealUserTabViewModel = () => {
  const dispatch = useDispatch()
  const t = useTranslations()
  const { mutateAsync, isPending, isSuccess } = useAxiosMutation(
    LOGIN_URL,
    'post',
  )

  const handleSubmitPhone = async (values: PhoneType): Promise<void> => {
    await mutateAsync(values).then(() => {
      dispatch(handleLoginStep('realUserOtp'))
      dispatch(handlePhone(values.phone))
    })
  }

  const validationSchema = yup.object({
    phone: yup
      .string()
      .matches(PHONE_REGEX, t('phoneRegex'))
      .required(t('emptyError')),
  })

  const handleChangePhone = (e, setFieldValue) => {
    const withoutLeadingzero = e.target.value.replace(/(^0)|([a-zA-Z])/, '')
    setFieldValue('phone', withoutLeadingzero)
  }

  return {
    handleSubmitPhone,
    isSuccess,
    isPending,
    validationSchema,
    handleChangePhone,
  }
}
