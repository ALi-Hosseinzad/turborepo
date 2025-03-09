import React from 'react'
import { DeleteModal, useTranslations } from '../../imports'

export const DisableQrCodeModal = ({
  open,
  handleClose,
  handleDisableQrCode,
  isPendingDisabledQrCode,
}) => {
  const t = useTranslations()

  return (
    <DeleteModal
      headerTitle={t('removeQrCode')}
      rejectTextButton={t('cancel')}
      acceptTextButton={t('yes')}
      styleTypeSuccessBtn="success"
      open={open}
      handleClose={handleClose}
      isLoading={isPendingDisabledQrCode}
      onSuccess={handleDisableQrCode}
    >
      <p className="text-center py-10">{t('wantToRemoveQrCode')}</p>
    </DeleteModal>
  )
}
