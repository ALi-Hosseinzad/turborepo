import Button from '@mui/material/Button'
import './OstiganButton.css'

interface ButtonProps {
  primary?: boolean
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large' | 'largex'
  label: string
  onClick?: () => void
}

export const OstiganButton = (
  {
    primary = false,
    size = 'medium',
    backgroundColor,
    label,
    ...props
  }: ButtonProps,
) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary'
  return (
    <Button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' ',
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </Button>
  )
}
