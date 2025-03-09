import { type MouseEvent, type NavBarModalType } from '../import'

export const useNavBarModal = (
  _anchorEl: HTMLElement | null,
  setAnchorEl: any,
): NavBarModalType => {
  const handleClick = (event: MouseEvent<HTMLElement>): any => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): any => {
    setAnchorEl(null)
  }

  return {
    handleClick,
    handleClose,
  }
}
