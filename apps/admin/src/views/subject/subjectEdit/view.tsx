'use client'

// import type { SubjectCreateViewType } from '../imports'
import { OstiganTable, SubjectForm, useTranslations } from '../imports'

const SubjectEditView = ({
  initialValues,
  onSubmit,
  isLoading,
  headInfo,
  bodyInfo,
}: any): JSX.Element => {
  const t = useTranslations()

  return (
    <>
      <SubjectForm
        isLoading={isLoading}
        initialValues={initialValues}
        titleHeader1={t('editSubjects')}
        titleHeader2={t('editSubject')}
        onSubmit={onSubmit}
      />

      <OstiganTable
        headInfo={headInfo}
        bodyInfo={bodyInfo}
        tableStyle="admin"
        isLoading={isLoading}
      />
    </>
  )
}

export default SubjectEditView
