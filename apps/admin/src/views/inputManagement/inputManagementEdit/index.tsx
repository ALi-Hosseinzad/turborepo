'use client'

import {
  InputManagementForm,
  Loading,
  useInputManagementEditViewModel,
} from '../imports'

export const InputManagementEdit = (): JSX.Element => {
  const {
    initialValues,
    setInitialValues,
    handleEditInput,
    isPending,
    isLoadingGetData,
    initialInputType,
    setIinitialInputType,
    selectedOption,
    setSelectedOption,
  } = useInputManagementEditViewModel()

  return (
    <>
      <InputManagementForm
        initialValues={initialValues}
        setInitialValues={setInitialValues}
        isLoading={isPending}
        disabled={isPending}
        initialInputType={initialInputType}
        setIinitialInputType={setIinitialInputType}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        onSubmit={handleEditInput}
      />
      <Loading isLoading={isLoadingGetData} />
    </>
  )
}
