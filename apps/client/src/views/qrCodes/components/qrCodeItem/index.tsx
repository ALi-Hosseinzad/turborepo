import { QrCodeItemView, useQrCodeItemViewModel } from '../../imports'

export const QrCodeItem = ({ data }) => {
  const {
    showModel,
    setShowModal,
    handleDisableQrCode,
    isPendingDisabledQrCode,
  } = useQrCodeItemViewModel()

  return (
    <QrCodeItemView
      data={data}
      showModel={showModel}
      setShowModal={setShowModal}
      handleDisableQrCode={handleDisableQrCode}
      isPendingDisabledQrCode={isPendingDisabledQrCode}
    />
  )
}
