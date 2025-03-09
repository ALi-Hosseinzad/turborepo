import React from 'react'

export const TextWithIcon = (props: any): JSX.Element => {
  const {
    icon,
    text,
    gap = 2,
    textClass,
    flexRowReverse,
    onClick,
    containerClassName,
  } = props
  return (
    <button
      type="button"
      className={`flex items-center cursor-default gap-${gap} ${flexRowReverse} ${containerClassName}`}
      onClick={onClick}
    >
      {icon}
      <p className={textClass}>{text}</p>
    </button>
  )
}
