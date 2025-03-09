'use client'

import { OstiganTable, TableSkeleton, useTranslations } from '../../imports'
import WalletTableNoData from '../walletTableNoData'

const WalletListView = ({
  headInfo,
  bodyInfo,
  isLoading,
  tableTitle,
  pageCount,
  onChangePage,
  page,
}) => {
  const t = useTranslations()

  if (isLoading)
    return (
      <div className="mt-5">
        <TableSkeleton />
      </div>
    )
  return (
    <>
      {bodyInfo?.length ? (
        <OstiganTable
          tableStyle="client"
          headInfo={headInfo}
          bodyInfo={bodyInfo}
          pageCount={pageCount}
          page={page}
          tableTitleContent={t(tableTitle)}
          onChangePage={onChangePage}
        />
      ) : (
        <WalletTableNoData />
      )}
    </>
  )
}

export default WalletListView
