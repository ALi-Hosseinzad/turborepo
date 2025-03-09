import {
  AddBalanceArrowIcon,
  CachoutArrowIcon,
  OstiganDotIcon,
  OstiganStatus,
  useAxiosQuery,
  useState,
  useTranslations,
  WALLET_TRANSACTION_URL,
} from '../../imports'

export const useWalletListViewModel = (type?: string) => {
  const t = useTranslations()
  const [page, setPage] = useState(1)

  const headInfo = [
    t('id'),
    t('transactionAmount'),
    t('transactionDate'),
    t('transactionType'),
    t('status'),
  ]

  const selectFunction = (arg: any) => {
    return {
      pagination: arg.pagination,
      data: arg?.data?.map(
        ({
          id,
          created_at: createdAt,
          status,
          status_label: statusLabel,
          kind,
          transactionable_type_label: transactionTypeLabel,
          amount,
        }) => {
          const body: Record<any, any> = {
            id: (
              <div className="flex items-center justify-center gap-3">
                <OstiganDotIcon />
                <span>{id}</span>
              </div>
            ),
            amount,
            date: createdAt,
            transactionType: (
              <div className="flex justify-center items-center gap-1 !m-auto !max-w-28">
                <p>{transactionTypeLabel}</p>
                {kind ? <AddBalanceArrowIcon /> : <CachoutArrowIcon />}
              </div>
            ),
            status: (
              <OstiganStatus
                status={status}
                text={statusLabel}
                className="!text-sm !relative !p-2 !m-auto !max-w-28"
              />
            ),
          }

          if (type) {
            delete body.transactionType
            delete headInfo[4]
            return body
          }
          return body
        },
      ),
    }
  }

  const { isLoading, data } = useAxiosQuery({
    url: `${WALLET_TRANSACTION_URL}${type ? `?type=${type}&` : '?'}page=${page}&perPage=5`,
    queryKey: ['wallet-transaction', type, page],
    enabled: true,
    selectFn: selectFunction,
  })

  const onChangePage = (curPage: number) => {
    setPage(curPage)
  }

  return {
    headInfo,
    bodyInfo: data?.data,
    isLoading,
    pageCount: data?.pagination?.count,
    page,
    onChangePage,
  }
}
