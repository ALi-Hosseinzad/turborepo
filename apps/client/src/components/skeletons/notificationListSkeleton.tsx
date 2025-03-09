'use client'

import {
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material'
import PaginationSkeleton from './paginationSkeleton'

const NotificationListSkeleton = () => {
  const array = new Array(5).fill('')
  return (
    <div className="bg-white rounded-xl p-6">
      <Paper
        sx={{
          width: '100%',
          overflow: 'hidden',
          borderRadius: '0px',
          boxShadow: 'none',
        }}
        className="z-20"
      >
        <TableContainer sx={{ maxHeight: 'h-screen', overflow: 'auto' }}>
          <Table
            sx={{ minWidth: 400 }}
            aria-labelledby="tableTitle"
            size="small"
          >
            <TableBody>
              {array.map((_row, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell key={index} className="flex w-10">
                      <Skeleton
                        animation="wave"
                        className="!rounded-full !w-10 !h-14 "
                      />
                    </TableCell>
                    <TableCell key={index} className="flex">
                      <Skeleton
                        animation="wave"
                        className="w-20 !h-10 rounded-lg"
                      />
                      <Skeleton
                        animation="wave"
                        className="w-50 !h-10 rounded-lg"
                      />
                    </TableCell>
                    <TableCell key={index} className="flex mr-auto w-20">
                      <Skeleton
                        animation="wave"
                        className="w-20 !h-10 rounded-lg"
                      />
                    </TableCell>
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
  )
}

export default NotificationListSkeleton
