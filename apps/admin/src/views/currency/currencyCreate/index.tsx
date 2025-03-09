'use client'

import { CurrencyForm, useCurrencyCreateViewModel } from '../imports'

const CurrenciesCreate = (): JSX.Element => {
  const { initialValues, isLoading, onSubmit } = useCurrencyCreateViewModel()

  return (
    <CurrencyForm
      isLoading={isLoading}
      initialValues={initialValues}
      titleHeader1={undefined}
      onSubmit={onSubmit}
    />
  )
}

export default CurrenciesCreate
