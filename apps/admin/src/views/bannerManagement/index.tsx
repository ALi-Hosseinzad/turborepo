'use client'

import {
  BannerManagementListView,
  useBannerManagementListViewModel,
} from './imports'

const BannerManagement = (): JSX.Element => {
  const {
    headInfo,
    bodyInfo,
    page,
    isLoading,
    pageCount,
    onChangePage,
    onErrorDelete,
    afterDeleteHandler,
    isFetching,
  } = useBannerManagementListViewModel()
  return (
    <BannerManagementListView
      bodyInfo={bodyInfo}
      headInfo={headInfo}
      pageCount={pageCount}
      isLoading={isLoading}
      afterDeleteHandler={afterDeleteHandler}
      page={page}
      isFetching={isFetching}
      onChangePage={onChangePage}
      onErrorDelete={onErrorDelete}
    />
  )
}

export default BannerManagement
