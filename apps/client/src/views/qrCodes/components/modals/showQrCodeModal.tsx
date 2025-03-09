'use client'

import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { OstiganModal } from 'ui'
import UseTomanToRial from '@/hooks/useTomanToRial'
import { ModalHeader } from 'ui/components/modal/modalHeader'

export const ShowQrCodeModal = ({ data, open, handleClose }) => {
  const t = useTranslations()

  return (
    <OstiganModal open={open} handleClose={handleClose}>
      <div>
        <ModalHeader handleClose={handleClose} headerTitle={t('showQrCode')} />
        <div className="flex flex-col gap-6 items-center justify-center p-7">
          <p className="text-lg">{data.title}</p>
          <div className="relative w-52 h-52">
            <Image src={data.qr_code} fill alt="ostigan" />
          </div>
          <p className="text-lg">
            {UseTomanToRial(data.amount)}
            {t('rial')}
          </p>
        </div>
      </div>
    </OstiganModal>
  )
}
