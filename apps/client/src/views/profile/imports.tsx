'use client'

import React, { useState } from 'react'
import * as yup from 'yup'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { FormikTextField, Header2, Loading, OstiganButton } from 'ui'
import type { CompletedInfoViewModelType } from '@/types/profile/completedInfo'
import type { TabUserItemType } from '@/types/profile/genuine'
import type {
  InitialValuesType,
  UsePersonalInfoViewModelReturnType,
} from '@/types/profile/personalInfo'
import LayoutAuth from '@/views/authorization/component/layoutAuth'
import { useAxiosQuery } from '@/hooks/useAxiosQuery'
import {
  LEGAL_GAZETTE_URL,
  LEGAL_STATUTE_URL,
  SIGNATORY_OWNER_URL,
  UNDERTAKING_URL,
} from '@/constants/endPoints'
import { INTEGER_REGEX, JUST_PERSIAN_REGEX } from '@/constants/regex'
import useFormatNumber from '../../hooks/useFormatNumber'
import {
  BankInfoIcon,
  CreditCardIcon,
  DeliveryIcon,
  DescriptionIcon,
  ElectronicsIcon,
  IdentificationIcon,
  OrdersIcon,
  UserGuildIcon,
  UserSquareIcon,
} from 'ui/components/icons'
import { DownloadIcon } from 'ui/components/icons/icons'
import { BankAccountProfileView } from './genuine/bankAccount/view'
import { GuildViewProfile } from './genuine/guild/view'
import { IdentificationInfoView } from './genuine/identificationInfo/view'
import { PersonalInfoView } from './genuine/personalInfo/view'
import { useUserGenuineViewModel } from './genuine/viewModel'
import { BankAccountLegalProfileView } from './legal/bankAccount/view'
import { CompletedInfoView } from './legal/completedInfo/view'
import { CompletedInfoViewModel } from './legal/completedInfo/viewModel'
import ProfileLegalView from './legal/profile/view'
import { useUserLegalViewModel } from './legal/viewModel'

export {
  React,
  Link,
  LEGAL_GAZETTE_URL,
  LEGAL_STATUTE_URL,
  SIGNATORY_OWNER_URL,
  UNDERTAKING_URL,
  Header2,
  Image,
  useAxiosQuery,
  DownloadIcon,
  BankAccountProfileView,
  GuildViewProfile,
  Loading,
  IdentificationInfoView,
  FormikTextField,
  LayoutAuth,
  useUserLegalViewModel,
  PersonalInfoView,
  useUserGenuineViewModel,
  OrdersIcon,
  useQuery,
  useMutation,
  useState,
  useTranslations,
  useParams,
  CreditCardIcon,
  IdentificationIcon,
  DeliveryIcon,
  ElectronicsIcon,
  BankInfoIcon,
  UserSquareIcon,
  UserGuildIcon,
  useFormatNumber,
  DescriptionIcon,
  BankAccountLegalProfileView,
  CompletedInfoViewModel,
  yup,
  ProfileLegalView,
  CompletedInfoView,
  INTEGER_REGEX,
  JUST_PERSIAN_REGEX,
  OstiganButton,
}
export type {
  CompletedInfoViewModelType,
  InitialValuesType,
  TabUserItemType,
  UsePersonalInfoViewModelReturnType,
}
