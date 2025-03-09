import {
  EditProductsTable,
  type EditPropsType,
  Loading,
  RegionForm,
  useTranslations,
} from '../imports'

const RegionEditView: React.FC<EditPropsType> = ({
  initialValues,
  onSubmit,
  isPendingSubmitEdit,
  isLoadingEditData,
}) => {
  const t = useTranslations()

  return (
    <div className="flex flex-col">
      <div className="w-full">
        <Loading isLoading={isLoadingEditData} />
        <RegionForm
          initialValues={initialValues}
          titleHeader1={t('createRigion')}
          titleHeader2={t('informationRegion')}
          isLoading={isPendingSubmitEdit}
          onSubmit={onSubmit}
        />
      </div>
      <div className="w-full my-10">
        <div className="my-4">{t('productsTable')}</div>
        <EditProductsTable />
      </div>
    </div>
  )
}
export default RegionEditView
