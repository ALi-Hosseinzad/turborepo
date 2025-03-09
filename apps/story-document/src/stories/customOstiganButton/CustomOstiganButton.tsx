import { OstiganButton } from '../../../../../packages/ui/components/elements/button/ostiganButton'
import './CustomOstiganButton.css'

interface ButtonProps {
  styleType?: 'error' | 'success'
  variant: 'text' | 'outlined' | 'contained'
  children: string
}

export const CustomOstiganButton = (props: ButtonProps) => {
  const {
    variant = 'contained',
    styleType = 'success',
    children,
    ...rest
  } = props

  return (
    <OstiganButton
      variant={variant}
      type="button"
      styleType={styleType}
      // className={` ${styleType}`}
      {...rest}
    >
      {children}
    </OstiganButton>
  )
}
