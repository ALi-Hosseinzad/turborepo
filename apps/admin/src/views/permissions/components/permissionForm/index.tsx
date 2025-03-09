import {
  FormLayout,
  Loading,
  PermissionFormView,
  React,
  useTranslations,
} from '../../imports'

export const PermissionForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  isPendingPostData,
  titleHeader1,
}): JSX.Element => {
  const t = useTranslations()
  return (
    <FormLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      titleHeader1={titleHeader1}
      titleHeader2={t('permissionInfo')}
      isLoading={isPendingPostData}
      onSubmit={onSubmit}
    >
      <Loading isLoading={isPendingPostData} />
      <PermissionFormView />
    </FormLayout>
  )
}
