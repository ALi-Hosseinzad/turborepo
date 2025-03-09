import {
  ArrowToSideLeftIcon,
  OtpComponent,
  showSuccess,
  useQueryClient,
  useTranslations,
  WALLET_TRANSFER_URL,
  WalletTransferShowData,
} from '../../imports'

const WalletOtpBlock = ({
  data,
  resetPutOtp,
  setPhone,
  transferId,
  amount,
  isLoadingResend,
  handleResendCode,
  setGoToOtp,
}) => {
  const t = useTranslations()
  const queryClient = useQueryClient()

  const onClick = () => {
    resetPutOtp()
    queryClient.removeQueries({ queryKey: ['wallet'] })
    setPhone('')
    setGoToOtp(false)
  }

  return (
    <>
      <div className="flex justify-between cursor-pointer">
        <span>{t('confirmCode')}</span>
        <ArrowToSideLeftIcon color="black" onClick={onClick} />
      </div>
      <WalletTransferShowData data={data} amount={amount} />
      <OtpComponent
        extraBody={{}}
        endPoint={`${WALLET_TRANSFER_URL}/${transferId}`}
        method="put"
        isLoadingResend={isLoadingResend}
        className="mt-5"
        resendCode={handleResendCode}
        onSuccess={() => showSuccess(t('withdrawSuccessfully'))}
      />
    </>
  )
}

export default WalletOtpBlock
