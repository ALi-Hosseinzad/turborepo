'use client'

import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import RQProvider from 'configs/httpService/reactQuery/rqProvider'
import { AppContextProvider } from 'configs/providers/appContextProvider'
import { greatVibes } from 'components/fonts/fonts'
import ThemeRegistry from '../configs/theme/themeRegistry'
import './global.css'
import '@ostigan-tailwind/configs/tailwind/globals.css'
import '@ostigan-tailwind/configs/tailwind/styles.css'

export default function RootLayout({
  children,
  params: { locale },
}: any): React.ReactElement {
  return (
    <html lang={locale} className={greatVibes.className}>
      <AppContextProvider>
        <RQProvider>
          <body className="bg-customWhite">
            <ThemeRegistry
              options={{
                key: 'mui-style-rtl',
                stylisPlugins: [prefixer, rtlPlugin],
              }}
            >
              {children} <ReactQueryDevtools initialIsOpen={false} />
            </ThemeRegistry>
          </body>
        </RQProvider>
      </AppContextProvider>
    </html>
  )
}
