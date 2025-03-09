import Cookies from 'js-cookie'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { LOGIN } from 'constants/routes'
import TextIcon from '../component/textIcon'
import { LogOutIcon } from 'ui/components/icons'

interface ProfileMenuType {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
  showMenu: boolean
}

export const ProfileMenu: React.FC<ProfileMenuType> = ({
  setShowMenu,
  showMenu,
}): JSX.Element => {
  const t = useTranslations('')
  const router = useRouter()

  const clearCookie = (): void => {
    Cookies.remove('token')
  }

  const logout = (): void => {
    clearCookie()
    localStorage.clear()
  }

  return (
    <div
      aria-hidden="true"
      className=" flex flex-col gap-3 lg:absolute lg:top-16 lg:left-0 lg:rounded-md shadow-md lg:w-64 bg-white max-lg:fixed max-lg:top-0 max-lg:bottom-0 max-lg:left-0 sm:w-1/3 w-full z-[999] max-sm:px-6 p-3 transition-all duration-[2000ms]"
      onClick={() => {
        setShowMenu(showMenu)
      }}
    >
      <TextIcon
        icon={<LogOutIcon color="#F5455B" />}
        text={t('logout')}
        textClass="p-2 m-1 cursor-pointer 	"
        containerClassName="hover:bg-[#f3fffc] hover:rounded-lg "
        onClick={() => {
          logout()
          router.push(LOGIN)
        }}
      />
    </div>
  )
}
