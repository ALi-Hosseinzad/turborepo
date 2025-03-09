interface OstiganStatusType {
  text: any
  status: any
  className?: string
}
export const OstiganStatus = ({
  text,
  status,
  className,
}: OstiganStatusType): JSX.Element => {
  let color = ''

  switch (status) {
    case true:
    case 'accepted':
    case 'approved':
    case 'completed':
      color = 'text-success-default bg-tint-100'
      break

    case false:
    case 'rejected':
    case 'failed':
      color = 'text-error-default bg-error-background'
      break

    case 'pendding':
      color = 'text-warning-default bg-warning-background'
      break

    case 'checking':
      color = 'text-blue-800 bg-blue-50'
      break

    default:
      color = 'text-warning-default bg-warning-background'
      break
  }

  return (
    <div
      className={`absolute flex justify-center items-center rounded-lg text-xl py-1 px-5 ${color} ${className}`}
    >
      {text}
    </div>
  )
}
