'use client'

import { BannerImageEditView, useBannerImageEditViewModel } from '../imports'

const BannerImageEdit = (): JSX.Element => {
  const { initialValues, isPendingSubmitEdit, onSubmit, isLoadingEditData } =
    useBannerImageEditViewModel()

  return (
    <BannerImageEditView
      initialValues={initialValues}
      isLoading={isPendingSubmitEdit || isLoadingEditData}
      onSubmit={onSubmit}
    />
  )
}

export default BannerImageEdit
