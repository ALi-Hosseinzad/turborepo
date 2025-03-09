import React from 'react'
import './styles.css'
import { greatVibes } from '@/components/fonts/fonts'
import RQProvider from '@/configs/httpService/reactQuery/rqProvider'

export default function RootLayout({ children }: any): JSX.Element {
  return (
    <html lang="fa" className={`bg-[#FBFBFB] ${greatVibes.className}`}>
      <RQProvider>
        <body dir="rtl">{children}</body>
      </RQProvider>
    </html>
  )
}
