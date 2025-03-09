'use client'

import localFont from 'next/font/local'
import { createTheme } from '@mui/material/styles'

export const IRANSansXFaNum = localFont({
  variable: '--font-IRANSansXFaNum',
  src: [
    {
      path: '../app/fonts/FaNum/IRANSansXFaNum-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../app/fonts/FaNum/IRANSansXFaNum-UltraLight.ttf',
      weight: '200',
      style: 'normal',
    },

    {
      path: '../app/fonts/FaNum/IRANSansXFaNum-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../app/fonts/FaNum/IRANSansXFaNum-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../app/fonts/FaNum/IRANSansXFaNum-medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../app/fonts/FaNum/IRANSansXFaNum-DemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../app/fonts/FaNum/IRANSansXFaNum-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../app/fonts/FaNum/IRANSansXFaNum-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../app/fonts/FaNum/IRANSansXFaNum-Bold.ttf',
      weight: 'bold',
      style: 'normal',
    },
    // {
    //   path: '../app/fonts/FaNum/IRANSansXFaNum-Regular.ttf',
    //   weight: 'normal',
    //   style: 'normal',
    // },
    // {
    //   path: '../app/fonts/IRANSansX-Thin.ttf',
    //   weight: '100',
    //   style: 'normal',
    // },
    // {
    //   path: '../app/fonts/IRANSansX-UltraLight.ttf',
    //   weight: '200',
    //   style: 'normal',
    // },
    // {
    //   path: '../app/fonts/IRANSansX-Light.ttf',
    //   weight: '300',
    //   style: 'normal',
    // },
    // {
    //   path: '../app/fonts/IRANSansX-Medium.ttf',
    //   weight: '500',
    //   style: 'normal',
    // },
    // {
    //   path: '../app/fonts/IRANSansX-DemiBold.ttf',
    //   weight: '600',
    //   style: 'normal',
    // },
    // {
    //   path: '../app/fonts/IRANSansX-ExtraBold.ttf',
    //   weight: '800',
    //   style: 'normal',
    // },
    // {
    //   path: '../app/fonts/IRANSansX-Black.ttf',
    //   weight: '900',
    //   style: 'normal',
    // },
    // {
    //   path: '../app/fonts/IRANSansX-Bold.ttf',
    //   weight: 'bold',
    //   style: 'normal',
    // },
    // {
    //   path: '../app/fonts/IRANSansX-Regular.ttf',
    //   weight: 'normal',
    //   style: 'normal',
    // },
  ],
})

const theme = createTheme({
  direction: 'rtl',
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1025,
      lg: 1280,
      xl: 1440,
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: IRANSansXFaNum.style.fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family:'IRANSansXFaNum !important';
        }
      `,
    },
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       '@media (min-width:0)': {
    //         fontSize: '14px!important',
    //       },
    //       '@media (min-width:768px)': {
    //         fontSize: '16px!important',
    //       },
    //       '@media (min-width:1025px)': {
    //         fontSize: '18px!important',
    //       },
    //     },
    //   },
    // },
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       '&:not(.MuiInputBase-multiline)': {
    //         '@media (min-width:0)': {
    //           height: '44px!important',
    //         },
    //         '@media (min-width:768px)': {
    //           height: '52px!important',
    //         },
    //         '@media (min-width:1025px)': {
    //           height: '48px!important',
    //         },
    //       },
    //     },
    //   },
    // },
  },
  palette: {
    primary: {
      main: '#017456',
    },
    success: {
      main: '#01BC8D',
    },
    error: {
      main: '#F5455B',
    },
  },
})

export default theme
