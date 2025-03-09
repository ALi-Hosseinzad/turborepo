'use client'

import { PackageCreateView, usePackageCreateViewModel } from '../imports'

export const PackageCreate = (): JSX.Element => {
  const { initialValues, onSubmit, isLoadingSubmit } =
    usePackageCreateViewModel()

  return (
    <PackageCreateView
      initialValues={initialValues}
      isLoadingSubmit={isLoadingSubmit}
      onSubmit={onSubmit}
    />
  )
}
