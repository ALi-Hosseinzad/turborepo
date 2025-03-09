import React, {
  type FC,
  type KeyboardEventHandler,
  type MouseEvent,
  useEffect,
  useState,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  Popover,
  Toolbar,
} from '@mui/material'
import { useTranslations } from 'next-intl'
import { clearLocalStorage, OstiganTextField, removeCookie } from 'ui'
import type { SidebarItemType } from '@/types/layouts/componnent'
import type {
  NavBarModalType,
  NavBarProps,
  NavbarViewModelType,
  NavbarWrapperProps,
  ProfileMenuViewProps,
  ProfileModalPropsType,
  UserData,
  UserNameType,
  WalletMenuViewProps,
} from '@/types/layouts/navBarType'
import UseTomanToRial from '@/hooks/useTomanToRial'
import { DRAWER_WIDTH } from '@/constants/constants'
import { LOGIN } from '@/constants/routes'
import { useRouter } from '@/components/nextIntl/navigation'
import NavigationLink from '@/components/nextIntl/navigationLink'
import TextWithIconSlider from '../component/textIcon'
import {
  BellIcon,
  CloseIcon,
  HamburgerMenuIcon,
  LogOutIcon,
  OstiganLogoWithNameIcon,
  UserAuthenticationIcon,
  UserEditAccountIcon,
  UserInfoIcon,
  WalletIcon,
} from 'ui/components/icons'
import HamburgerMenu from './components/hamburgerMenu'
import NavbarWrapper from './components/navbarWrapper'
import ProfileModal from './components/profileModal'
import { ProfileModalList } from './components/profileModalList'
import { useNavBarModal } from './components/useNavBarModal'
import UseNavbarViewModel from './components/useNavbarViewModel'
import UseProfileLevel from './components/useProfileLevel'
import UseProfileName from './components/useProfileName'
import NotificationMenuView from './notification/view'
import ProfileMenuView from './profile/view'
import WalletMenuView from './wallet/view'
import CustomBadge from '@/libs/MUI/customBadge'
import { handleLogout } from '@/redux/reducers/auth.slice'
import { removePersist } from '@/redux/reducers/persist.slice'
import type { RootState } from '@/redux/store'

export {
  useState,
  useSelector,
  useDispatch,
  UseProfileName,
  UseProfileLevel,
  useEffect,
  removePersist,
  handleLogout,
  useTranslations,
  React,
  clearLocalStorage,
  removeCookie,
  TextWithIconSlider,
  LOGIN,
  Avatar,
  IconButton,
  AppBar,
  OstiganTextField,
  ProfileModal,
  ProfileModalList,
  HamburgerMenuIcon,
  useNavBarModal,
  ProfileMenuView,
  NavbarWrapper,
  Popover,
  useRouter,
  NavigationLink,
  Box,
  Divider,
  List,
  Toolbar,
  CustomBadge,
  Drawer,
  DRAWER_WIDTH,
  CloseIcon,
  UserInfoIcon,
  WalletIcon,
  UserAuthenticationIcon,
  UserEditAccountIcon,
  LogOutIcon,
  BellIcon,
  HamburgerMenu,
  NotificationMenuView,
  WalletMenuView,
  UseTomanToRial,
  OstiganLogoWithNameIcon,
  UseNavbarViewModel,
}
export type {
  FC,
  RootState,
  MouseEvent,
  SidebarItemType,
  NavBarProps,
  KeyboardEventHandler,
  WalletMenuViewProps,
  ProfileMenuViewProps,
  UserData,
  UserNameType,
  NavBarModalType,
  NavbarWrapperProps,
  ProfileModalPropsType,
  NavbarViewModelType,
}
