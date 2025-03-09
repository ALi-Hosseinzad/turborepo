import type { QrCodeItemViewModelType } from '../../imports'
import {
  QR_CODE_LIST_QUERY,
  useAxiosMutation,
  useQueryClient,
  useState,
  WALLET_QR_CODE_URL,
} from '../../imports'

export const useQrCodeItemViewModel = (): QrCodeItemViewModelType => {
  const [showModel, setShowModal] = useState({
    share: false,
    edit: false,
    delete: false,
    add: false,
    qrCodesShow: false,
  })

  const queryClient = useQueryClient()
  const { mutateAsync: mutateDisabledQrCode, isPending } = useAxiosMutation(
    WALLET_QR_CODE_URL,
    'put',
  )

  const handleDisableQrCode = ({ id, status }) => {
    const body = { status: status == 'disable' ? 'active' : 'disable' }
    mutateDisabledQrCode({ ...body, query: id })
      .then(() => {
        setShowModal({ ...showModel, delete: false })
      })
      .then(() =>
        queryClient.invalidateQueries({
          queryKey: [QR_CODE_LIST_QUERY],
        }),
      )
  }

  return {
    showModel,
    setShowModal,
    handleDisableQrCode,
    isPendingDisabledQrCode: isPending,
  }
}
