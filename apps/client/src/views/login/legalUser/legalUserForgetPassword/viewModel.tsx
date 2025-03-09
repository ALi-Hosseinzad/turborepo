import {
  FORGET_PASSWORD_URL,
  handleLoginStep,
  handlePhone,
  type RootState,
  useAxiosQuery,
  useDispatch,
  useEffect,
  type UseForgetPasswordViewModelType,
  useSelector,
  useTranslations,
  yup,
} from '../../imports'

export const useForgetPasswordViewModel =
  (): UseForgetPasswordViewModelType => {
    const t = useTranslations()
    const dispatch = useDispatch()
    const { phone: email } = useSelector((state: RootState) => state.auth)

    const { data, isSuccess, isFetching, isFetched, refetch } = useAxiosQuery({
      url: `${FORGET_PASSWORD_URL}?email=${email}`,
      queryKey: ['forget-password'],
      enabled: email !== '',
    })

    const initialValues = {
      email: '',
    }

    const validationSchema = yup.object({
      email: yup.string().email(t('emailError')).required(t('required')),
    })

    const handleSubmit = (body: any): void => {
      if (email) {
        refetch()
      } else {
        dispatch(handlePhone(body.email))
      }
    }

    useEffect(() => {
      if (!isFetching && isFetched && email !== '' && isSuccess) {
        dispatch(handleLoginStep('legalUserForgetPassOtp'))
        dispatch(handlePhone(email))
      }
    }, [isFetching])

    return { validationSchema, initialValues, handleSubmit, isFetching, data }
  }
