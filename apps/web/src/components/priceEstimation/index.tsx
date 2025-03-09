'use client'

import { PriceEstimationView, usePriceEstimationViewMOdel } from './imports'

export const PriceEstimation = (): JSX.Element => {
  const { initialValues, validationSchema, onSubmit } =
    usePriceEstimationViewMOdel()

  return (
    <PriceEstimationView
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    />
  )
}
