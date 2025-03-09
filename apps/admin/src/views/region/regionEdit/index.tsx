'use client'

import { type FC, RegionEditView, useViewModelEditRegion } from '../imports'

const RegionEdit: FC = () => {
  const { initialValues, onSubmit, isPendingSubmitEdit, isLoadingEditData } =
    useViewModelEditRegion()

  return (
    <RegionEditView
      initialValues={initialValues}
      isPendingSubmitEdit={isPendingSubmitEdit}
      isLoadingEditData={isLoadingEditData}
      onSubmit={onSubmit}
    />
  )
}

export default RegionEdit
