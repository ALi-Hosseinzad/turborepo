'use client'

import {
  CURRENCY_LIST_QUERY,
  CURRENCY_URL,
  List,
  useCurrencyListViewModel,
  useTranslations,
} from './imports'

const Currency = (): JSX.Element => {
  const { bodyInfo, headInfo, isLoadingChangeStatus } =
    useCurrencyListViewModel()
  const t = useTranslations()

  return (
    <List
      bodyInfo={bodyInfo}
      headInfo={headInfo}
      url={CURRENCY_URL}
      isLoadingParent={isLoadingChangeStatus}
      queryKey={CURRENCY_LIST_QUERY}
      tableEditNavigationLink="currency"
      tableAddNavigationLink="currency/add"
      tableAddBtnText={t('addCurrency')}
    />
  )
}

export default Currency
