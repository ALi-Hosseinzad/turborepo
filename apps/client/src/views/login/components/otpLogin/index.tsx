'use client'

import { OtpLoginView, useOtpLoginViewModel } from '../../imports'

const OtpLogin = (): JSX.Element => {
  const {
    onSuccess,
    resendCode,
    phone,
    curStep,
    isLegal,
    isLoadingResendCode,
  } = useOtpLoginViewModel()

  return (
    <OtpLoginView
      isLegal={isLegal}
      curStep={curStep}
      phone={phone}
      resendCode={resendCode}
      isLoadingResendCode={isLoadingResendCode}
      onSuccess={onSuccess}
    />
  )
}

export default OtpLogin
