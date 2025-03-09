'use client'

import {
  BannerImageCreateView,
  useBannerImageCreateViewModel,
} from '../imports'

const BannerImageCreate = (): JSX.Element => {
  const { initialValues, isLoadingSubmit, onSubmit } =
    useBannerImageCreateViewModel()

  return (
    <BannerImageCreateView
      initialValues={initialValues}
      isLoading={isLoadingSubmit}
      onSubmit={onSubmit}
    />
  )
}

export default BannerImageCreate
