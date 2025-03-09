'use client'

import {
  Loading,
  TokenManagementForm,
  useTokenManagementEditViewModel,
  useTranslations,
} from '../imports'

export const TokenManagementEdit = (): JSX.Element => {
  const {
    initialValues,
    setInitialValues,
    handleEditToken,
    isPendingToken,
    isLoadingGetData,
  } = useTokenManagementEditViewModel()
  const t = useTranslations()
  return (
    <>
      <TokenManagementForm
        initialValues={initialValues}
        isLoading={isPendingToken}
        disabled={isPendingToken}
        setInitialValues={setInitialValues}
        titleHeader1={`${t('edit')} ${t('token')}`}
        onSubmit={handleEditToken}
      />
      <Loading isLoading={isLoadingGetData} />
    </>
  )
}
