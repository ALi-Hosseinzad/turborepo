import type { QueryListType, UseListViewModelType } from '../../imports'
import {
  axiosGet,
  Image,
  INDEX_PARAMS,
  Link,
  TAG_URL,
  useLocale,
  useParams,
  useQuery,
  useState,
  useTranslations,
} from '../../imports'

export const useTagHistoryViewModel = (): UseListViewModelType => {
  const { id }: { id: string } = useParams()
  const locale = useLocale()
  const t = useTranslations()

  const [params, setParams] = useState<QueryListType>(INDEX_PARAMS)
  const headInfo = [
    t('id'),
    t('isCreditCardLabel'),
    t('title'),
    t('slug'),
    t('image'),
    t('type'),
    t('showDetail'),
  ]

  const { data, isLoading } = useQuery({
    queryKey: ['product-token', params.page],
    queryFn: () =>
      axiosGet({
        url: `${TAG_URL}/${id}`,
      }),
    enabled: id != undefined,
  })

  const onChangePage = (page: string): void => {
    setParams((prev) => ({ ...prev, page }))
  }

  const pageCount = data?.pagination?.total_pages
  const handleBodyInfo = (body: any[]): any[] => {
    if (body?.length) {
      return body.map(
        ({
          id,
          is_credit_card_label: isCreditCardLabel,
          title,
          slug,
          image,
          type,
        }) => {
          return {
            id,
            isCreditCardLabel: isCreditCardLabel ? isCreditCardLabel : '-',
            title,
            slug,
            image: (
              <div className="flex w-full justify-center items-center">
                <Image src={image} width={32} height={24} alt={title} />
              </div>
            ),
            type: t(type),
            detail: (
              <Link
                href={`/${locale}/${
                  type === 'online_payment' ? `/onlinePayment` : `/package`
                }/${id}`}
                className="underline text-primary-default text-sm"
              >
                {t('showDetail')}
              </Link>
            ),
          }
        },
      )
    }

    return []
  }

  return {
    bodyInfo: handleBodyInfo(data?.product),
    headInfo,
    pageCount,
    isLoading,
    params,
    onChangePage,
  }
}
