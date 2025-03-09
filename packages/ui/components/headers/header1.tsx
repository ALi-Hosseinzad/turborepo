import type { HeadersType } from '../../types'

export const Header1: React.FC<HeadersType> = ({
  title,
  className,
  children,
}): JSX.Element => {
  return (
    <div
      className={`text-lg md:text-xl text-trueGray-900 font-semibold leading-[30px] pb-8 ${className}`}
    >
      <span>{title}</span>
      {children}
    </div>
  )
}
