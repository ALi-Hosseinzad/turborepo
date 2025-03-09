import {
  type SidebarItemType,
  SidebarList,
  usePathname,
  type UseSideBarViewModelType,
} from '../import'

export const useSideBarViewModel = (
  setMobileOpen?: any,
  isClosing?: boolean | undefined,
  setIsClosing?: any,
): UseSideBarViewModelType => {
  const sidebarList: SidebarItemType[] = SidebarList()
  const pathName: string = usePathname()

  const handleDrawerClose = () => {
    setIsClosing(true)
    setMobileOpen(false)
  }

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false)
  }

  const handleDrawerToggle = () => {
    setMobileOpen((mobileOpen: any) => !mobileOpen)
  }

  return {
    sidebarList,
    pathName,
    handleDrawerClose,
    handleDrawerTransitionEnd,
    handleDrawerToggle,
    setMobileOpen,
    isClosing,
  }
}
