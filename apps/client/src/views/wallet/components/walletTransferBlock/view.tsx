import {
  FormWrapper,
  OstiganButton,
  useTranslations,
  WalletTransferDescription,
} from '../../imports'
import WalletOtpBlock from '../walletOtpBlock/view'
import WalletTransferGetFormView from '../walletTransferGetForm/view'
import WalletTransferPostForm from '../walletTransferPostForm/view'
import WalletTransferShowData from '../walletTransferShowData'

const WalletTransferBlockView = ({
  initialValues,
  onSubmit,
  validationSchema,
  data,
  isLoadingGetData,
  isSuccessPost,
  isPendingPostTransfer,
  resetPutOtp,
  setPhone,
  handleScan,
  transferId,
  goToOtp,
  setGoToOtp,
  handleResendCode,
}) => {
  const t = useTranslations()

  return (
    <>
      {goToOtp ? (
        <WalletOtpBlock
          data={data}
          resetPutOtp={resetPutOtp}
          setPhone={setPhone}
          transferId={transferId}
          amount={data?.balance}
          isLoadingResend={isPendingPostTransfer}
          setGoToOtp={setGoToOtp}
          handleResendCode={handleResendCode}
        />
      ) : (
        <FormWrapper
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <WalletTransferDescription />
          <WalletTransferGetFormView handleScan={handleScan} />
          <div className={data ? 'visible h-[182px]' : 'invisible h-[182px]'}>
            <WalletTransferShowData data={data} />
            <WalletTransferPostForm />
          </div>
          <div className="mt-6">
            <OstiganButton
              className="h-10 whitespace-nowrap "
              variant="contained"
              fontSize="16px"
              fullWidth
              disabled={isLoadingGetData || isPendingPostTransfer}
              isLoading={isLoadingGetData || isPendingPostTransfer}
              type="submit"
            >
              {isSuccessPost ? t('confirm') : t('nextStep')}
            </OstiganButton>
          </div>
        </FormWrapper>
      )}
    </>
  )
}

export default WalletTransferBlockView
