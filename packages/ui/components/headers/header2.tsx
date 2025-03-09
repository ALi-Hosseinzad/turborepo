import type { HeadersType } from '../../types'

export const Header2: React.FC<HeadersType> = ({
  title,
  className,
}): JSX.Element => {
  return (
    <div
      className={`${className} text-lg text-trueGray-800 font-semibold leading-9 pb-8`}
    >
      <span>{title}</span>
    </div>
  )
}
