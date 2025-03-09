import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import moment from 'jalali-moment'
import { useMutation } from '@tanstack/react-query'
import { InputAdornment } from '@mui/material'
import { useTranslations } from 'next-intl'
import {
  FormikDatePicker,
  FormikSelect,
  FormikTextField,
  FormikUploader,
  FormWrapper,
  Header1,
  LabelField,
  Loading,
  OstiganButton,
} from 'ui'
import type {
  AuthLevelFormPropsType,
  ConfirmCardType,
  FormNationalCardViewModelType,
  NationalCardValuesType,
} from '@/types/authorization/authorization'
import type { BankAccountValuesType } from '@/types/authorization/bankAccount'
import type { GuildInformationPropsType } from '@/types/authorization/gild'
import type { LayoutAuthType } from '@/types/authorization/layoutAuthType'
import type {
  FormMediaAuthorizationViewModelType,
  MediaAuthorizationValues,
} from '@/types/authorization/mediaAuthorizationType'
import { useAxiosMutation } from '@/hooks/useAxiosMutation'
import { useAxiosQuery } from '@/hooks/useAxiosQuery'
import { showInfo, showSuccess } from '@/hooks/useToust'
import {
  BANK_ACCOUNT_INFO_URL,
  GUILD_ACTIVE_DISABLE_URL,
  GUILD_URL,
  ME_URL,
  MEDIA_AUTHORIZATION_URL,
  NATIONAL_CARD_INFO_URL,
} from '@/constants/endPoints'
import { NUMBER_REGEX } from '@/constants/regex'
import { axiosDelete } from '@/configs/httpService/axiosInterceptors'
import AddInfoDisplayCards from '../component/infoCards'
import LayoutAuth from '../component/layoutAuth'
import { LevelsAuthorization } from '../component/levelsAuthorization'
import { UserPersist } from '../component/useMeViewModel'
import { AttachIcon } from 'ui/components/icons'
import { DeleteModal } from 'ui/components/modal/deleteModal'
import BodyAuthorization from './bodyAuthorization'
import { useBankAccountViewModel } from './bodyAuthorization/bankAccount/viewModel'
import { UseGuildInformationViewModel } from './bodyAuthorization/guild/viewModel'
import { UseMediaAuthorizationViewModel } from './bodyAuthorization/mediaAuthorization/viewModel'
import { UseNationalCardViewModel } from './bodyAuthorization/nationalCard/viewModel'
import { TextUndertakingMedia } from './component/textUndertakingMedia'
import HeadAuthorizationView from './headAuthorization/view'
import { handleLoginedUser } from '@/redux/reducers/persist.slice'

export {
  useEffect,
  useState,
  useMutation,
  axiosDelete,
  UserPersist,
  BANK_ACCOUNT_INFO_URL,
  useDispatch,
  ME_URL,
  GUILD_ACTIVE_DISABLE_URL,
  GUILD_URL,
  handleLoginedUser,
  LayoutAuth,
  NUMBER_REGEX,
  FormikDatePicker,
  FormikSelect,
  FormikTextField,
  FormikUploader,
  OstiganButton,
  NATIONAL_CARD_INFO_URL,
  MEDIA_AUTHORIZATION_URL,
  Header1,
  yup,
  LabelField,
  AddInfoDisplayCards,
  showInfo,
  showSuccess,
  InputAdornment,
  DeleteModal,
  useAxiosMutation,
  useAxiosQuery,
  useTranslations,
  UseNationalCardViewModel,
  UseMediaAuthorizationViewModel,
  UseGuildInformationViewModel,
  useBankAccountViewModel,
  BodyAuthorization,
  moment,
  HeadAuthorizationView,
  LevelsAuthorization,
  FormWrapper,
  Loading,
  AttachIcon,
  TextUndertakingMedia,
}

export type {
  LayoutAuthType,
  FormNationalCardViewModelType,
  NationalCardValuesType,
  FormMediaAuthorizationViewModelType,
  MediaAuthorizationValues,
  ConfirmCardType,
  AuthLevelFormPropsType,
  GuildInformationPropsType,
  BankAccountValuesType,
}
