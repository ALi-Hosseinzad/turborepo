'use client'

import {
  Loading,
  OnlinePaymentListView,
  useOnlinePaymentListViewModel,
  useTranslations,
} from './imports'

const OnlinePayments = (): JSX.Element => {
  const {
    headInfo,
    bodyInfo,
    isLoading,
    pageCount,
    onChangePage,
    afterDeleteHandler,
    isFetching,
    onErrorDelete,
    page,
  } = useOnlinePaymentListViewModel()
  const t = useTranslations()
  return (
    <div>
      {bodyInfo?.length === 0 ? (
        <div className="flex justify-center items-center w-full h-[30vh] text-lg	font-semibold	 ">
          {t('dontHaveData')}
        </div>
      ) : (
        <>
          <Loading isLoading={isLoading} />
          <OnlinePaymentListView
            page={page}
            bodyInfo={bodyInfo}
            headInfo={headInfo}
            pageCount={pageCount}
            isLoading={isLoading}
            isFetching={isFetching}
            afterDeleteHandler={afterDeleteHandler}
            onChangePage={onChangePage}
            onErrorDelete={onErrorDelete}
          />
        </>
      )}
    </div>
  )
}

export default OnlinePayments
