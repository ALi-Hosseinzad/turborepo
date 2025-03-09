'use client'

import {
  FormLayout,
  FormManagementFormView,
  Loading,
  useFormManagementFormViewModel,
  useTranslations,
} from '../../imports'
import type { FormManagementFormType } from '../../imports'

export const FormManagementForm = (
  props: FormManagementFormType,
): JSX.Element => {
  const { initialValues, isLoading, isSuccessPostForm, disabled, onSubmit } =
    props
  const t = useTranslations()
  const { validationSchema } = useFormManagementFormViewModel()
  const sortInputData = initialValues?.formInputs?.sort((a, b) => {
    if (a.priority > b.priority) {
      return 1
    }
    if (a.priority < b.priority) {
      return -1
    }
    return 0
  })

  return (
    <FormLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      titleHeader1={t('formsManagement')}
      isLoading={isLoading}
      disabled={disabled}
      onSubmit={onSubmit}
    >
      <Loading isLoading={isLoading} />
      <FormManagementFormView
        isSuccessPostForm={isSuccessPostForm}
        initialinputData={sortInputData}
      />
    </FormLayout>
  )
}
