import WalletTransferBlockView from './view'
import { useWalletTransferBlockModel } from './viewModel'

const WalletTransferBlock = () => {
  const {
    initialValues,
    onSubmit,
    validationSchema,
    data,
    isLoadingGetData,
    resetPutOtp,
    isSuccessPost,
    isPendingPostTransfer,
    setPhone,
    handleScan,
    transferId,
    goToOtp,
    setGoToOtp,
    handleResendCode,
  } = useWalletTransferBlockModel()

  return (
    <WalletTransferBlockView
      initialValues={initialValues}
      validationSchema={validationSchema}
      data={data}
      handleResendCode={handleResendCode}
      setGoToOtp={setGoToOtp}
      isLoadingGetData={isLoadingGetData}
      isSuccessPost={isSuccessPost}
      isPendingPostTransfer={isPendingPostTransfer}
      setPhone={setPhone}
      transferId={transferId}
      goToOtp={goToOtp}
      handleScan={handleScan}
      resetPutOtp={resetPutOtp}
      onSubmit={onSubmit}
    />
  )
}

export default WalletTransferBlock
