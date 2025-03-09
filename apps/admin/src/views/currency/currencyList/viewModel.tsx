import {
  axiosPutBody,
  CURRENCY_LIST_QUERY,
  CURRENCY_URL,
  type CurrencyTableType,
  OstiganSwitch,
  useMutation,
  useQueryClient,
  UseTomanToRial,
  useTranslations,
} from '../imports'

export const useCurrencyListViewModel = (): any => {
  const t = useTranslations()
  const queryClient = useQueryClient()
  const headInfo = [
    t('id'),
    t('currency'),
    t('symbol'),
    `${t('price')}  (${t('rial')})`,
    t('status'),
  ]

  const { mutateAsync, isPending: isLoadingChangeStatus } = useMutation({
    mutationFn: ({ id, status }: { id: number; status: string }) => {
      return axiosPutBody({
        url: `${CURRENCY_URL}/${id}`,
        body: { status },
      })
    },
  })

  const bodyInfo = (body: CurrencyTableType): any[] => {
    return body?.map(
      ({
        id,
        name,
        status,
        symbol,
        exchange_money_active: exchangeMoneyActive,
      }) => {
        return {
          id,
          name,
          symbol,
          exchangeMoney: UseTomanToRial(exchangeMoneyActive),
          statusLabel: (
            <OstiganSwitch
              checked={status === 'active'}
              onChange={() => {
                const curStatus = status === 'disable' ? 'active' : 'disable'
                mutateAsync({ status: curStatus, id }).then(() => {
                  queryClient.invalidateQueries({
                    queryKey: [CURRENCY_LIST_QUERY],
                  })
                })
              }}
            />
          ),
        }
      },
    )
  }

  return {
    headInfo,
    bodyInfo,
    isLoadingChangeStatus,
  }
}
