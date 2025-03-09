import {
  AppBar,
  DRAWER_WIDTH,
  type NavbarWrapperProps,
  Toolbar,
} from '../import'

const NavbarWrapper: React.FC<NavbarWrapperProps> = ({ children }) => {
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { md: `${DRAWER_WIDTH}px` },
          px: { xs: '5vw', sm: '6vw', md: '7vw', lg: '7vw', xl: '7vw' },
          py: '10px',
          background: 'var(--customWhite)',
          borderWidth: '1px',
          boxShadow: 'none',
          borderBottomColor: 'rgba(var(--primary-default), 0.3)',
        }}
      >
        <Toolbar sx={{ px: { xs: '0px' } }}>{children}</Toolbar>
      </AppBar>
    </div>
  )
}

export default NavbarWrapper
