import type { SetStateAction } from 'react'

export interface QrCodeFormModalType {
  initialValues: Record<string, any>
  onSubmit: (values: any) => void
  handleClose: () => void
  isLoadingGetData?: boolean
  isPendingPostData?: boolean
  open: boolean
}

interface Href {
  href: string
}
export interface ModalDataType {
  title: string
  icon: JSX.Element
  type: string
}
type ShareHandlerType = Pick<ModalDataType, 'type'> & Href
export interface ShareModalViewModelType {
  modalData: ModalDataType[]
  shareHandler: ({ type, href }: ShareHandlerType) => void
}

export type ShareModalViewType = Pick<
  QrCodeFormModalType,
  'open' | 'handleClose'
> &
  ShareModalViewModelType &
  Href

export interface QrCodeItemViewModelType {
  setShowModal: Dispatch<SetStateAction<boolean>>
  isPendingDisabledQrCode: boolean
  showModel: {
    share: boolean
    edit: boolean
    delete: boolean
    add: boolean
    qrCodesShow: boolean
  }
  handleDisableQrCode: ({
    id,
    status,
  }: {
    id: string | number
    status: 'active' | 'disable'
  }) => void
}
