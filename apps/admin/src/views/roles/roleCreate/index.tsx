'use client'

import {
  React,
  RoleForm,
  useRoleCreateViewModel,
  useTranslations,
} from '../imports'

const RoleCreate = (): JSX.Element => {
  const { initialValues, onSubmit, isLoadingSubmit } = useRoleCreateViewModel()
  const t = useTranslations()

  return (
    <RoleForm
      isLoading={isLoadingSubmit}
      initialValues={initialValues}
      titleHeader1={`${t('add')} ${t('rolesInfo')} `}
      titleHeader2={t('rolesInfo')}
      onSubmit={onSubmit}
    />
  )
}

export default RoleCreate
