'use client'

import { CurrencyHistoryView, useCurrencyHistoryViewModel } from '../../imports'

export const CurrencyHistory = (): JSX.Element => {
  const { headInfo, bodyInfo, isLoading } = useCurrencyHistoryViewModel()

  return (
    <CurrencyHistoryView
      headInfo={headInfo}
      bodyInfo={bodyInfo}
      isLoading={isLoading}
    />
  )
}
