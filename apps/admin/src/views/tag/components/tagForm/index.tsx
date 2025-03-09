'use client'

import {
  FormLayout,
  TagFormView,
  useTagFormViewModel,
  useTranslations,
} from '../../imports'

export const TagForm = ({
  initialValues,
  onSubmit,
  isLoading,
  disabled,
  titleHeader1,
}): JSX.Element => {
  const t = useTranslations()
  const { validationSchema } = useTagFormViewModel()

  return (
    <FormLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      titleHeader1={titleHeader1}
      titleHeader2={t('tagInfo')}
      isLoading={isLoading}
      disabled={disabled}
      onSubmit={onSubmit}
    >
      <TagFormView />
    </FormLayout>
  )
}
