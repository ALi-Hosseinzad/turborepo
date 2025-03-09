'use client'

import React from 'react'
import { UserQrCode } from './components/userQrCode'
import { QrCodeList } from './imports'

export const QrCodes = () => {
  return (
    <div className="lg:flex w-full gap-8">
      <div className="w-1/2">
        <UserQrCode />
      </div>
      <div className="w-1/2">
        <QrCodeList />
      </div>
    </div>
  )
}
