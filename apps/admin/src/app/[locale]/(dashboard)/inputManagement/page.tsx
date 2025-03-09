import React from 'react'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import { InputManagement } from 'views/inputManagement'

const IputManagementPage = ({ params: { locale } }): JSX.Element => {
  unstable(locale)

  return <InputManagement />
}

export default IputManagementPage
