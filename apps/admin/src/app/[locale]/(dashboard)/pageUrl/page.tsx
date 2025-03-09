import React from 'react'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import PageUrl from 'views/pageUrl'
import type { PagePropsType } from 'types/common'

const PageUrlPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <PageUrl />
}

export default PageUrlPage
