import React from 'react'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import type { PagePropsType } from '@/types/nextIntl'
import { Dashboard } from '@/views/dashboard'

const DashboardPage: React.FC<PagePropsType> = ({ params: { locale } }) => {
  unstable(locale)

  return <Dashboard />
}
export default DashboardPage
