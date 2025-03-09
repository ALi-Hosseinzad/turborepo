import { UseAccess } from '@/hooks/useAccess'
import { AuthAlert, type BodyPropsType, Box, DRAWER_WIDTH } from '../import'

const Body: React.FC<BodyPropsType> = ({ children }) => {
  const { permissions } = UseAccess()
  return (
    <Box
      component="main"
      sx={{
        overflow: 'hidden',
        flexGrow: 1,
        pb: '24px',
        pt: { xs: '80px', sm: '90px', md: '100px' },
        px: { xs: '6vw', sm: '6vw', md: '7vw', lg: '7vw', xl: '7vw' },
        width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
      }}
    >
      <div className="">
        {permissions?.authAccess?.value ? null : (
          <AuthAlert message={permissions?.authAccess?.message} />
        )}
        {children}
      </div>
    </Box>
  )
}

export default Body
