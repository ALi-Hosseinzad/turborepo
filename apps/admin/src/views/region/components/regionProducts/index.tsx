'use client'

import {
  OstiganTable,
  useTranslations,
  useViewModelRegionProducts,
} from '../../imports'

const EditProductsTable = (): JSX.Element => {
  const t = useTranslations()
  const { headInfoTableHead, ReginEditData } = useViewModelRegionProducts()

  return (
    <>
      {ReginEditData?.length === 0 ? (
        <div>{t('dataEmpty')}</div>
      ) : (
        <OstiganTable
          headInfo={headInfoTableHead ? headInfoTableHead : []}
          bodyInfo={ReginEditData}
          pageCount="0"
          page="0"
          tableStyle="admin"
          showDetailUrl="product"
          isLoading={false}
        />
      )}
    </>
  )
}

export default EditProductsTable
