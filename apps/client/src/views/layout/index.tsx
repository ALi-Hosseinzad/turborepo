'use client'

import { useDispatch } from 'react-redux'
import { useGetMeAndNotifData } from '@/hooks/useGetMeAndNotifData'
import { useGetWalletData } from '@/hooks/useGetWalletData'
import { handleLoginedUser } from '../login/imports'
import {
  Body,
  Box,
  CssBaseline,
  NavBar,
  type ResponsiveDrawerPropsType,
  SideBarView,
  TopLoader,
  useEffect,
  useSideBarViewModel,
  useState,
} from './import'
import {
  handleNotificationList,
  handleWallet,
} from '@/redux/reducers/persist.slice'

function ResponsiveDrawer(props: ResponsiveDrawerPropsType) {
  const dispatch = useDispatch()
  const {
    isFetchingMe,
    notificationData,
    isFetchingNotif,
    meData,
    refetchNotif,
  } = useGetMeAndNotifData()
  const { isFetchingWallet, walletData } = useGetWalletData()

  const { children } = props
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const { handleDrawerToggle, handleDrawerClose, handleDrawerTransitionEnd } =
    useSideBarViewModel(setMobileOpen, isClosing, setIsClosing)

  useEffect(() => {
    meData && dispatch(handleLoginedUser(meData))
  }, [isFetchingMe])

  useEffect(() => {
    meData?.notification_is_unread && refetchNotif()
  }, [meData?.notification_is_unread])

  useEffect(() => {
    notificationData && dispatch(handleNotificationList(notificationData))
  }, [isFetchingNotif])

  useEffect(() => {
    walletData && dispatch(handleWallet(walletData))
  }, [isFetchingWallet])

  return (
    <Box className="flex">
      <TopLoader />
      <CssBaseline />
      <NavBar handleDrawerToggle={handleDrawerToggle} />
      <SideBarView
        handleDrawerClose={handleDrawerClose}
        handleDrawerTransitionEnd={handleDrawerTransitionEnd}
        mobileOpen={mobileOpen}
      />
      <Body>{children}</Body>
    </Box>
  )
}
export default ResponsiveDrawer
