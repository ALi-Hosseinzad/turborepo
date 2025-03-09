'use client'

import { PackageEditView, React, usePackageEditViewModel } from '../imports'

export const PackageEdit = (): JSX.Element => {
  const { initialValues, isPendingSubmitEdit, onSubmit, isLoadingEditData } =
    usePackageEditViewModel()

  return (
    <PackageEditView
      initialValues={initialValues}
      isLoadingEditData={isLoadingEditData}
      isPendingSubmitEdit={isPendingSubmitEdit}
      onSubmit={onSubmit}
    />
  )
}
