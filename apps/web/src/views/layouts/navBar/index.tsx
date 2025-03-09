'use client'

import { NavbarView, useNavbar } from './imports'

const Navbar = (): JSX.Element => {
  const { navbarData } = useNavbar()

  return <NavbarView navbarData={navbarData} />
}

export default Navbar
