'use client'

import type { InputManagementFormType } from '../../imports'
import {
  FormLayout,
  InputManagementFormView,
  Loading,
  useInputManagementFormViewModel,
  useTranslations,
} from '../../imports'

export const InputManagementForm = (
  props: InputManagementFormType,
): JSX.Element => {
  const {
    initialValues,
    setInitialValues,
    isLoading,
    disabled,
    onSubmit,
    initialInputType,
    // setIinitialInputType,
    selectedOption,
    setSelectedOption,
  } = props

  const t = useTranslations()
  const {
    validationSchema,
    datainputTypeOption,
    dataRegexOption,
    handleSelectedOption,
    formTypeOptions,
  } = useInputManagementFormViewModel(
    setSelectedOption,
    setInitialValues,
    initialValues,
    // setIinitialInputType,
  )

  return (
    <FormLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      titleHeader1={t('inputsManagement')}
      titleHeader2={t('inputInfo')}
      isLoading={isLoading}
      disabled={disabled}
      onSubmit={onSubmit}
    >
      <Loading isLoading={isLoading} />
      <InputManagementFormView
        datainputTypeOption={datainputTypeOption}
        dataRegexOption={dataRegexOption}
        handleSelectedOption={handleSelectedOption}
        selectedOption={selectedOption}
        initialInputType={initialInputType}
        options={initialValues?.option}
        property={initialValues?.property}
        formTypeOptions={formTypeOptions}
      />
    </FormLayout>
  )
}
