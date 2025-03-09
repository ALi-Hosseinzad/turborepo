'use client'

import {
  CategoryForm,
  Loading,
  OstiganTable,
  useTranslations,
} from '../imports'

const CategoryEditView = (props: any): JSX.Element => {
  const {
    initialValues,
    onSubmit,
    isLoadingEditData,
    isPendingSubmitEdit,
    headInfo,
    bodyInfo,
  } = props
  const t = useTranslations()

  return (
    <>
      <Loading isLoading={isLoadingEditData} />
      <CategoryForm
        initialValues={initialValues}
        isLoading={isPendingSubmitEdit}
        titleHeader1={`${t('edit')} ${t('category')}`}
        titleHeader2={t('categoryInfo')}
        onSubmit={onSubmit}
      />
      {bodyInfo?.length > 0 && (
        <OstiganTable
          headInfo={headInfo}
          bodyInfo={bodyInfo}
          tableStyle="admin"
          showDetailUrl="product"
          isLoading={isLoadingEditData}
          className="mt-20"
          tableLabel={t('products')}
        />
      )}
    </>
  )
}

export default CategoryEditView
