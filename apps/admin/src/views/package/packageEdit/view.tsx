'use client'

import {
  type FC,
  Loading,
  ManagementProductList,
  type PackageCreateViewType,
  PackageForm,
  useTranslations,
} from '../imports'

const PackageEditView: FC<PackageCreateViewType> = (props) => {
  const t = useTranslations()
  const { initialValues, onSubmit, isLoadingEditData, isPendingSubmitEdit } =
    props

  return (
    <div className="flex flex-col gap-4 mb-5">
      <Loading isLoading={isLoadingEditData} />
      <PackageForm
        isLoadingSubmit={isPendingSubmitEdit}
        initialValues={initialValues}
        titleHeader2={t('packageInfo')}
        titleHeader1={t('addNewPackage')}
        onSubmit={onSubmit}
      />
      <ManagementProductList />
    </div>
  )
}

export default PackageEditView
