import React from 'react'
import type { ModalHeaderType } from '../../types/modal'
import { CloseIcon } from '../icons/index'

export const ModalHeader: React.FC<ModalHeaderType> = ({
  handleClose,
  headerTitle,
}) => {
  return (
    <div className="flex items-center rounded-t-lg bg-trueGray-200 p-4">
      <CloseIcon className="cursor-pointer" onClick={handleClose} />
      <span className="mx-auto text-xl font-semibold">{headerTitle}</span>
    </div>
  )
}
