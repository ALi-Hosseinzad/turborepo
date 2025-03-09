import React from 'react'
import { QrCodeFormModal } from '../components/QrCodeFormModal'
import { useEditNewQrCodeViewModel } from './viewModel'

export const EditNewQrCode = ({ id, open, handleClose }) => {
  const {
    initialValues,
    handleEditQrCode,
    isLoadingGetData,
    isPendingPostData,
  } = useEditNewQrCodeViewModel(id, open, handleClose)

  return (
    <QrCodeFormModal
      initialValues={initialValues}
      open={open}
      handleClose={handleClose}
      isLoadingGetData={isLoadingGetData}
      isPendingPostData={isPendingPostData}
      onSubmit={handleEditQrCode}
    />
  )
}
