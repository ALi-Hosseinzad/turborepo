'use client'

import { UserCircleIcon } from 'ui/components/icons'
import { ProfileMenu } from './profileMenu'

interface NavBarType {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
  showMenu: boolean
}
export const NavBar: React.FC<NavBarType> = ({ setShowMenu, showMenu }) => {
  return (
    <div
      className="flex customWhite lg:px-32 justify-between items-center border-b border-primary/[0.1] bg-customWhite py-3 sticky top-0 z-50"
      aria-hidden="true"
      onClick={() => {
        showMenu && setShowMenu(false)
      }}
    >
      <div className="w-1/4"> </div>
      <div className="relative">
        <div className="flex flex-row-reverse gap-2 lg:gap-6 items-center transition-all	">
          <UserCircleIcon
            className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer z-50  hover:bg-[#fafafa] hover:rounded-full hover:blur-[1px]	"
            color="#737373"
            onClick={() => {
              setShowMenu(!showMenu)
            }}
          />
          {showMenu ? (
            <ProfileMenu
              setShowMenu={(showMenu: boolean) => {
                setShowMenu(!showMenu)
              }}
              showMenu={showMenu}
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}
