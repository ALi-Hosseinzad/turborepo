import React from 'react'
import { QrCodeFormModal } from '../components/QrCodeFormModal'
import { useAddNewQrCodeViewModel } from './viewModel'

export const AddNewQrCode = ({ open, handleClose }) => {
  const { initialValues, handleAddNewQrCode, isPendingPostData } =
    useAddNewQrCodeViewModel(handleClose)

  return (
    <QrCodeFormModal
      initialValues={initialValues}
      open={open}
      handleClose={handleClose}
      isPendingPostData={isPendingPostData}
      onSubmit={handleAddNewQrCode}
    />
  )
}
