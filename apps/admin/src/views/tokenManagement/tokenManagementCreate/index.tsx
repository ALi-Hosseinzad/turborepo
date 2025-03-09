'use client'

import {
  TokenManagementForm,
  useTokenManagementCreateViewModel,
  useTranslations,
} from '../imports'

export const TokenManagementCreate = (): JSX.Element => {
  const { initialValues, handleAddNewToken, isPendingToken } =
    useTokenManagementCreateViewModel()
  const t = useTranslations()
  return (
    <TokenManagementForm
      initialValues={initialValues}
      isLoading={isPendingToken}
      disabled={isPendingToken}
      titleHeader1={`${t('add')} ${t('token')}`}
      setInitialValues={undefined}
      onSubmit={handleAddNewToken}
    />
  )
}
