import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useDispatch } from 'react-redux'
import {
  Avatar,
  Box,
  clearLocalStorage,
  CloseIcon,
  Divider,
  Drawer,
  DRAWER_WIDTH,
  handleLogout,
  LOGIN,
  LogOutIcon,
  NavigationLink,
  Popover,
  ProfileModalList,
  type ProfileModalPropsType,
  removeCookie,
  removePersist,
  type SidebarItemType,
  TextWithIconSlider,
  UseProfileLevel,
  UseProfileName,
  useRouter,
  UseTomanToRial,
  useTranslations,
  WalletIcon,
} from '../import'
import { handleLoginStep } from '@/redux/reducers/auth.slice'

const ProfileModal: React.FC<ProfileModalPropsType> = ({
  handleClose,
  anchorEl,
  userData,
}) => {
  const isDesktop = useMediaQuery('(min-width:1024px)')
  const router = useRouter()
  const profileModalLists: SidebarItemType[] = ProfileModalList()
  const open = Boolean(anchorEl)
  const t = useTranslations()
  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(handleLogout())
    dispatch(removePersist())
    removeCookie('token')
    removeCookie('hasVerified')
    clearLocalStorage()
    router.push(LOGIN)
    dispatch(handleLoginStep('initStep'))
  }

  const id = open ? 'simple-popover' : undefined
  const ProfileModelMenu = (
    <Box
      sx={{
        paddingY: { xs: '25px', md: '10px' },
        paddingX: { xs: '16px', md: '10px' },
      }}
    >
      <CloseIcon
        fill="var(--trueGray-900)"
        className="cursor-pointer w-8 h-10  md:hidden"
        onClick={handleClose}
      />
      <div className="flex mt-5 mb-4 flex-col gap-4 md:hidden">
        <div className="flex flex-row items-center w-full gap-3">
          <Avatar
            className="cursor-pointer"
            alt="User Avatar"
            src={userData?.avatar?.path}
            sx={{
              width: { xs: 50, sm: 55 },
              height: { xs: 50, sm: 55 },
            }}
          />
          <p className="text-medium-sm leading-0">{UseProfileName(userData)}</p>
        </div>
        <p className="py-3 px-4 rounded text-medium-base text-primary-default bg-tint-200">
          {UseProfileLevel(userData)}
        </p>
        <div className="flex flex-row items-center justify-between w-full gap-3">
          <NavigationLink
            className="p-2 flex justify-start items-center gap-4 rounded-md md:hover:bg-tint-200"
            href="/wallet"
          >
            <TextWithIconSlider
              icon={<WalletIcon className="w-6 h-6 ml-3" color="#737373" />}
              text={t('wallet')}
              sliderClass="gap-1"
              textClass="text-medium-sm sm:text-medium-base !text-[#404040]"
            />
          </NavigationLink>
          <div>
            <span className="text-normal-sm">
              {userData?.balance ? UseTomanToRial(userData.balance) : 0}
            </span>
            <span className="text-normal-xs"> {t('rial')}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-1">
        {profileModalLists.map((item) => (
          <NavigationLink
            key={item.path}
            className="p-2 flex justify-start items-center gap-4 rounded-md md:hover:bg-tint-200"
            href={item.path}
          >
            <TextWithIconSlider
              icon={item.icon}
              text={item.title}
              sliderClass="gap-1"
              textClass="text-medium-sm sm:text-medium-base !text-[#404040]"
            />
          </NavigationLink>
        ))}
        <Divider className="opacity-90" />
        <button
          type="button"
          className="p-2 flex justify-start items-center gap-4 rounded-md md:hover:bg-tint-200"
          onClick={handleLogOut}
        >
          <TextWithIconSlider
            icon={
              <LogOutIcon
                className="w-6 h-6 ml-3"
                color="var(--error-default)"
              />
            }
            text={t('logout')}
            sliderClass="gap-1"
            textClass="text-medium-sm sm:text-medium-base !text-[#404040]"
          />
        </button>
      </div>
    </Box>
  )
  return (
    <>
      {isDesktop ? (
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 0, left: 0 }}
          disableScrollLock={false}
          slotProps={{
            root: {
              sx: {
                position: 'fixed',
              },
            },
            paper: {
              sx: {
                height: {
                  md: 'min-content !important',
                },
                width: {
                  md: '254px !important',
                },
                maxWidth: {
                  md: '254px !important',
                },
                maxHeight: {
                  md: 'min-content !important',
                },
                top: {
                  md: '67px !important',
                },
                right: {
                  md: '132px !important',
                },
                position: 'fixed',
              },
            },
          }}
          onClose={handleClose}
        >
          {ProfileModelMenu}
        </Popover>
      ) : (
        <Drawer
          variant="temporary"
          open={open}
          anchor="right"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              background: 'var(--customWhite) !important',
            },
          }}
          onClose={handleClose}
          // onTransitionEnd={handleDrawerTransitionEnd}
        >
          {ProfileModelMenu}
        </Drawer>
      )}
    </>
  )
}

export default ProfileModal
