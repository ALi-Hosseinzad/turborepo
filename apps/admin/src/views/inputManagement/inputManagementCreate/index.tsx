'use client'

import {
  InputManagementForm,
  useInputManagementCreateViewModel,
} from '../imports'

export const InputManagementCreate = (): JSX.Element => {
  const {
    initialValues,
    handleAddNewInput,
    isPending,
    selectedOption,
    setSelectedOption,
  } = useInputManagementCreateViewModel()

  return (
    <InputManagementForm
      initialValues={initialValues}
      isLoading={isPending}
      disabled={isPending}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      onSubmit={handleAddNewInput}
    />
  )
}
