'use client'

import {
  Box,
  CloseIcon,
  Divider,
  Drawer,
  DRAWER_WIDTH,
  List,
  OstiganLogoTintless,
  OstiganLogoWithNameIconWhite,
  SideBarItem,
  type SidebarListType,
  type SideBarViewType,
  Toolbar,
  useSideBarViewModel,
} from '../import'

const SideBarView: React.FC<SideBarViewType> = (props: SideBarViewType) => {
  const { handleDrawerClose, handleDrawerTransitionEnd, mobileOpen } = props
  const { sidebarList, pathName } = useSideBarViewModel()

  const drawer = (
    <>
      <div className="relative">
        <Toolbar>
          <>
            <Box
              sx={{
                display: { sm: 'block', md: 'none' },
              }}
            >
              <CloseIcon
                color="var(--customWhite)"
                className="cursor-pointer"
                onClick={handleDrawerClose}
              />
            </Box>
            <Box
              sx={{
                display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' },
              }}
            >
              <OstiganLogoWithNameIconWhite
                className="w-40  h-12 
          mr-10 mt-5"
              />
            </Box>
          </>
        </Toolbar>
        <Divider className="opacity-5" />
        <List className="!mt-8">
          {sidebarList?.map((item: SidebarListType) => (
            <SideBarItem
              key={item.path}
              data={item}
              active={pathName?.includes(item?.path)}
            />
          ))}
        </List>
      </div>

      <div className="absolute bottom-0 left-0">
        <OstiganLogoTintless className="w-44 h-44" />
      </div>
    </>
  )

  return (
    <Box
      component="nav"
      sx={{
        width: { md: DRAWER_WIDTH },
        flexShrink: { md: 0 },
      }}
      aria-label="menu"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: DRAWER_WIDTH,
            background: 'var(--primary-default) !important',
          },
        }}
        onClose={handleDrawerClose}
        onTransitionEnd={handleDrawerTransitionEnd}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: DRAWER_WIDTH,
            background: 'var(--primary-default) !important',
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

export default SideBarView
