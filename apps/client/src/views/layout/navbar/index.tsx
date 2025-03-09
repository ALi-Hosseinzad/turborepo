'use client'

import {
  HamburgerMenu,
  type NavBarProps,
  NavbarWrapper,
  NotificationMenuView,
  OstiganLogoWithNameIcon,
  ProfileMenuView,
  useNavBarModal,
  UseNavbarViewModel,
  WalletMenuView,
} from './import'

export const NavBar: React.FC<NavBarProps> = ({ handleDrawerToggle }) => {
  const { userData, anchorEl, setAnchorEl } = UseNavbarViewModel()

  const { handleClick, handleClose } = useNavBarModal(anchorEl, setAnchorEl)

  return (
    <NavbarWrapper>
      <div className="flex w-full justify-between">
        <HamburgerMenu onClick={handleDrawerToggle} />
        <OstiganLogoWithNameIcon className="w-18 flex md:hidden " />
        <div className="flex flex-row-reverse gap-3 md:gap-6 items-center">
          <ProfileMenuView
            userData={userData}
            handleClose={handleClose}
            anchorEl={anchorEl}
            onClick={handleClick}
          />
          <NotificationMenuView userData={userData} />
          <WalletMenuView userData={userData} />
        </div>
      </div>
    </NavbarWrapper>
  )
}
