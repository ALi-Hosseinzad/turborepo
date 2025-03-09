export const HelperText = ({ children, className }: any): JSX.Element => {
  return (
    <span className={`text-error-default text-xs ${className}`}>
      {children}
    </span>
  )
}
