import { CircularProgress } from '@mui/material'

export const Spinner = ({
  color = 'var(--primary-default)',
  size = '20px',
}): JSX.Element => {
  return (
    <CircularProgress
      size={size}
      sx={{
        color: { color },
      }}
    />
  )
}
