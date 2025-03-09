'use client'

import {
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
// import BreadCrumbsSkeleton from './breadCrumbsSkeleton'
import PaginationSkeleton from './paginationSkeleton'

const TableSkeleton = () => {
  return (
    <>
      {/* {withoutBreadCrumbs ? <BreadCrumbsSkeleton /> : null} */}
      <div className="bg-white rounded-xl px-6 pt-8">
        <div className="flex flex-col gap-4">
          <Skeleton
            width="100%"
            animation="wave"
            className="!h-16 rounded-lg mb-4 "
          />
          <Paper
            sx={{
              width: '100%',
              overflow: 'hidden',
              borderRadius: '0px',
              boxShadow: 'none',
            }}
            className="z-20"
          >
            <TableContainer sx={{ maxHeight: 440, overflow: 'auto' }}>
              <Table
                sx={{ minWidth: 400 }}
                aria-labelledby="tableTitle"
                size="small"
              >
                <TableHead style={{ backgroundColor: '#E5E5E5' }}>
                  <TableRow>
                    {[0, 1, 2, 3, 4].map((_row, index) => {
                      return (
                        <TableCell key={index}>
                          <Skeleton
                            animation="wave"
                            className="w-28 !h-12 rounded-lg"
                          />
                        </TableCell>
                      )
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[0, 1, 2, 3, 4, 5].map((_row, index) => {
                    return (
                      <TableRow key={index}>
                        {[0, 1, 2, 3, 4].map((_row, index) => {
                          return (
                            <TableCell key={index}>
                              <Skeleton
                                animation="wave"
                                className="w-20 !h-10 rounded-lg"
                              />
                            </TableCell>
                          )
                        })}
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <div className="flex justify-center py-6">
            <PaginationSkeleton />
          </div>
        </div>
      </div>
    </>
  )
}

export default TableSkeleton
