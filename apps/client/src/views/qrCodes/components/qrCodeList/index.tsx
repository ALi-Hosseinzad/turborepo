import { QrCodeListView, useQrCodeItemViewModel } from '../../imports'

export const QrCodeList = () => {
  const { showModel, setShowModal } = useQrCodeItemViewModel()

  return <QrCodeListView showModel={showModel} setShowModal={setShowModal} />
}
