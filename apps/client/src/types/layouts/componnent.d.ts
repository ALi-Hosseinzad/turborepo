import type { KeyboardEventHandler, MouseEventHandler, ReactNode } from 'react'

export interface DataUseDynamicClassType {
  icon?: any
  title?: string
  path?: string
  isDisabled?: boolean | undefined
}

export type UseDynamicClassNameType = (
  data?: DataUseDynamicClassType,
  active?: boolean,
  isMobile?: boolean,
  showSideNav?: boolean,
) => string

export interface TextWithIconSliderType {
  Icon?: any
  icon?: any
  text?: string
  sliderClass?: string
  iconClass?: string
  textClass?: string
  flexRowReverse?: string
  isTranslated?: boolean
  colorIcon?: string
  containerClassName?: string
  onClick?: MouseEventHandler<HTMLDivElement> | undefined
  onKeyDown?: KeyboardEventHandler<HTMLDivElement> | undefined
}

export interface SidebarItemType {
  title?: string
  path?: string
  label?: string
  isDisabled?: boolean
  icon?: ReactNode
}
export interface SideNavItemPropsType {
  data?: any
  onClick?: () => void
  onMouseDown?: (event: MouseEvent) => void
  onContextMenu?: (event: MouseEvent) => void
  active?: boolean | undefined
}

