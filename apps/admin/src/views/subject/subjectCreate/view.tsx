'use client'

import type { SubjectCreateViewType } from '../imports'
import { SubjectForm, useTranslations } from '../imports'

const SubjectCreateView = ({
  initialValues,
  onSubmit,
  isLoading,
}: SubjectCreateViewType): JSX.Element => {
  const t = useTranslations()

  return (
    <SubjectForm
      isLoading={isLoading}
      initialValues={initialValues}
      titleHeader1={t('addSubjects')}
      titleHeader2={t('addSubject')}
      onSubmit={onSubmit}
    />
  )
}

export default SubjectCreateView
