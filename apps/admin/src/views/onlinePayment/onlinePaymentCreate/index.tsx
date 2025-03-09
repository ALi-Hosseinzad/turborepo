'use client'

import {
  OnlinePaymentCreateView,
  useOnlinePaymentCreateViewModel,
} from '../imports'

const OnlinePaymentCreate = (): JSX.Element => {
  const { initialValues, isLoadingSubmit, onSubmit } =
    useOnlinePaymentCreateViewModel()

  return (
    <OnlinePaymentCreateView
      initialValues={initialValues}
      isLoading={isLoadingSubmit}
      onSubmit={onSubmit}
    />
  )
}

export default OnlinePaymentCreate
