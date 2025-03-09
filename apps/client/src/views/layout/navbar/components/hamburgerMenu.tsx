import { HamburgerMenuIcon, IconButton } from '../import'

interface HamburgerMenuProps {
  onClick?: () => void
}
const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClick }) => {
  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        sx={{ display: { md: 'none' } }}
        onClick={onClick}
      >
        <HamburgerMenuIcon className="w-8 h-8 fill-black cursor-pointer" />
      </IconButton>
    </div>
  )
}

export default HamburgerMenu
