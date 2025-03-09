import type { QrCodeFormModalType } from '../../imports'
import {
  OstiganModal,
  QrCodeFormModalView,
  useQrCodeFormModalViewModel,
} from '../../imports'

export const QrCodeFormModal = ({
  initialValues,
  onSubmit,
  handleClose,
  isLoadingGetData,
  isPendingPostData,
  open,
}: QrCodeFormModalType) => {
  const { validationSchema } = useQrCodeFormModalViewModel()
  return (
    <OstiganModal open={open} handleClose={handleClose}>
      <QrCodeFormModalView
        validationSchema={validationSchema}
        initialValues={initialValues}
        handleClose={handleClose}
        isLoadingGetData={isLoadingGetData}
        isPendingPostData={isPendingPostData}
        onSubmit={onSubmit}
      />
    </OstiganModal>
  )
}
