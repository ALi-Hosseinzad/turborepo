'use client'

import { useState } from 'react'
import styled from '@emotion/styled'
import { Box, Grid, Modal, Paper, Typography } from '@mui/material'
import {
  AdminEditIcon,
  AlertIcon,
  AparatIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowToSideDownIcon,
  ArrowToSideLeftIcon,
  ArrowToSideRightIcon,
  ArrowToSideTopIcon,
  AttachIcon,
  AttachPictureIcon,
  BankInfoIcon,
  BarcodeIcon,
  BellIcon,
  BoxCloseIcon,
  CalendarIcon,
  CategoryIcon,
  CheckIcon,
  CloseCircleIcon,
  CloseIcon,
  CoinIcon,
  ConfirmationIcon,
  ConfirmTheListIcon,
  CreditCardIcon,
  DashboardIcon,
  DashBulletIcon,
  DeleteIcon,
  DeliveryIcon,
  DescriptionIcon,
  DiscountPriceIcon,
  DiscountRedDotIcon,
  EditIcon,
  ElectronicsIcon,
  EmailIcon,
  ErrExclamationMark,
  ErrHill,
  ExclamationMarkIcon,
  FlagDiscountIcon,
  FlagDiscountSkeletonIcon,
  FlagDiscountVerticalIcon,
  FlagUSIcon,
  FolderIcon,
  FooterPathIcon,
  FullConfirmationIcon,
  GiftCardBoxIcon,
  GiftCardCodeIcon,
  GiftCardIcon,
  GiftCardsIcon,
  GiftIcon,
  GuildInformationIcon,
  HamburgerMenuIcon,
  IdentificationIcon,
  IdentityConfirmationIcon,
  InactiveIcon,
  InstagramIcon,
  LocationIcon,
  LoginOstiganIcon,
  LogOutIcon,
  LoveIcon,
  MinusIcon,
  NotFoundSearchIcon,
  NotLoveIcon,
  OrdersIcon,
  OstiganLogoEnIcon,
  OstiganLogoFaIcon,
  OstiganLogoIcon,
  OstiganLogoTintless,
  OstiganLogoWithBgIcon,
  OstiganLogoWithNameIcon,
  OstiganLogoWithNameIconWhite,
  OstiganMenuIcon,
  PayOnlineIcon,
  PerfectMoneyIcon,
  PhoneCallingIcon,
  PhoneIcon,
  PlayStationCardIcon,
  PlusCircleIcon,
  PlusFillCircleIcon,
  PlusIcon,
  PrintIcon,
  RegionsIcon,
  RolesIcon,
  SaveIcon,
  ScurityIcon,
  SearchIcon,
  SearchIcon1,
  SettingIcon,
  ShadowIcon,
  TelegramIcon,
  TickedBoxIcon,
  TicketIcon,
  ToastIconError,
  ToastIconSuccess,
  ToastIconwarning,
  TrackingOrdersIcon,
  UploadIcon,
  UserAdminCircleIcon,
  UserAuthenticationIcon,
  UserBankCardIcon,
  UserCircleIcon,
  UserEditAccountIcon,
  UserGuildIcon,
  UserIcon,
  UserInfoIcon,
  UserRoundSquareIcon,
  UsersIcon,
  UserSquareIcon,
  UserSquareThreeLinesIcon,
  WalletIcon,
  YoutubeIcon,
} from './icons'

