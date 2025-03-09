'use client'

import { CategoryEditView, useCategoryEditViewModel } from '../imports'

const CategoryEdit = (): JSX.Element => {
  const {
    initialValues,
    onSubmit,
    isLoadingEditData,
    isPendingSubmitEdit,
    headInfo,
    bodyInfo,
  } = useCategoryEditViewModel()

  return (
    <CategoryEditView
      initialValues={initialValues}
      isLoadingEditData={isLoadingEditData}
      isPendingSubmitEdit={isPendingSubmitEdit}
      headInfo={headInfo}
      bodyInfo={bodyInfo}
      onSubmit={onSubmit}
    />
  )
}

export default CategoryEdit
