'use client'

import { PageUrlListView, usePageUrlListViewModel } from './imports'

const PageUrl = (): JSX.Element => {
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
  } = usePageUrlListViewModel()
  return (
    <PageUrlListView
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

export default PageUrl
