import React from 'react'
import { Badge } from '@mui/material'

const CustomBadge = ({ icon, invisible = false }) => {
  return (
    <Badge
      badgeContent=""
      variant="dot"
      color="error"
      invisible={invisible}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      {icon}
    </Badge>
  )
}

export default CustomBadge
