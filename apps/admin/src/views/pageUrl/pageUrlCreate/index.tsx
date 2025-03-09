'use client'

import { PageUrlForm, usePageUrlCreateViewModel } from '../imports'

const PageUrlCreate = (): JSX.Element => {
  const { initialValues, isLoading, onSubmit } = usePageUrlCreateViewModel()

  return (
    <PageUrlForm
      isLoading={isLoading}
      initialValues={initialValues}
      titleHeader1={undefined}
      onSubmit={onSubmit}
    />
  )
}

export default PageUrlCreate
