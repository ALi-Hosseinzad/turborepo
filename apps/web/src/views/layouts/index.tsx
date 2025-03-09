'use client'

import React from 'react'
import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'
import ThemeRegistry from '@/configs/providers/cacheProvider'

const CustomLayout = ({ children }): JSX.Element => {
  return (
    <ThemeRegistry
      options={{
        key: 'mui-style-rtl',
        stylisPlugins: [prefixer, rtlPlugin],
      }}
    >
      <div className="mt-8">{children}</div>
    </ThemeRegistry>
  )
}

export default CustomLayout
