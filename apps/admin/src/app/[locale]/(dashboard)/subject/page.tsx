import React from 'react'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import Subjects from 'views/subject'
import type { PagePropsType } from 'types/common'

const SubjectPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <Subjects />
}

export default SubjectPage
