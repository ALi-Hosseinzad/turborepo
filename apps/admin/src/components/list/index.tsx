import type { FC } from 'react'
import { OstiganTable } from 'ui'
import type { ListPropsType } from 'types/common'
import { useListViewModel } from './viewModel'

export const List: FC<ListPropsType> = ({
  bodyInfo,
  headInfo,
  url,
  queryParams,
  queryKey,
  tableUrlDeleteRequest,
  tableEditNavigationLink,
  tableAddNavigationLink,
  tableAddBtnText,
  tableLabel,
  isLoadingParent = false,
}): JSX.Element => {
  const {
    data,
    page,
    isLoading,
    pageCount,
    onChangePage,
    onErrorDelete,
    afterDeleteHandler,
    isFetching,
  } = useListViewModel({
    url,
    queryKey,
    queryParams,
  })

  return (
    <OstiganTable
      page={page}
      tableStyle="admin"
      headInfo={headInfo}
      pageCount={pageCount}
      isLoading={isLoading}
      tableLabel={tableLabel}
      isFetching={isFetching || isLoadingParent}
      addBtnText={tableAddBtnText}
      bodyInfo={bodyInfo(data?.data)}
      afterDeleteHandler={afterDeleteHandler}
      urlDeleteRequest={tableUrlDeleteRequest}
      addNavigationLink={tableAddNavigationLink}
      editNavigationLink={tableEditNavigationLink}
      onChangePage={onChangePage}
      onErrorDelete={onErrorDelete}
    />
  )
}
