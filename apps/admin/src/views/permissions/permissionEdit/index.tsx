'use client'

import {
  Loading,
  PermissionForm,
  React,
  usePermissionEditViewModel,
  useTranslations,
} from '../imports'

export const PermissionEdit = (): JSX.Element => {
  const {
    initialValues,
    validationSchema,
    handlePermission,
    isLoadingGetData,
    isPendingPostData,
  } = usePermissionEditViewModel()
  const t = useTranslations()

  return (
    <>
      <PermissionForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        isPendingPostData={isPendingPostData}
        titleHeader1={t('editNewPermission')}
        onSubmit={handlePermission}
      />
      <Loading isLoading={Boolean(isLoadingGetData)} />
    </>
  )
}
