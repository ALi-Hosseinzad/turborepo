'use client'

import {
  FormManagementForm,
  Loading,
  useFormManagementEditViewModel,
} from '../imports'

export const FormManagementEdit = (): JSX.Element => {
  const { initialValues, isPending, isLoadingGetData, handleEditForm } =
    useFormManagementEditViewModel()
  return (
    <>
      <Loading isLoading={isLoadingGetData} />
      <FormManagementForm
        initialValues={initialValues}
        isLoading={isPending}
        disabled={isPending}
        onSubmit={handleEditForm}
      />
    </>
  )
}
