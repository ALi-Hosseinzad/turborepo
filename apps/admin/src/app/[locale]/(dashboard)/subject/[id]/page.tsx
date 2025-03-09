import React from 'react'
import { unstable_setRequestLocale as unstable } from 'next-intl/server'
import SubjectEdit from 'views/subject/subjectEdit'
import type { PagePropsType } from 'types/common'

const AddSubjectPage: React.FC<PagePropsType> = ({
  params: { locale },
}): React.ReactElement => {
  unstable(locale)
  return <SubjectEdit />
}
export default AddSubjectPage
