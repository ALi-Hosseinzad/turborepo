import { useRef } from 'react'
import { FormikTextField, OstiganButton } from 'ui'
import { useTranslations } from '../../imports'
import QrCodeReader from '../qrCodeReader'
import { QrIcon } from 'ui/components/icons'

const WalletTransferGetFormView = ({ handleScan }) => {
  const t = useTranslations()
  const ref = useRef()

  const openDialog = () => {
    if (ref.current && 'openImageDialog' in ref.current) {
      ;(ref.current as { openImageDialog: () => void }).openImageDialog()
    }
  }

  return (
    <div className="grid grid-cols-7 mt-6 grid-flow-row  gap-4 items-end">
      <FormikTextField
        name="name"
        classnametitle="!text-base !font-medium"
        title={t('destinationWallet')}
        placeholder={t('walletOrPhoneOrId')}
        sizeInput="small"
        classNameContainer="col-span-7 sm:col-span-5"
      />
      <OstiganButton
        className="col-span-7 sm:col-span-2 h-10 whitespace-nowrap"
        type="button"
        startIcon={<QrIcon />}
        variant="outlined"
        fontSize="16px"
        handleClick={openDialog}
      >
        QR Code
      </OstiganButton>
      <QrCodeReader
        ref={ref}
        onScan={(e: MouseEvent) => {
          handleScan(e)
        }}
      />
    </div>
  )
}

export default WalletTransferGetFormView
