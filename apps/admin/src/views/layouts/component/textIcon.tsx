import type { KeyboardEventHandler, MouseEventHandler, ReactNode } from 'react'
import React from 'react'
import { useTranslations } from 'next-intl'

interface TextIconProps {
  Icon?: any
  icon?: ReactNode
  text?: string
  gap?: number
  iconClass?: string
  textClass?: string
  flexRowReverse?: string
  isTranslated?: boolean
  colorIcon?: string
  containerClassName?: string
  onClick?: MouseEventHandler<HTMLDivElement> | undefined
  onKeyDown?: KeyboardEventHandler<HTMLDivElement> | undefined
}

const TextIcon: React.FC<TextIconProps> = ({
  icon,
  text,
  gap,
  textClass,
  flexRowReverse,
  isTranslated = false,
  containerClassName,
  onClick,
  onKeyDown,
}) => {
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (onKeyDown) {
      onKeyDown(event)
    }
  }
  const t = useTranslations()

  return (
    <div
      className={`flex items-center  gap-${gap} ${flexRowReverse} ${containerClassName}`}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      {icon}
      <p className={textClass}>{isTranslated ? t(text) : text}</p>
    </div>
  )
}

export default TextIcon
