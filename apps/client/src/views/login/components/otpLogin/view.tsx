'use client'

import {
  handleLoginStep,
  handlePhone,
  OTP_URL,
  OtpComponent,
  useDispatch,
  useTranslations,
} from '../../imports'

const OtpLoginView = ({
  onSuccess,
  resendCode,
  phone,
  isLegal,
  curStep,
  isLoadingResendCode,
}): JSX.Element => {
  const dispatch = useDispatch()
  const t = useTranslations()

  return (
    <>
      <OtpComponent
        endPoint={OTP_URL}
        method="post"
        isLoadingResend={isLoadingResendCode}
        extraBody={{ phone }}
        resendCode={resendCode}
        onSuccess={onSuccess}
      />
      <button
        type="button"
        className="title-sm underline text-left cursor-pointer pt-3"
        onClick={() => {
          if (curStep === 'legalUserForgetPassOtp') {
            dispatch(handleLoginStep('legalUserForgetPassword'))
            if (isLegal) {
              dispatch(handlePhone(''))
            }
          } else if (curStep === 'legalUserSignUpOtp') {
            dispatch(handleLoginStep('legalUserSignUp'))
          } else {
            dispatch(handleLoginStep('initStep'))
          }
        }}
      >
        {isLegal ? t('changeEmail') : t('ChangeMobileNumber')}
      </button>
    </>
  )
}

export default OtpLoginView
