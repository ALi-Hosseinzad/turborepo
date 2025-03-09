import {
  LegalUserForgetPassword,
  LegalUserSignUp,
  Otp,
  RealUserVerification,
  type RootState,
  useSelector,
  useTranslations,
} from './imports'
import LegalUserChangePassword from './legalUser/legalUserChangePassword'

export const useAuthViewModel = (): any => {
  const emailRef = 'legalUserForgetPassword'
  const t = useTranslations()
  const { curStep } = useSelector((state: RootState) => state.auth)

  const ROUTE_STEP_MAPPING = {
    realUserOtp: Otp,
    realUserVerification: RealUserVerification,
    legalUserChangePassword: LegalUserChangePassword,
    legalUserForgetPassword: LegalUserForgetPassword,
    legalUserSignUp: LegalUserSignUp,
    legalUserForgetPassOtp: Otp,
    legalUserSignUpOtp: Otp,
    legalUserOtp: Otp,
  }

  const getAuthTitle = (): string => {
    const titles = {
      initStep: t('loginOstigan'),
      legalUserSignUpOtp: `${t('signUp')} (${t('legalUser')})`,
      realUserOtp: t('loginOstigan'),
      legalUserOtp: `${t('loginOstigan')} (${t('legalUser')})`,
      legalUserForgetPassOtp: `${t('forgetPassword')} (${t('legalUser')})`,
      realUserVerification: `${t('signUpOstigan')} (${t('realUser')})`,
      legalUserSignUp: `${t('signUpOstigan')} (${t('legalUser')})`,
      emailVerifyOtp:
        emailRef === 'legalUserForgetPassword'
          ? t('forgetPassword')
          : `${t('signUpOstigan')} (${t('legalUser')})`,
      legalUserChangePassword: t('forgetPassword'),
      legalUserForgetPassword: t('forgetPassword'),
    }
    return titles[curStep]
  }

  const CurrentAuthComponent = ROUTE_STEP_MAPPING[curStep] || null

  return {
    ROUTE_STEP_MAPPING,
    CurrentAuthComponent,
    getAuthTitle,
  }
}
