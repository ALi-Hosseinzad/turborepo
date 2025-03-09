'use client'

import { CategoryCreateView, useCategoryCreateViewModel } from '../imports'

const CategoryCreate = (): JSX.Element => {
  const { initialValues, onSubmit, isLoadingSubmit } =
    useCategoryCreateViewModel()

  return (
    <CategoryCreateView
      initialValues={initialValues}
      isLoadingSubmit={isLoadingSubmit}
      onSubmit={onSubmit}
    />
  )
}

export default CategoryCreate
