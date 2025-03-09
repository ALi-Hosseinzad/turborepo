'use client'

import { SubjectEditView, useSubjectEditViewModel } from '../imports'

const SubjectEdit = (): JSX.Element => {
  const { initialValues, isLoading, onSubmit, headInfo, bodyInfo }: any =
    useSubjectEditViewModel()
  // TODO:NEGAR
  return (
    <SubjectEditView
      initialValues={initialValues}
      isLoading={isLoading}
      headInfo={headInfo}
      bodyInfo={bodyInfo}
      onSubmit={onSubmit}
    />
  )
}

export default SubjectEdit
