import {
  DisableQrCodeModal,
  EditIcon,
  EditNewQrCode,
  Image,
  RemoveIcon,
  ShareIcon,
  ShowQrCodeModal,
  UseTomanToRial,
  useTranslations,
} from '../../imports'
import { ShareModal } from '../shareModal'

export const QrCodeItemView = ({
  data,
  showModel,
  setShowModal,
  handleDisableQrCode,
  isPendingDisabledQrCode,
}) => {
  const { id, qr_code: qrCodeImage, title, amount, status } = data
  const t = useTranslations()

  return (
    <>
      <button
        type="button"
        className={`flex justify-between border border-trueGray-300 rounded-lg p-4 ${status == 'disable' ? 'bg-trueGray-200' : 'bg-white'} `}
        onClick={() => {
          status !== 'disable' &&
            setShowModal({ ...showModel, qrCodesShow: true })
        }}
      >
        <div className="flex gap-2">
          <Image src={qrCodeImage} width={65} height={65} alt="ostigan" />
          <div className="flex flex-col justify-between">
            <p
              className={`title-lg ${
                status == 'disable' ? 'text-trueGray-500' : 'text-darkTypo'
              }`}
            >
              {title}
            </p>
            <p
              className={
                status == 'disable' ? 'text-trueGray-500' : 'text-darkTypo'
              }
            >
              {t('price')}: {UseTomanToRial(amount)}
              {t('rial')}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ShareIcon
            color={
              status == 'disable'
                ? 'var(--trueGray-500)'
                : 'var(--blue-default)'
            }
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation()
              status !== 'disable' &&
                setShowModal({ ...showModel, share: true })
            }}
          />
          <EditIcon
            color={
              status == 'disable'
                ? 'var(--trueGray-500)'
                : 'var(--warning-default)'
            }
            className="w-8 h-8 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation()
              status !== 'disable' && setShowModal({ ...showModel, edit: true })
            }}
          />
          <RemoveIcon
            className="cursor-pointer w-7 h-7"
            onClick={(e) => {
              e.stopPropagation()
              setShowModal({ ...showModel, delete: true })
            }}
          />
        </div>
      </button>
      {showModel.delete ? (
        <DisableQrCodeModal
          open={showModel.delete}
          isPendingDisabledQrCode={isPendingDisabledQrCode}
          handleClose={() => {
            setShowModal({ ...showModel, delete: false, id })
          }}
          handleDisableQrCode={() => handleDisableQrCode({ id, status })}
        />
      ) : null}

      {showModel.edit ? (
        <EditNewQrCode
          id={id}
          open={showModel.edit}
          handleClose={() => {
            setShowModal({ ...showModel, edit: false, id })
          }}
        />
      ) : null}

      {showModel.share ? (
        <ShareModal
          href={qrCodeImage}
          open={showModel.share}
          handleClose={() => {
            setShowModal({ ...showModel, share: false, id })
          }}
        />
      ) : null}
      {showModel.qrCodesShow ? (
        <ShowQrCodeModal
          data={data}
          open={showModel.qrCodesShow}
          handleClose={() => {
            setShowModal({ ...showModel, qrCodesShow: false, id })
          }}
        />
      ) : null}
    </>
  )
}
