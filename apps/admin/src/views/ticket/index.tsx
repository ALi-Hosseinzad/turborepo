'use client'

import {
  Loading,
  TicketListview,
  useTicketListViewModel,
  useTranslations,
} from './imports'

const Tickets = (): JSX.Element => {
  const {
    headInfo,
    onChangePage,
    bodyInfo,
    isLoading,
    pageCount,
    page,
    isFetching,
  } = useTicketListViewModel()
  const t = useTranslations()
  return (
    <>
      {bodyInfo?.length === 0 ? (
        <div className="flex justify-center items-center w-full h-[30vh] text-lg	font-semibold	 ">
          {t('dontHaveData')}
        </div>
      ) : (
        <>
          <Loading isLoading={isLoading} />
          <TicketListview
            bodyInfo={bodyInfo}
            headInfo={headInfo}
            pageCount={pageCount}
            isLoading={isLoading}
            page={page}
            isFetching={isFetching}
            onChangePage={onChangePage}
          />
        </>
      )}
    </>
  )
}

export default Tickets
