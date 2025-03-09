'use client'

import React, { useState } from 'react'
import * as yup from 'yup'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import {
  ConfirmModal,
  FormikSelect,
  FormikTextField,
  Header2,
  LabelField,
  Loading,
  OstiganAutoComplete,
  OstiganButton,
  OstiganStatus,
  OstiganSwitch,
  OstiganTab,
  OstiganTable,
  OstiganTextField,
} from 'ui'
import { showError } from 'hooks/useToust'
import { useRouter } from '../../components/other/navigation'
import {
  axiosGet,
  axiosPost,
  axiosPut,
} from '../../configs/httpService/axios/httpService'
import {
  AUTHENTICATION_RESULT_URL,
  BANK_ACCOUNT_URL,
  COMPANY_CREDENTIAL_FILE_VERIFICATION_URL,
  COMPANY_PROFILE_URL,
  COMPANY_UNDERTAKING_VERIFICATION_URL,
  DEVICE_URL,
  GUILD_URL,
  MEDIA_URL,
  NATIONAL_CARD_URL,
  SIGNATORY_OWNER_URL,
  USER_URL,
} from '../../constants/endPoints'
import useFormatNumber from '../../hooks/useFormatNumber'
import type { FormUserDetailsLayoutType } from '../../types/formUserDetailsLayout'
import type {
  BankCardType,
  BankInfoViewType,
  DevicesInfoViewType,
  IdentificationInfoViewType,
  MediaAuthorizationInfoViewType,
  OrdersInfoViewType,
  UserDetailsLayoutViewModelType,
  UserInfoViewModelType,
  UserInfoViewType,
  UseUserDetailsLayoutType,
} from '../../types/userDetails'
import {
  BankInfoIcon,
  CreditCardIcon,
  DeliveryIcon,
  ElectronicsIcon,
  IdentificationIcon,
  OrdersIcon,
  UserGuildIcon,
  UserSquareIcon,
} from 'ui/components/icons'
import { BankInfoView } from './bankInfo/view'
import { CertificateOrgDocView } from './certificateOrgDoc/view'
import { BankCard } from './components/bankCard'
import { CertificateFormLayout } from './components/certificateFormLayout/index'
import { CertificateFormLayoutView } from './components/certificateFormLayout/view'
import { useCertificateFormLayoutViewModel } from './components/certificateFormLayout/viewModel'
import { FormUserDetailsLayout } from './components/formUserDetailsLayout/index'
import { FormUserDetailsLayoutView } from './components/formUserDetailsLayout/view'
import { useUserDetailsLayoutViewModel } from './components/formUserDetailsLayout/viewModel'
import { Header } from './components/header'
import { NoData } from './components/noData'
import { DevicesInfoView } from './deviceInfo/view'
import { GuildInfoView } from './guildInfo/view'
import { IdentificationInfoView } from './identificationInfo/view'
import { MediaAuthorizationInfoView } from './mediaAuthorization/view'
import { OrdersInfoView } from './ordersInfo/view'
import { OrganizationInfoView } from './organizationInfo/view'
import { UserInfoView } from './userInfo/view'
import { useUserInfoViewModel } from './viewModel'

export {
  React,
  useRouter,
  Image,
  FormUserDetailsLayout,
  CertificateFormLayout,
  Header,
  ConfirmModal,
  FormikTextField,
  OstiganTextField,
  OstiganStatus,
  OstiganTab,
  LabelField,
  OstiganTable,
  OstiganSwitch,
  FormikSelect,
  Header2,
  OstiganButton,
  OstiganAutoComplete,
  Loading,
  showError,
  BankCard,
  BankInfoView,
  DevicesInfoView,
  OrdersInfoView,
  UserInfoView,
  IdentificationInfoView,
  OrganizationInfoView,
  FormUserDetailsLayoutView,
  CertificateOrgDocView,
  CertificateFormLayoutView,
  GuildInfoView,
  MediaAuthorizationInfoView,
  useUserInfoViewModel,
  OrdersIcon,
  axiosGet,
  axiosPut,
  axiosPost,
  useQuery,
  useMutation,
  useState,
  useTranslations,
  useParams,
  useUserDetailsLayoutViewModel,
  useCertificateFormLayoutViewModel,
  USER_URL,
  AUTHENTICATION_RESULT_URL,
  NATIONAL_CARD_URL,
  BANK_ACCOUNT_URL,
  DEVICE_URL,
  GUILD_URL,
  MEDIA_URL,
  COMPANY_PROFILE_URL,
  COMPANY_CREDENTIAL_FILE_VERIFICATION_URL,
  COMPANY_UNDERTAKING_VERIFICATION_URL,
  SIGNATORY_OWNER_URL,
  CreditCardIcon,
  IdentificationIcon,
  DeliveryIcon,
  ElectronicsIcon,
  BankInfoIcon,
  UserSquareIcon,
  UserGuildIcon,
  useFormatNumber,
  NoData,
  yup,
}

export type {
  UserInfoViewModelType,
  UseUserDetailsLayoutType,
  FormUserDetailsLayoutType,
  DevicesInfoViewType,
  IdentificationInfoViewType,
  OrdersInfoViewType,
  UserInfoViewType,
  BankInfoViewType,
  BankCardType,
  UserDetailsLayoutViewModelType,
  MediaAuthorizationInfoViewType,
}
