import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { OstiganButton } from 'ui'
import { OTP_EXPIRE_TIME } from '@/constants/constants'
import CountDownTimer from '@/components/countDownTimer'
import { Spinner } from 'ui/components/loading/spinner'

const OtpCountdownTimer = ({
  handleResendOtp,
  isLoadingResend,
  defaultTimer,
}) => {
  const t = useTranslations()
  const [timer, setTimer] = useState(defaultTimer || OTP_EXPIRE_TIME)

  useEffect(() => {
    if (!isLoadingResend && timer === 0) {
      setTimer(defaultTimer || OTP_EXPIRE_TIME)
    }
  }, [isLoadingResend])

  return (
    <div className="flex gap-4 items-center">
      {timer === 0 ? (
        <OstiganButton
          variant="text"
          type="button"
          hoverBackgroundColor="transparent"
          activeBackgroundColor="transparent"
          activeColor="red"
          padding={0}
          fontSize="14px"
          disabled={isLoadingResend}
          handleClick={() => {
            handleResendOtp()
          }}
        >
          {t('resendCode')}
          {isLoadingResend ? <Spinner /> : null}
        </OstiganButton>
      ) : (
        <CountDownTimer timer={timer} setTimer={setTimer} />
      )}
    </div>
  )
}

export default OtpCountdownTimer
