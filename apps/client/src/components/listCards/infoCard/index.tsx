import React from 'react'
import { useTranslations } from 'next-intl'
import { CHECKOUT } from '@/constants/routes'
import { useRouter } from '@/components/nextIntl/navigation'
import { Loading } from 'ui/components//loading/loading'
import { TablePagination } from 'ui/components/table/tablePagination'

export const InfoCard = ({
  page,
  pageCount,
  isLoading,
  isFetching,
  bodyInfo,
  titleClass,
  titleContent,
  onChangePage,
}) => {
  const router = useRouter()
  const t = useTranslations()
  return (
    <>
      <Loading isLoading={!isLoading && isFetching} />
      <div className="pb-5">
        <p className={titleClass}>{titleContent}</p>
      </div>
      <div className="flex flex-col gap-4">
        {bodyInfo?.map((item, index) => {
          return (
            <div
              key={item?.id}
              className="flex bg-white flex-col gap-2 shadow-md border rounded-lg p-4"
              role="button"
              tabIndex={index}
              onClick={() => router.push(`${CHECKOUT}/${item?.id}`)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                }
              }}
            >
              <p className="title-base py-2">{item?.product}</p>
              <div className="flex justify-between">
                <p className="text-medium-sm ">{`${t('amount')} ${t('payable')}:`}</p>
                <div className="text-left text-medium-sm">
                  {item?.fullPrice}
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-medium-sm ">{t('paymentTime')}</p>
                <div className="text-left text-medium-sm">
                  {item?.lastUpdate}
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-medium-sm ">{`${t('status')} ${t('order')}:`}</p>
                <div className="text-left text-medium-sm">
                  {item?.statusLabel}
                </div>
              </div>
            </div>
          )
        })}
        {!(!isLoading && pageCount && (pageCount as number) > 1) || (
          <TablePagination
            pageCount={pageCount}
            page={page}
            onChangePage={onChangePage}
          />
        )}
      </div>
    </>
  )
}
