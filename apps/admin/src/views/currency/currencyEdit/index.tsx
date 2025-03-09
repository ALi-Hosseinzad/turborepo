'use client'

import { CurrencyEditView, useCurrencyEditViewModel } from '../imports'

const CurrencyEdit = (): JSX.Element => {
  const { initialValues, isLoading, onSubmit, headInfo, bodyInfo } =
    useCurrencyEditViewModel()

  return (
    <CurrencyEditView
      initialValues={initialValues}
      isLoading={isLoading}
      headInfo={headInfo}
      bodyInfo={bodyInfo}
      onSubmit={onSubmit}
    />
  )
}

export default CurrencyEdit
