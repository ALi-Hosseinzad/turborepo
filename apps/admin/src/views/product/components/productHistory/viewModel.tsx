import type { ProductHistoryViewModelType, QueryListType } from '../../imports'
import {
  axiosGet,
  GIFT_CARD_TOKEN_URL,
  INDEX_PARAMS,
  Link,
  useLocale,
  useParams,
  useQuery,
  useState,
  useTranslations,
} from '../../imports'

export const useProductHistoryViewModel = (): ProductHistoryViewModelType => {
  const { id }: { id: string } = useParams()
  const t = useTranslations()
  const locale = useLocale()
  const [params, setParams] = useState<QueryListType>(INDEX_PARAMS)
  const headInfo = [t('id'), t('token'), t('price'), t('status'), t('action')]

  const { data, isLoading } = useQuery({
    queryKey: ['product-token', params.page],
    queryFn: () =>
      axiosGet({
        url: `${GIFT_CARD_TOKEN_URL}?gift_card_product_id=${id}`,
      }),
    staleTime: 10 * 6000 * 2,
    enabled: id != undefined,
  })

  const onChangePage = (page: string): void => {
    setParams((prev) => ({ ...prev, page }))
  }

  const pageCount = data?.pagination?.total_pages
  const handleBodyInfo = (body: any[]): any[] => {
    if (body?.length) {
      return body.map(
        ({ id, token, giftCardProductBuyPrice, order, is_used: status }) => {
          return {
            id,
            token,
            price: `${giftCardProductBuyPrice?.price} ${giftCardProductBuyPrice?.currency?.name}`,
            status: (
              <div
                className={`mx-auto rounded-lg w-32 p-2 ${status ? 'text-error-default bg-error-background' : 'text-success-default bg-primary-background'}`}
              >
                {status ? t('used') : t('unUsed')}
              </div>
            ),
            action: (
              <>
                {order?.length > 0 ? (
                  <Link
                    href={`/${locale}/order/${order?.id}`}
                    className="underline text-primary-default text-sm"
                  >
                    {t('showDetail')}
                  </Link>
                ) : (
                  <div className="text-primary-default text-sm">
                    {t('showDetail')}
                  </div>
                )}
              </>
            ),
          }
        },
      )
    }

    return []
  }

  return {
    bodyInfo: handleBodyInfo(data?.data),
    headInfo,
    pageCount,
    isLoading,
    params,
    onChangePage,
  }
}
