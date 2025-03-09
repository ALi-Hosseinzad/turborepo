'use client'

import NavbarLeft from './left/view'
import NavbarRight from './right/view'

// TODO:TYPE ANY
const NavbarView = (props: any): JSX.Element => {
  const { navbarData } = props

  return (
    <div className="bg-white h-[86px] flex items-center px-[200px] justify-between">
      <NavbarRight navbarData={navbarData} />
      <NavbarLeft />
    </div>
  )
}

export default NavbarView
