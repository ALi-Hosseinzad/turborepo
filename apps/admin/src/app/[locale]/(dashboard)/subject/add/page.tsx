import React from 'react'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import SubjectCreate from 'views/subject/subjectCreate'
import type { PagePropsType } from 'types/common'

const AddSubjectPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)

  return <SubjectCreate />
}
export default AddSubjectPage
