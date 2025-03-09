import Pagination from '@mui/material/Pagination'
import type { PaginationType } from '../../../types'

const paginationSx = {
  '.css-1to7aaw-MuiButtonBase-root-MuiPaginationItem-root': {
    fontFamily: 'iransans',
  },
  '.Mui-selected': {
    backgroundColor: 'var(--primary-default)!important',
    color: 'white!important',
    borderRadius: '6px!important',
  },
}

export const TablePagination = ({
  onChangePage,
  pageCount,
  page,
}: PaginationType): React.ReactElement => {
  return (
    <Pagination
      className="pt-12 flex justify-center pb-5 bg-white"
      count={Number(pageCount)}
      page={Number(page)}
      shape="rounded"
      sx={paginationSx}
      onChange={(_e, page) => {
        onChangePage?.(page)
      }}
    />
  )
}
