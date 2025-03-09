'use client'

import { useEffect, useRef } from 'react'
import { useFormikContext } from 'formik'
import { useTranslations } from 'next-intl'
import { isEmptyObject, OstiganButton } from 'ui'
import OtpCountdownTimer from './components/counterTime'
import OtpInput from './components/otpInput'

const OtpView = ({
  resendCode,
  isLoadingResend,
  isPending,
  isSuccess,
  defaultTimer,
  isError,
}: any): any => {
  const formikProps = useFormikContext()
  const t = useTranslations()
  const inputRefs = useRef<HTMLInputElement[]>([])

  useEffect(() => {
    if (!isEmptyObject(formikProps.touched) && formikProps.isValid) {
      formikProps.submitForm()
    }
  }, [formikProps.isValid])

  useEffect(() => {
    inputRefs.current[0].focus()
  }, [isError])

  return (
    <>
      <div className="flex justify-between items-center pb-5">
        <p className="title-sm items-center">{t('confirmOtpText')}</p>
        <OtpCountdownTimer
          isLoadingResend={isLoadingResend}
          defaultTimer={defaultTimer}
          handleResendOtp={() => {
            formikProps.resetForm()
            resendCode()
            inputRefs.current[0].focus()
          }}
        />
      </div>
      <OtpInput disabled={isPending || isSuccess} inputRefs={inputRefs} />
      <OstiganButton
        disabled={isPending || isSuccess}
        className="!mt-6 w-full"
        variant="contained"
        type="submit"
        isLoading={isPending || isSuccess}
      >
        {t('confirmCode')}
      </OstiganButton>
    </>
  )
}

export default OtpView
