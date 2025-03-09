'use client'

import { PageUrlEditView, usePageUrlEditViewModel } from '../imports'

const PageUrlEdit = (): JSX.Element => {
  const { initialValues, isLoading, onSubmit, headInfo, bodyInfo } =
    usePageUrlEditViewModel()

  return (
    <PageUrlEditView
      initialValues={initialValues}
      isLoading={isLoading}
      headInfo={headInfo}
      bodyInfo={bodyInfo}
      onSubmit={onSubmit}
    />
  )
}

export default PageUrlEdit
