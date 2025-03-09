'use client'

import {
  Loading,
  React,
  RoleForm,
  useRoleEditViewModel,
  useTranslations,
} from '../imports'

const RoleEdit = (): JSX.Element => {
  const { initialValues, isPendingSubmitEdit, onSubmit, isLoadingGetData } =
    useRoleEditViewModel()
  const t = useTranslations()

  return (
    <>
      <RoleForm
        isLoading={isPendingSubmitEdit}
        initialValues={initialValues}
        titleHeader1={t('editRole')}
        titleHeader2={t('roleInfo')}
        onSubmit={onSubmit}
      />
      <Loading isLoading={isLoadingGetData} />
    </>
  )
}

export default RoleEdit
