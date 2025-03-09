'use client'

import React, { useState } from 'react'
import { NavBar } from '../navBar/navBar'
import { SideBar } from '../sideBar/sideBar'

const DashbordLayout = (props: any): JSX.Element => {
  const { Children } = props
  const [showMenu, setShowMenu] = useState(false)
  //   const { width } = useWindowDimensions()
  return (
    <div
      className="flex w-full  "
      aria-hidden="true"
      onClick={() => {
        showMenu && setShowMenu(!showMenu)
      }}
    >
      {/* {width > 1024 && ( */}
      <div className="lg:w-[17%]">
        <SideBar />
      </div>
      {/* )} */}
      <div className="w-full lg:w-[83%]  ">
        <NavBar
          showMenu={showMenu}
          setShowMenu={() => {
            setShowMenu(!showMenu)
          }}
        />
        <div className="h-screen ">
          <div className="inset-0 py-5 px-32 overflow-y-scroll">{Children}</div>
        </div>
      </div>
    </div>
  )
}

export default DashbordLayout
