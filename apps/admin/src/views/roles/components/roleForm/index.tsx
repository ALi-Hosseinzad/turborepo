import { FormLayout, RoleFormView, useRoleFormViewModel } from '../../imports'

const RoleForm = ({
  initialValues,
  onSubmit,
  isLoading,
  titleHeader1,
  titleHeader2,
}): JSX.Element => {
  const { validationSchema, permissionTypeList } = useRoleFormViewModel()

  return (
    <FormLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      titleHeader1={titleHeader1}
      titleHeader2={titleHeader2}
      isLoading={isLoading}
      onSubmit={onSubmit}
    >
      <RoleFormView permissionTypeList={permissionTypeList} />
    </FormLayout>
  )
}

export default RoleForm
