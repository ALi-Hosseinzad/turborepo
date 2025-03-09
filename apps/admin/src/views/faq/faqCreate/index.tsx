'use client'

import { FaqCreateView, useFaqCreateViewModel } from '../imports'

const FaqCreate = (): JSX.Element => {
  const { initialValues, isLoadingSubmit, onSubmit } = useFaqCreateViewModel()

  return (
    <FaqCreateView
      initialValues={initialValues}
      isLoading={isLoadingSubmit}
      onSubmit={onSubmit}
    />
  )
}

export default FaqCreate
