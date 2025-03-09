'use client'

import {
  PermissionForm,
  React,
  usePermissionCreateViewModel,
  useTranslations,
} from '../imports'

export const PermissionCreate = (): JSX.Element => {
  const {
    initialValues,
    validationSchema,
    handlePermission,
    isPendingPostData,
  } = usePermissionCreateViewModel()
  const t = useTranslations()

  return (
    <PermissionForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      isPendingPostData={isPendingPostData}
      titleHeader1={t('addNewPermission')}
      onSubmit={handlePermission}
    />
  )
}
