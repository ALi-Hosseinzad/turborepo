import {
  FormikSelect,
  FormikTextEditor,
  FormikTextField,
  React,
  usePermissionCreateViewModel,
  useTranslations,
} from '../../imports'

export const PermissionFormView = (): JSX.Element => {
  const { accessTypeList, accessNameList } = usePermissionCreateViewModel()
  const t = useTranslations()

  return (
    <div className="flex gap-8 w-full">
      <div className="flex flex-col gap-13 w-1/2">
        <FormikSelect
          listOptions={accessNameList}
          optionLabel="value"
          optionValue="label"
          name="name"
          placeholder={t('chooseOrtype')}
          selectLabel={t('accessNameEn')}
          isLoading={false}
        />

        <FormikTextField name="meta_name" title={t('accessNameFa')} />
        <FormikSelect
          listOptions={accessTypeList}
          optionLabel="label"
          optionValue="value"
          name="type"
          placeholder={t('chooseOrtype')}
          selectLabel={t('accessType')}
          isLoading={false}
        />
      </div>
      <div className="flex flex-col gap-4 w-1/2">
        <FormikTextEditor
          name="description"
          placeholder={t('description')}
          fontSize={false}
        />
      </div>
    </div>
  )
}
