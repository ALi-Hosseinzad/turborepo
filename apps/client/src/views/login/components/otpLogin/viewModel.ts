import { SEND_EMAIL_NOTIFICATION_URL } from '@/constants/endPoints'
import {
  axiosGet,
  DASHBOARD,
  ENUM_URL,
  handleEnum,
  handleLoginedUser,
  handleLoginStep,
  ME_URL,
  type RootState,
  setCookie,
  useAxiosQuery,
  useDispatch,
  useRealUserTabViewModel,
  useRouter,
  useSelector,
  useState,
} from '../../imports'

export const useOtpLoginViewModel = () => {
  const { handleSubmitPhone, isPending } = useRealUserTabViewModel()
  const dispatch = useDispatch()
  const router = useRouter()
  const [sendEmailNotification, setSendEmailNotification] = useState(false)
  const { phone, curStep } = useSelector((state: RootState) => state.auth)
  const isLegal = curStep.includes('legal')
  const { refetch, isFetching: isFetchingResendCode } = useAxiosQuery({
    url: `${SEND_EMAIL_NOTIFICATION_URL}?email=${phone}`,
    queryKey: ['send-email-notification'],
    enabled: sendEmailNotification,
  })

  const onSuccess = (response: any) => {
    switch (curStep) {
      case 'legalUserSignUpOtp':
        dispatch(handleLoginStep('initStep'))
        break
      case 'legalUserForgetPassOtp':
        dispatch(handleLoginStep('legalUserChangePassword'))
        break
      case 'legalUserOtp':
        setCookie('token', response?.data?.access_token)
        void axiosGet({ url: ME_URL }).then((res: any) => {
          dispatch(handleLoginedUser(res))
        })
        void axiosGet({ url: ENUM_URL }).then((res: any) => {
          dispatch(handleEnum(res))
          router.push(DASHBOARD)
        })
        break
      default:
        setCookie('token', response?.data?.access_token)
        setCookie('hasVerified', response?.data?.has_verified)

        if (response?.data?.has_verified) {
          void axiosGet({ url: ME_URL }).then((res: any) => {
            dispatch(handleLoginedUser(res))
          })
          void axiosGet({ url: ENUM_URL }).then((res: any) => {
            dispatch(handleEnum(res))
            router.push(DASHBOARD)
          })
        } else {
          dispatch(handleLoginStep('realUserVerification'))
          void axiosGet({ url: ENUM_URL }).then((res: any) => {
            dispatch(handleEnum(res))
          })
        }
        break
    }
  }

  const resendCode = async () => {
    if (isLegal) {
      if (sendEmailNotification) {
        refetch()
      } else {
        setSendEmailNotification(true)
      }
    } else {
      await handleSubmitPhone({ phone })
    }
  }

  return {
    isLegal,
    onSuccess,
    phone,
    curStep,
    resendCode,
    isLoadingResendCode: isPending || isFetchingResendCode,
  }
}
