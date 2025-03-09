'use client'

import { SubjectCreateView, useSubjectCreateViewModel } from '../imports'

const SubjectCreate = (): JSX.Element => {
  const { initialValues, isLoading, onSubmit } = useSubjectCreateViewModel()

  return (
    <SubjectCreateView
      initialValues={initialValues}
      isLoading={isLoading}
      onSubmit={onSubmit}
    />
  )
}

export default SubjectCreate
