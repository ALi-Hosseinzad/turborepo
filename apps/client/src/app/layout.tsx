'use client'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import ReduxProvider from '@/configs/providers/reduxProvider'
import RQProvider from '@/configs/providers/rqProvider'
import RtlProvider from '@/configs/providers/rtlProvider'
import ThemeProvider from '@/configs/providers/themeProvider'
import ToastProvider from '@/configs/providers/toastProvider'
import { IRANSansXFaNum } from '@/configs/theme'
import './global.css'
import '@ostigan-tailwind/configs/tailwind/globals.css'
import '@ostigan-tailwind/configs/tailwind/styles.css'

export default function RootLayout({
  children,
  params: { locale },
}: any): React.ReactElement {
  return (
    <html
      lang={locale}
      className={`${IRANSansXFaNum.className} ${IRANSansXFaNum.variable} `}
    >
      <body className="bg-customWhite">
        <ReduxProvider>
          <AppRouterCacheProvider>
            <RtlProvider>
              <ThemeProvider>
                <RQProvider>
                  <ToastProvider>{children}</ToastProvider>
                </RQProvider>
              </ThemeProvider>
            </RtlProvider>
          </AppRouterCacheProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
