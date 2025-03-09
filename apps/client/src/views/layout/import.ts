import NextTopLoader from 'nextjs-toploader'
import React, {
  type FC,
  type KeyboardEventHandler,
  type MouseEvent,
  useEffect,
  useState,
} from 'react'
import { useDispatch } from 'react-redux'
import { usePathname } from 'next/navigation'
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
} from '@mui/material'
import { useTranslations } from 'next-intl'
import type { BodyPropsType } from '@/types/layouts/body'
import type {
  SidebarItemType,
  SideNavItemPropsType,
  TextWithIconSliderType,
  UseDynamicClassNameType,
} from '@/types/layouts/componnent'
import type {
  ResponsiveDrawerPropsType,
  SidebarListType,
  SideBarViewPropsType,
  SideBarViewType,
  UseSideBarViewModelType,
} from '@/types/layouts/sidebarType'
import { DRAWER_WIDTH } from '@/constants/constants'
import AuthAlert from '@/components/authAlert'
import { useRouter } from '@/components/nextIntl/navigation'
import NavigationLink from '@/components/nextIntl/navigationLink'
import {
  CloseIcon,
  DashboardIcon,
  GiftCardIcon,
  OrdersIcon,
  OstiganLogoTintless,
  OstiganLogoWithNameIconWhite,
  PayOnlineIcon,
  TicketIcon,
  UserInfoIcon,
  WalletIcon,
} from 'ui/components/icons'
import Body from './body'
import { SidebarList } from './component/sideBarList'
import TextWithIconSlider from './component/textIcon'
import SideBarItem from './component/textwithIconItem'
import TopLoader from './component/topLoader'
import { useDynamicClassName } from './component/useDynamicClassName'
import { NavBar } from './navbar/index'
import SideBarView from './sidbar/view'
import { useSideBarViewModel } from './sidbar/viewModel'

export {
  useState,
  useDispatch,
  useEffect,
  useTranslations,
  React,
  TextWithIconSlider,
  IconButton,
  useRouter,
  NavigationLink,
  useDynamicClassName,
  usePathname,
  Box,
  Divider,
  Drawer,
  List,
  Toolbar,
  Body,
  CssBaseline,
  SideBarView,
  DRAWER_WIDTH,
  SideBarItem,
  SidebarList,
  OstiganLogoTintless,
  OstiganLogoWithNameIconWhite,
  useSideBarViewModel,
  CloseIcon,
  DashboardIcon,
  GiftCardIcon,
  OrdersIcon,
  PayOnlineIcon,
  TicketIcon,
  UserInfoIcon,
  WalletIcon,
  NavBar,
  NextTopLoader,
  TopLoader,
  AuthAlert,
}
export type {
  FC,
  MouseEvent,
  SidebarItemType,
  UseSideBarViewModelType,
  SideBarViewPropsType,
  SideBarViewType,
  ResponsiveDrawerPropsType,
  SidebarListType,
  BodyPropsType,
  UseDynamicClassNameType,
  TextWithIconSliderType,
  KeyboardEventHandler,
  SideNavItemPropsType,
}
