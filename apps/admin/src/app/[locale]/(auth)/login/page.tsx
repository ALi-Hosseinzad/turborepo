import React from 'react'
import GenerateMetadata from 'utils/generateMetadata'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import Login from 'views/login'
import type { PagePropsType } from 'types/common'

export const metadata = GenerateMetadata(
  { title: ' خوش آمدید' },
  { withSuffix: true },
)

const LoginPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <Login />
}

export default LoginPage
