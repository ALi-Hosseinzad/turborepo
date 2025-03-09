import type React from 'react'
import { useCallback, useEffect, useState } from 'react'
import * as yup from 'yup'
import Image from 'next/image'
import { useMutation } from '@tanstack/react-query'
import { Box, CircularProgress } from '@mui/material'
import { useTranslations } from 'next-intl'
import { FormikTextField, FormikUploader, Loading, OstiganTab } from 'ui'
import type {
  GuidelinesTextKeys,
  InitialValues,
  UseArticleOfAssociationViewModelReturn,
} from '@/types/authorization/articleOfAssociation'
import type { AuthenticationResultProps } from '@/types/authorization/authenticationResult'
import type { HeadAuthorizationViewModelType } from '@/types/authorization/authorization'
import type {
  BankCardLegalPropsType,
  BankCardPropsType,
  LevelPropsType,
} from '@/types/authorization/authorizationComponent'
import type {
  ProfileLegalPropsType,
  ProfileViewPropsType,
} from '@/types/authorization/profile'
import type {
  CardType,
  InfoType,
  UseSignatoryOwnerViewModelReturn,
} from '@/types/authorization/signatoryOwner'
import type { UseUndertakingViewModelReturnType } from '@/types/authorization/undertaking'
import type {
  ProfileFieldsType,
  ProfileUploaderPropsType,
  ProfileViewModelType,
} from '@/types/authorization/useProfileViewModel'
import { AuthenticationResult } from '@/views/authorization/component/authenticationResult'
import {
  handleLoginedUser,
  useAxiosMutation,
  useAxiosQuery,
  useDispatch,
} from '@/views/login/imports'
import { LayoutAuth } from '@/views/profile/imports'
import { showError, showSuccess } from '@/hooks/useToust'
import {
  LEGAL_GAZETTE_URL,
  LEGAL_PROFILE_URL,
  LEGAL_STATUTE_URL,
  LEGAL_UPDATE_PROFILE_URL,
  ME_URL,
  SIGNATORY_OWNER_URL,
} from '@/constants/endPoints'
import { JUST_PERSIAN_REGEX, NUMBER_REGEX } from '@/constants/regex'
import { DASHBOARD } from '@/constants/routes'
import { axiosPost } from '@/configs/httpService/axiosInterceptors'
import BreadCrumbs from '@/components/breadCrumbs/breadCrumbs'
import { useRouter } from '@/components/nextIntl/navigation'
import {
  AttachIcon,
  ConfirmationIcon,
  CreditCardIcon,
  DeleteIcon,
  FullConfirmationIcon,
  GuildInformationIcon,
  IdentityConfirmationIcon,
  PlusCircleIcon,
  PlusIcon,
  ToastIconError,
  ToastIconSuccess,
  ToastIconwarning,
  UploadIcon,
  UserBankCardIcon,
  UserSquareIcon,
  UserSquareThreeLinesIcon,
} from 'ui/components/icons'
import BankCardGenuine from './component/bankCardGenuine'
import {
  BaseLevelDisableProps,
  FirstLevelDisableProps,
  FirstLevelEnableProps,
  FirstLevelPendingProps,
  FourthLevelDisableProps,
  FourthLevelEnableProps,
  FourthLevelPendingProps,
  SecondLevelDisableProps,
  SecondLevelEnableProps,
  SecondLevelPendingProps,
  ThirdLevelDisableProps,
  ThirdLevelEnableProps,
  ThirdLevelPendingProps,
} from './component/constants'
import {
  FifthLevelDisableLegalProps,
  FifthLevelEnableLegalProps,
  FifthLevelPendingLegalProps,
  FirstLevelDisableLegalProps,
  FirstLevelEnableLegalProps,
  FirstLevelPendingLegalProps,
  FourthLevelDisableLegalProps,
  FourthLevelEnableLegalProps,
  FourthLevelPendingLegalProps,
  SecondLevelDisableLegalProps,
  SecondLevelEnableLegalProps,
  SecondLevelPendingLegalProps,
  SixthLevelDisableLegalProps,
  SixthLevelEnableLegalProps,
  SixthLevelPendingLegalProps,
  ThirdLevelDisableLegalProps,
  ThirdLevelEnableLegalProps,
  ThirdLevelPendingLegalProps,
} from './component/legalHeaderInformation'
import { UserPersist } from './component/useMeViewModel'
import AuthorizationGenuine from './genuine'
import { useBankAccountViewModel } from './genuine/bodyAuthorization/bankAccount/viewModel'
import ConfirmCard from './genuine/component/confirmCards'
import ArticleOfAssociation from './legal/bodyAuthorization/articleOfAssociation'
import ArticleOfAssociationView from './legal/bodyAuthorization/articleOfAssociation/view'
import { UseArticleOfAssociationViewModel } from './legal/bodyAuthorization/articleOfAssociation/viewModel'
import { BankAccount } from './legal/bodyAuthorization/bankAccount'
import { OfficialGazette } from './legal/bodyAuthorization/officialGazette'
import { Profile } from './legal/bodyAuthorization/profile'
import ProfileView from './legal/bodyAuthorization/profile/view'
import { UseProfileViewModel } from './legal/bodyAuthorization/profile/viewModel'
import SignatoryOwner from './legal/bodyAuthorization/signatoryOwner'
import { SubmitHandler } from './legal/bodyAuthorization/signatoryOwner/submitHandler'
import SignatoryOwnerView from './legal/bodyAuthorization/signatoryOwner/view'
import { useSignatoryOwnerViewModel } from './legal/bodyAuthorization/signatoryOwner/viewModel'
import Undertaking from './legal/bodyAuthorization/undertaking'
import UndertakingView from './legal/bodyAuthorization/undertaking/view'
import { useUndertakingViewModel } from './legal/bodyAuthorization/undertaking/viewModel'
import ProfileGuidelinesText from './legal/component/profileGuidelinesText'
import ProfileUploader from './legal/component/profileUploader'
import { type RootState } from '@/redux/store'

