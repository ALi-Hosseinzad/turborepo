import type { ItemType, TableRowType } from './import'
import { Link, UseTomanToRial, useTranslations } from './import'

export const useOrderListViewModel = () => {
  const t = useTranslations()

  const bodyInfo = (data: ItemType[] | undefined): TableRowType[] => {
    return (
      data?.map((item) => {
        const createdAt = item?.created_at ?? ''
        const [date, time] = createdAt.split('T')
        const rows: TableRowType = {
          id: item?.id,
          orderTypeLabel: item?.order_type_label,
          product: item?.product.name,
          count: item?.count,
          lastUpdate: (
            <div>
              <p>{date?.replaceAll('-', '/')}</p>
              <p>{time.split('.')[0]}</p>
            </div>
          ),
          fullPrice: (
            <span>
              {UseTomanToRial(item.full_price)} {t('rial')}
            </span>
          ),
          statusLabel: (
            <Link
              href={
                item?.status === 'pending'
                  ? `checkout/${item?.id ?? ''}`
                  : `invoice/${item?.id ?? ''}`
              }
            >
              <div
                className="rounded-md px-2 py-2"
                style={{
                  color: item?.status_text_color,
                  backgroundColor: item?.status_background_color,
                }}
              >
                {item?.status_label}
              </div>
            </Link>
          ),
        }

        return rows
      }) ?? []
    )
  }

  const headInfo: string[] = [
    t('id'),
    t('orderTypeLabel'),
    t('product'),
    t('count'),
    t('lastUpdate'),
    t('price'),
    t('status'),
  ]

  const BREADCRUMBS_DATA = [{ name: t('orders'), url: 'orders' }]

  return { bodyInfo, headInfo, BREADCRUMBS_DATA }
}
