import { type SidebarItemType } from './componnent'

export interface SideBarViewPropsType {
  handleDrawerClose: () => void
  handleDrawerTransitionEnd: () => void
  mobileOpen: boolean
}

export interface ResponsiveDrawerPropsType {
  children: any
}

interface SidebarListType {
  key: number
  data: any
  active?: string | undefined
  path: any
}

export interface SideBarViewType {
  handleDrawerClose?: any
  handleDrawerTransitionEnd?: any
  mobileOpen?: any
}

export interface UseSideBarViewModelType {
  sidebarList?: SidebarItemType[]
  pathName?: string
  handleDrawerClose?: any
  handleDrawerTransitionEnd?: () => void
  handleDrawerToggle?: () => void
  setMobileOpen?: (open: boolean) => void
  isClosing?: boolean
}