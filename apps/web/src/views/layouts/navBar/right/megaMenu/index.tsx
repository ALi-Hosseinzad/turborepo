'use client'

import { MegaMenuView } from './imports'

const MenuNavbar = (props: any): JSX.Element => {
  const { menuItems } = props

  return <MegaMenuView menuItems={menuItems} />
}

export default MenuNavbar
