import { MenuNavbar, OstiganLogoWithNameIcon } from '../imports'

const NavbarRight = (props: any): JSX.Element => {
  const { navbarData } = props
  return (
    <div className="flex items-center gap-3 h-full">
      <OstiganLogoWithNameIcon />
      <MenuNavbar menuItems={navbarData?.navbar_items} />
    </div>
  )
}

export default NavbarRight
