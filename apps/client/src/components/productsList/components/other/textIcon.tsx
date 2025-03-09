import React from 'react'

export const TextIcon = (props: any): JSX.Element => {
  const {
    icon,
    text,
    gap,
    textClass,
    flexRowReverse,
    onClick,
    containerClassName,
  } = props

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onClick(event)
    }
  }

  return (
    <div
      className={`flex items-center gap-${gap} ${flexRowReverse} ${containerClassName}`}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      {icon}
      <p className={`${textClass}`}>{text}</p>
    </div>
  )
}
