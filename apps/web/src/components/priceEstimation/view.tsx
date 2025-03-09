'use client'

import { FormWrapper, PriceEstimationForm } from './imports'

export const PriceEstimationView = ({
  initialValues,
  validationSchema,
  onSubmit,
}): JSX.Element => {
  return (
    <FormWrapper
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <PriceEstimationForm />
    </FormWrapper>
  )
}
