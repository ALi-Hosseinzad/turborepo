import React from 'react'
import { Pagination } from '@mui/material'

const PaginationSkeleton = () => {
  return (
    <Pagination
      count={4}
      color="standard"
      shape="rounded"
      disabled
      sx={{
        '.css-1to7aaw-MuiButtonBase-root-MuiPaginationItem-root': {
          fontFamily: 'IRANSansXFaNum',
        },
        '.css-1pi9rcw-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected': {
          backgroundColor: '#E5E5E5',
        },
      }}
    />
  )
}

export default PaginationSkeleton
