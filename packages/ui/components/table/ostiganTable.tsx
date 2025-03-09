import type { FC } from 'react'
import { TableContainer } from '@mui/material'
import type { TablePropsType } from '../../types'
import { Loading } from '../loading/loading'
import { TableCustom } from './tableCustom'
import { TablePagination } from './tablePagination'
import { TableTitle } from './tableTitle'

export const OstiganTable: FC<TablePropsType> = ({
  page,
  addBtnText,
  bodyInfo,
  headInfo,
  onChangePage,
  pageCount,
  addNavigationLink,
  onExcelAction,
  tableStyle,
  urlDeleteRequest,
  editNavigationLink,
  afterDeleteHandler,
  isLoading,
  showDetailUrl,
  className,
  tableLabel,
  isFetching,
  onErrorDelete,
  tableTitleContent,
  titleClass,
  onClickRow,
}) => {
  return (
    <>
      <Loading isLoading={!isLoading && isFetching} />
      <div className={className}>
        <div className="font-semibold text-xl mb-4">{tableLabel}</div>
        <div className="shadow-table">
          <TableTitle
            addBtnText={addBtnText}
            addNavigationLink={addNavigationLink}
            tableStyle={tableStyle}
            tableTitleContent={tableTitleContent}
            titleClass={titleClass}
            onExcelAction={onExcelAction}
          />
          <TableContainer className="rounded-b-lg">
            <TableCustom
              isLoading={isLoading}
              bodyInfo={bodyInfo}
              headInfo={headInfo}
              tableStyle={tableStyle}
              urlDeleteRequest={urlDeleteRequest}
              editNavigationLink={editNavigationLink}
              afterDeleteHandler={afterDeleteHandler}
              showDetailUrl={showDetailUrl}
              onErrorDelete={onErrorDelete}
              onClickRow={onClickRow}
            />
          </TableContainer>
          {!(!isLoading && pageCount && (pageCount as number) > 1) || (
            <TablePagination
              pageCount={pageCount}
              page={page}
              onChangePage={onChangePage}
            />
          )}
        </div>
      </div>
    </>
  )
}
