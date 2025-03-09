/* eslint-disable -- Reason for disabling all ESLint rules in this file */
import { forwardRef } from 'react'
import QrReader from 'react-qr-reader'
import { showError } from '@/hooks/useToust'

const QrCodeReader = forwardRef(function (props: any, ref) {
  const { onScan } = props

  const handleError = (error: any) => {
    if (error) {
      showError(error)
    }
  }

  return (
    <QrReader
      className="hidden"
      legacyMode
      ref={ref}
      onError={handleError}
      onScan={onScan}
    />
  )
})

export default QrCodeReader