export {
  OstiganTab,
  DASHBOARD,
  Undertaking,
  SignatoryOwner,
  Profile,
  OfficialGazette,
  BankAccount,
  ArticleOfAssociation,
  AuthenticationResult,
  ProfileUploader,
  ProfileGuidelinesText,
  FormikUploader,
  Box,
  Image,
  UndertakingView,
  BreadCrumbs,
  BankCardGenuine,
  ConfirmCard,
  BaseLevelDisableProps,
  FirstLevelDisableProps,
  FirstLevelEnableProps,
  FirstLevelPendingProps,
  FourthLevelDisableProps,
  FourthLevelEnableProps,
  FourthLevelPendingProps,
  SecondLevelDisableProps,
  SecondLevelEnableProps,
  SecondLevelPendingProps,
  ThirdLevelDisableProps,
  ThirdLevelEnableProps,
  ThirdLevelPendingProps,
  FifthLevelDisableLegalProps,
  FifthLevelEnableLegalProps,
  FifthLevelPendingLegalProps,
  FirstLevelDisableLegalProps,
  FirstLevelEnableLegalProps,
  FirstLevelPendingLegalProps,
  FourthLevelDisableLegalProps,
  FourthLevelEnableLegalProps,
  FourthLevelPendingLegalProps,
  SecondLevelDisableLegalProps,
  SecondLevelEnableLegalProps,
  SecondLevelPendingLegalProps,
  SixthLevelDisableLegalProps,
  SixthLevelEnableLegalProps,
  SixthLevelPendingLegalProps,
  ThirdLevelDisableLegalProps,
  ThirdLevelEnableLegalProps,
  ThirdLevelPendingLegalProps,
  handleLoginedUser,
  useDispatch,
  LEGAL_PROFILE_URL,
  LEGAL_UPDATE_PROFILE_URL,
  ME_URL,
  LEGAL_STATUTE_URL,
  LEGAL_GAZETTE_URL,
  JUST_PERSIAN_REGEX,
  NUMBER_REGEX,
  LayoutAuth,
  ArticleOfAssociationView,
  FormikTextField,
  SIGNATORY_OWNER_URL,
  yup,
  SignatoryOwnerView,
  useRouter,
  useCallback,
  useUndertakingViewModel,
  useSignatoryOwnerViewModel,
  UserPersist,
  useAxiosMutation,
  useAxiosQuery,
  AttachIcon,
  useEffect,
  useState,
  CircularProgress,
  ConfirmationIcon,
  useBankAccountViewModel,
  PlusCircleIcon,
  FullConfirmationIcon,
  GuildInformationIcon,
  IdentityConfirmationIcon,
  UserBankCardIcon,
  UserSquareIcon,
  UserSquareThreeLinesIcon,
  useTranslations,
  CreditCardIcon,
  DeleteIcon,
  AuthorizationGenuine,
  ToastIconError,
  Loading,
  UseArticleOfAssociationViewModel,
  useMutation,
  showError,
  showSuccess,
  axiosPost,
  PlusIcon,
  UploadIcon,
  SubmitHandler,
  ToastIconSuccess,
  UseProfileViewModel,
  ProfileView,
  ToastIconwarning,
}

export type {
  React,
  ProfileLegalPropsType,
  ProfileViewPropsType,
  GuidelinesTextKeys,
  InitialValues,
  UseArticleOfAssociationViewModelReturn,
  BankCardPropsType,
  BankCardLegalPropsType,
  LevelPropsType,
  HeadAuthorizationViewModelType,
  RootState,
  AuthenticationResultProps,
  ProfileFieldsType,
  ProfileViewModelType,
  ProfileUploaderPropsType,
  InfoType,
  CardType,
  UseSignatoryOwnerViewModelReturn,
  UseUndertakingViewModelReturnType,
}
