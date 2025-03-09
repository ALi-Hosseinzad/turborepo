'use client'

import {
  FormManagementForm,
  useFormManagementCreateViewModel,
} from '../imports'

export const FormManagementCreate = (): JSX.Element => {
  const { initialValues, handleAddNewInput, isPending, isSuccess } =
    useFormManagementCreateViewModel()
  return (
    <FormManagementForm
      initialValues={initialValues}
      isLoading={isPending}
      isSuccessPostForm={isSuccess}
      disabled={isPending}
      onSubmit={handleAddNewInput}
    />
  )
}
