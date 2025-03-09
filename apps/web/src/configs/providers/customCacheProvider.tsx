'use client'

import { prefixer } from 'stylis'
import stylisRTLPlugin from 'stylis-plugin-rtl'
import ThemeRegistry from './cacheProvider'
import '@ostigan-tailwind/configs/tailwind/globals.css'
import '@ostigan-tailwind/configs/tailwind/styles.css'

export default function RootLayout(props): React.ReactElement {
  const { children } = props

  return (
    <ThemeRegistry
      options={{
        key: 'mui-style-rtl',
        stylisPlugins: [prefixer, stylisRTLPlugin],
      }}
    >
      {children}
    </ThemeRegistry>
  )
}
