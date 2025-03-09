'use client'

import { FaqEditView, useFaqEditViewModel } from '../imports'

const FaqEdit = (): JSX.Element => {
  const { initialValues, isPendingSubmitEdit, onSubmit, isLoadingEditData } =
    useFaqEditViewModel()

  return (
    <FaqEditView
      initialValues={initialValues}
      isLoading={isPendingSubmitEdit || isLoadingEditData}
      onSubmit={onSubmit}
    />
  )
}

export default FaqEdit
