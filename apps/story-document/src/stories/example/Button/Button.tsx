import { ReactElement } from 'react'
import './Button.css'

interface Props {
  variant?: 'primary' | 'secondary' | 'success' | 'danger'
  children: ReactElement
}

function Button(props: Props) {
  const { variant = 'primary', children, ...rest } = props
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  )
}

export default Button
