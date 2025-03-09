'use client'

import { FormWrapper } from 'ui'
import { type OtpViewParamsType } from '@/types/common'
import OtpView from './view'
import { useOtpViewModel } from './viewModel'

const Otp = ({
  endPoint,
  method,
  onSuccess,
  className,
  resendCode,
  isLoadingResend,
  defaultTimer,
  extraBody = {},
}: OtpViewParamsType): any => {
  const {
    validationSchema,
    initialValues,
    handleSubmit,
    isPending,
    isSuccess,
    isError,
  } = useOtpViewModel(endPoint, method, onSuccess, extraBody)

  return (
    <div className={className}>
      <FormWrapper
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <OtpView
          resendCode={resendCode}
          isLoadingResend={isLoadingResend}
          isPending={isPending}
          isSuccess={isSuccess}
          defaultTimer={defaultTimer}
          isError={isError}
        />
      </FormWrapper>
    </div>
  )
}

export default Otp
