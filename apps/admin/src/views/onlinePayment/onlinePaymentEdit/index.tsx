'use client'

import {
  OnlinePaymentEditView,
  useOnlinePaymentEditViewModel,
} from '../imports'

const OnlinePaymentEdit = (): JSX.Element => {
  const { initialValues, isPendingSubmitEdit, onSubmit, isLoadingEditData } =
    useOnlinePaymentEditViewModel()

  return (
    <OnlinePaymentEditView
      initialValues={initialValues}
      isLoading={isPendingSubmitEdit || isLoadingEditData}
      onSubmit={onSubmit}
    />
  )
}

export default OnlinePaymentEdit
