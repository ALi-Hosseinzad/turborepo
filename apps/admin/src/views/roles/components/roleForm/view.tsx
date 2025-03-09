import {
  CustomFormikAutoComplete,
  FormikSelect,
  FormikTextField,
  GET_ALL_PERMISSION_URL,
  useFormikContext,
  useTranslations,
} from '../../imports'

export const RoleFormView = (props: any): JSX.Element => {
  const { permissionTypeList } = props
  const { values } = useFormikContext<any>()
  const t = useTranslations()

  return (
    <div className="flex flex-col gap-8 w-full">
      <FormikTextField
        name="name"
        title={t('rolesName')}
        placeholder={t('rolesName')}
      />
      <FormikSelect
        listOptions={permissionTypeList}
        optionLabel="label"
        optionValue="value"
        name="type"
        placeholder={t('choose')}
        selectLabel={t('accessType')}
        isLoading={false}
      />
      <CustomFormikAutoComplete
        disabled={!values?.type}
        name="permissionType"
        url={`${GET_ALL_PERMISSION_URL}?type=${values?.type?.value}`}
        queryKey="permissionOptions-AccessType"
        label={t('accessLevel')}
        optionTitle="name"
        multiSelection
        enabled={Boolean(values?.type.value)}
      />
    </div>
  )
}
