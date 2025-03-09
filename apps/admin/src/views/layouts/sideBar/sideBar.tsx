'use client'

import React, { useRef } from 'react'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useDynamicClassName } from '../component/useDynamicClassName'
import {
  // CloseIcon,
  OstiganLogoTintless,
  OstiganLogoWithNameIconWhite,
} from 'ui/components/icons'
import SideBarItem from './components/sideBarItem'
import { SidebarList } from './components/sideBarList'

// import useWindowDimensions from 'hooks/useWindowDimension'
// import { CloseWithOnClickScreen } from "./closeWithOnclickScreen"

interface SideNavProps {
  showSideNav?: boolean
  isMobile?: boolean
}

export const SideBar: React.FC<SideNavProps> = ({ showSideNav, isMobile }) => {
  const pathName = usePathname()
  const t = useTranslations()
  const sidebarList = SidebarList(t)
  const ref = useRef<HTMLDivElement>(null)
  // const { width } = useWindowDimensions()
  // const [whichIcon, setWhichIcon] = useState<boolean>(true)

  // useEffect(() => {
  //   if (width !== null) {
  //     if (width > 1024) setWhichIcon(true)
  //     if (width < 1024) setWhichIcon(false)
  //   }
  // }, [width])

  const dynamicClassName = useDynamicClassName(
    undefined,
    false,
    Boolean(isMobile),
    Boolean(showSideNav),
  )
  const baseClassName =
    'overflow-y-scroll bg-primary-default fixed top-0 bottom-0 right-0 lg:max-w-[320px] lg:w-1/5 md:w-1/4 sm:w-1/3 w-[100px] z-[1000]'
  const finalClassName = `${baseClassName} ${dynamicClassName}`

  return (
    <>
      <div ref={ref} className={finalClassName}>
        <div className="flex flex-col lg:gap-4 gap-2 lg:pt-0 ">
          <div className=" lg:pt-7   py-2 px-8 lg:px-0">
            {/* {whichIcon ? ( */}
            <div className="flex lg:justify-start px-8">
              <OstiganLogoWithNameIconWhite className="h-9 w-40" />
            </div>
            {/* ) : (
              <CloseIcon
              // onClick={() => setShowSideNav(false)}
              />
            )} */}
          </div>
          {sidebarList.map((item) => (
            <SideBarItem
              key={Math.random()}
              data={item}
              active={pathName.includes(item.path)}
              // disabledItem={item.isDisabled}
              // pathlink={item.path}
              // onclick={() => width <= 1024 && setShowSideNav(false)}
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 ">
          <OstiganLogoTintless />
        </div>
      </div>

      {/* <CloseWithOnClickScreen
        showModal={showSideNav}
        setShowModal={setShowSideNav}
        modalRef={ref}
      /> */}
    </>
  )
}
