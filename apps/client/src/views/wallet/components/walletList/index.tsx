'use client'

import { useWalletListViewModel, WalletListView } from '../../imports'

const WalletList = ({
  type,
  tableTitle,
}: {
  tableTitle?: string
  type?: string
}) => {
  const { headInfo, bodyInfo, isLoading, pageCount, page, onChangePage } =
    useWalletListViewModel(type)

  return (
    <WalletListView
      headInfo={headInfo}
      bodyInfo={bodyInfo}
      isLoading={isLoading}
      tableTitle={tableTitle}
      pageCount={pageCount}
      page={page}
      onChangePage={onChangePage}
    />
  )
}

export default WalletList
