import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/configs/theme'

export default function CustomThemeProvider({
  children,
}: {
  children: JSX.Element
}): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>{children}</div>
    </ThemeProvider>
  )
}
