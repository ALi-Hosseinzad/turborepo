import type { FC } from 'react'
import { OstiganTable } from 'ui'
import TableSkeleton from '../skeletons/tableSkeleton'
import TableNotFound from './tableNotFound'
import { useListViewModel } from './viewModel'

export const List: FC<any> = ({
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
  onClickRow,
  tableTitleContent,
  titleClass,
  iconNotFound,
  titleNotFound,
  additionalComponent,
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

  if (isLoading) {
    return <TableSkeleton />
  }
  return (
    <>
      {titleNotFound && data?.data?.length === 0 ? (
        <TableNotFound
          titleNotFound={titleNotFound}
          iconNotFound={iconNotFound}
          additionalComponent={additionalComponent}
        />
      ) : (
        <OstiganTable
          page={page}
          tableStyle="client"
          headInfo={headInfo}
          pageCount={pageCount}
          isLoading={isLoading}
          tableLabel={tableLabel}
          isFetching={isFetching}
          addBtnText={tableAddBtnText}
          bodyInfo={bodyInfo(data?.data)}
          afterDeleteHandler={afterDeleteHandler}
          urlDeleteRequest={tableUrlDeleteRequest}
          addNavigationLink={tableAddNavigationLink}
          editNavigationLink={tableEditNavigationLink}
          tableTitleContent={tableTitleContent}
          titleClass={titleClass}
          onChangePage={onChangePage}
          onErrorDelete={onErrorDelete}
          onClickRow={onClickRow}
        />
      )}
    </>
  )
}
