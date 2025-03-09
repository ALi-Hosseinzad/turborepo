'use client'

import {
  OstiganTable,
  React,
  usePackageEditViewModel,
  useTranslations,
} from '../../imports'
import { useManagementProductListViewModel } from './viewModel'

export const ManagementProductList = (): JSX.Element => {
  const { isLoadingEditData, editData } = usePackageEditViewModel()
  const { headInfo, giftCardProductData } =
    useManagementProductListViewModel(editData)
  const t = useTranslations()

  return (
    <div className="flex flex-col mb-7 gap-3 mt-20">
      <span className="font-semibold text-xl text-black">
        {t('productHistory')}
      </span>
      <OstiganTable
        bodyInfo={giftCardProductData}
        headInfo={headInfo}
        tableStyle="admin"
        isLoading={isLoadingEditData}
        showDetailUrl="product"
      />
    </div>
  )
}
