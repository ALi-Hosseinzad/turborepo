import React from 'react'
import { InputAdornment } from '@mui/material'
import { FormikTextField, OstiganButton } from 'ui'

// import { useAxiosQuery } from '@/hooks/useAxiosQuery'

export const InputSubmit = ({ text }) => {
  // const { data } = useAxiosQuery({url, queryKey})
  return (
    <FormikTextField
      name="message"
      sizeInput="Medium"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <OstiganButton
              variant="contained"
              type="button"
              padding="4px 10px"
              fontSize="14px"
            >
              {text}
            </OstiganButton>
          </InputAdornment>
        ),
      }}
    />
  )
}