export const ShowIcons: React.FC = () => {
  const [selectedIcon, setSelectedIcon] = useState<IconData | null>(null)

  const handleIconClick = (icon: IconData): void => {
    setSelectedIcon(icon)
  }
  const handleClose = (): void => {
    setSelectedIcon(null)
  }

  return (
    <div
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      <Grid container spacing={2}>
        {icons.map((icon) => (
          <Grid item xs={2} key={Math.random()}>
            <Item
              onClick={() => {
                handleIconClick(icon)
              }}
            >
              <div
                style={{
                  width: 'auto',
                  height: 'auto',
                  margin: '10px',
                  textAlign: 'center',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
              >
                {icon.component}
                <Typography variant="caption">{icon.name}</Typography>
              </div>
            </Item>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={Boolean(selectedIcon)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        onClose={handleClose}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            textAlign: 'center',
          }}
        >
          {selectedIcon ? (
            <>
              <Typography id="modal-title" variant="h6" component="h2">
                {selectedIcon?.name}
              </Typography>
              <Box id="modal-description" sx={{ mt: 2 }}>
                {selectedIcon?.component}
              </Box>
            </>
          ) : null}
        </Box>
      </Modal>
    </div>
  )
}

const icons: IconData[] = [
  { component: <OstiganLogoEnIcon />, name: 'OstiganLogoEnIcon' },
  { component: <DescriptionIcon />, name: '  DescriptionIcon' },
  { component: <OstiganLogoFaIcon />, name: 'OstiganLogoFaIcon' },
  { component: <OstiganLogoIcon />, name: 'OstiganLogoIcon' },
  { component: <OstiganLogoWithBgIcon />, name: 'OstiganLogoWithBgIcon' },
  { component: <OstiganLogoWithNameIcon />, name: 'OstiganLogoWithNameIcon' },
  {
    component: <OstiganLogoWithNameIconWhite />,
    name: 'OstiganLogoWithNameIconWhite',
  },
  { component: <OstiganLogoTintless />, name: 'OstiganLogoTintless' },
  { component: <LoginOstiganIcon />, name: 'LoginOstiganIcon' },
  { component: <OstiganMenuIcon />, name: 'OstiganMenuIcon' },
  { component: <UserAdminCircleIcon />, name: 'UserAdminCircleIcon' },
  { component: <UserAuthenticationIcon />, name: 'UserAuthenticationIcon' },
  { component: <UserBankCardIcon />, name: 'UserBankCardIcon' },
  { component: <UserCircleIcon />, name: 'UserCircleIcon' },
  { component: <UserEditAccountIcon />, name: 'UserEditAccountIcon' },
  { component: <UserIcon />, name: 'UserIcon' },
  { component: <UserInfoIcon />, name: 'UserInfoIcon' },
  { component: <UserRoundSquareIcon />, name: 'UserRoundSquareIcon' },
  { component: <UserSquareThreeLinesIcon />, name: 'UserSquareThreeLinesIcon' },
  { component: <UserSquareIcon />, name: 'UserSquareIcon' },
  { component: <UserGuildIcon />, name: 'UserGuildIcon' },
  { component: <GiftCardsIcon />, name: 'GiftCardsIcon' },
  { component: <UsersIcon />, name: 'UsersIcon' },
  { component: <CategoryIcon />, name: 'CategoryIcon' },
  { component: <RolesIcon />, name: 'RolesIcon' },
  { component: <TrackingOrdersIcon />, name: 'TrackingOrdersIcon' },
  { component: <RegionsIcon />, name: 'RegionsIcon' },
  { component: <FlagDiscountIcon />, name: 'FlagDiscountIcon' },
  { component: <FlagDiscountSkeletonIcon />, name: 'FlagDiscountSkeletonIcon' },
  { component: <FlagDiscountVerticalIcon />, name: 'FlagDiscountVerticalIcon' },
  { component: <FlagUSIcon />, name: 'FlagUSIcon' },
  { component: <ArrowDownIcon />, name: 'ArrowDownIcon' },
  { component: <ArrowLeftIcon />, name: 'ArrowLeftIcon' },
  { component: <ArrowToSideDownIcon />, name: 'ArrowToSideDownIcon' },
  { component: <ArrowToSideLeftIcon />, name: 'ArrowToSideLeftIcon' },
  { component: <ArrowToSideRightIcon />, name: 'ArrowToSideRightIcon' },
  { component: <ArrowToSideTopIcon />, name: 'ArrowToSideTopIcon' },
  { component: <ToastIconwarning />, name: 'ToastIconwarning' },
  { component: <ToastIconError />, name: 'ToastIconError' },
  { component: <ToastIconSuccess />, name: 'ToastIconSuccess' },
  { component: <YoutubeIcon />, name: 'YoutubeIcon' },
  { component: <AparatIcon />, name: 'AparatIcon' },
  { component: <TelegramIcon />, name: 'TelegramIcon' },
  { component: <InstagramIcon />, name: 'InstagramIcon' },
  { component: <FolderIcon />, name: 'FolderIcon' },
  { component: <TickedBoxIcon />, name: 'TickedBoxIcon' },
  { component: <BoxCloseIcon />, name: 'BoxCloseIcon' },
  { component: <BarcodeIcon />, name: 'BarcodeIcon' },
  { component: <ConfirmTheListIcon />, name: 'ConfirmTheListIcon' },
  { component: <IdentificationIcon />, name: 'IdentificationIcon' },
  { component: <ElectronicsIcon />, name: 'ElectronicsIcon' },
  { component: <DeliveryIcon />, name: 'DeliveryIcon' },
  { component: <BankInfoIcon />, name: 'BankInfoIcon' },
  { component: <AlertIcon />, name: 'AlertIcon' },
  { component: <AttachIcon />, name: 'AttachIcon' },
  { component: <AttachPictureIcon />, name: 'AttachPictureIcon' },
  { component: <BellIcon />, name: 'BellIcon' },
  { component: <CalendarIcon />, name: 'CalendarIcon' },
  { component: <CheckIcon />, name: 'CheckIcon' },
  { component: <CloseCircleIcon />, name: 'CloseCircleIcon' },
  { component: <CloseIcon />, name: 'CloseIcon' },
  { component: <CoinIcon />, name: 'CoinIcon' },
  { component: <ConfirmationIcon />, name: 'ConfirmationIcon' },
  { component: <IdentityConfirmationIcon />, name: 'IdentityConfirmationIcon' },
  { component: <FullConfirmationIcon />, name: 'FullConfirmationIcon' },
  { component: <GuildInformationIcon />, name: 'GuildInformationIcon' },
  { component: <CreditCardIcon />, name: 'CreditCardIcon' },
  { component: <DashBulletIcon />, name: 'DashBulletIcon' },
  { component: <DashboardIcon />, name: 'DashboardIcon' },
  { component: <DeleteIcon />, name: 'DeleteIcon' },
  { component: <EditIcon />, name: 'EditIcon' },
  { component: <AdminEditIcon />, name: 'AdminEditIcon' },
  { component: <DiscountPriceIcon />, name: 'DiscountPriceIcon' },
  { component: <DiscountRedDotIcon />, name: 'DiscountRedDotIcon' },
  { component: <EmailIcon />, name: 'EmailIcon' },
  { component: <ErrExclamationMark />, name: 'ErrExclamationMark' },
  { component: <ErrHill />, name: 'ErrHill' },
  { component: <ExclamationMarkIcon />, name: 'ExclamationMarkIcon' },
  { component: <GiftCardBoxIcon />, name: 'GiftCardBoxIcon' },
  { component: <GiftCardCodeIcon />, name: 'GiftCardCodeIcon' },
  { component: <GiftCardIcon />, name: 'GiftCardIcon' },
  { component: <GiftIcon />, name: 'GiftIcon' },
  { component: <HamburgerMenuIcon />, name: 'HamburgerMenuIcon' },
  { component: <InactiveIcon />, name: 'InactiveIcon' },
  { component: <LogOutIcon />, name: 'LogOutIcon' },
  { component: <LoveIcon />, name: 'LoveIcon' },
  { component: <MinusIcon />, name: 'MinusIcon' },
  { component: <NotLoveIcon />, name: 'NotLoveIcon' },
  { component: <OrdersIcon />, name: 'OrdersIcon' },
  { component: <PayOnlineIcon />, name: 'PayOnlineIcon' },
  { component: <PerfectMoneyIcon />, name: 'PerfectMoneyIcon' },
  { component: <PhoneIcon />, name: 'PhoneIcon' },
  { component: <PhoneCallingIcon />, name: 'PhoneCallingIcon' },
  { component: <PlayStationCardIcon />, name: 'PlayStationCardIcon' },
  { component: <PlusCircleIcon />, name: 'PlusCircleIcon' },
  { component: <PlusFillCircleIcon />, name: 'PlusFillCircleIcon' },
  { component: <PlusIcon />, name: 'PlusIcon' },
  { component: <PrintIcon />, name: 'PrintIcon' },
  { component: <SaveIcon />, name: 'SaveIcon' },
  { component: <ScurityIcon />, name: 'ScurityIcon' },
  { component: <NotFoundSearchIcon />, name: 'NotFoundSearchIcon' },
  { component: <SearchIcon />, name: 'SearchIcon' },
  { component: <SearchIcon1 />, name: 'SearchIcon1' },
  { component: <SettingIcon />, name: 'SettingIcon' },
  { component: <ShadowIcon />, name: 'ShadowIcon' },
  { component: <TicketIcon />, name: 'TicketIcon' },
  { component: <WalletIcon />, name: 'WalletIcon' },
  { component: <UploadIcon />, name: 'UploadIcon' },
  { component: <LocationIcon />, name: 'LocationIcon' },
  { component: <FooterPathIcon />, name: 'FooterPathIcon' },
  // { component: <DiscountVerticalFlagIcon />, name: 'DiscountVerticalFlagIcon' },
]

interface IconData {
  component: JSX.Element
  name: string
}

const Item = styled(Paper)(() => ({
  backgroundColor: 'gray',
  textAlign: 'center',
  padding: '10px',
}))
