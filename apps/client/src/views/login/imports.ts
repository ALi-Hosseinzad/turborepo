import type { ChangeEvent } from 'react'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { usePathname } from 'next/navigation'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { IconButton, InputAdornment } from '@mui/material'
import { useTranslations } from 'next-intl'
import {
  FormikTextField,
  FormWrapper,
  getCookie,
  isEmptyObject,
  OstiganButton,
  OstiganTab,
  setCookie,
  showError,
} from 'ui'
import type { PhoneType, UseForgetPasswordViewModelType } from '@/types/auth'
import { useAxiosMutation } from '@/hooks/useAxiosMutation'
import { useAxiosQuery } from '@/hooks/useAxiosQuery'
import {
  CHANGE_PASSWORD_URL,
  ENUM_URL,
  FORGET_PASSWORD_URL,
  LEGAL_LOGIN_URL,
  LEGAL_REGISTER_URL,
  LOGIN_URL,
  ME_URL,
  OTP_URL,
  USER_INFO_URL,
  VERIFY_EMAIL_URL,
} from '@/constants/endPoints'
import {
  INTEGER_REGEX,
  JUST_PERSIAN_REGEX,
  PASSWORD_REGEX,
  PHONE_REGEX,
} from '@/constants/regex'
import { DASHBOARD } from '@/constants/routes'
import { axiosGet } from '@/configs/httpService/axiosInterceptors'
import { useRouter } from '@/components/nextIntl/navigation'
import OtpComponent from '@/components/otp'
import { AlertIcon } from 'ui/components/icons'
import AuthLayout from './components/authLayout'
import AuthTab from './components/authTabs'
import AuthTabsView from './components/authTabs/view'
import EndAdornmentPassword from './components/endAdornmentPassword'
import HaveUser from './components/haveUser'
import NotHaveUserAndForgetPass from './components/notHaveUserAndForgetPass'
import Otp from './components/otpLogin'
import OtpLoginView from './components/otpLogin/view'
import { useOtpLoginViewModel } from './components/otpLogin/viewModel'
import LegalConfirmOtpPage from './legalUser/legalUserChangePassword'
import LegalUserChangePasswordView from './legalUser/legalUserChangePassword/view'
import { useLegalUserChangePasswordViewModel } from './legalUser/legalUserChangePassword/viewModel'
import LegalUserForgetPassword from './legalUser/legalUserForgetPassword'
import { useForgetPasswordViewModel } from './legalUser/legalUserForgetPassword/viewModel'
import LegalUserSignUp from './legalUser/legalUserSignUp'
import LegalUserSignUpView from './legalUser/legalUserSignUp/view'
import { useLegalUserSignUpViewModel } from './legalUser/legalUserSignUp/viewModel'
import LegalUserTab from './legalUser/legalUserTab'
import LegalUserTabView from './legalUser/legalUserTab/view'
import { useLegalUserTabViewModel } from './legalUser/legalUserTab/viewModel'
import RealUserTab from './realUser/realUserTab'
import { useRealUserTabViewModel } from './realUser/realUserTab/viewModel'
import RealUserVerification from './realUser/realUserVerification'
import { useRealUserVerificationViewModel } from './realUser/realUserVerification/viewModel'
import { useAuthViewModel } from './viewModel'
import {
  handleLoginStep,
  handleLogout,
  handlePhone,
} from '@/redux/reducers/auth.slice'
import { handleEnum, handleLoginedUser } from '@/redux/reducers/persist.slice'
import type { RootState } from '@/redux/store'

export {
  RealUserTab,
  OtpComponent,
  axiosGet,
  handleEnum,
  getCookie,
  LegalUserTab,
  OstiganTab,
  yup,
  handleLogout,
  LegalUserChangePasswordView,
  Otp,
  useLegalUserChangePasswordViewModel,
  JUST_PERSIAN_REGEX,
  useRef,
  EndAdornmentPassword,
  InputAdornment,
  IconButton,
  ME_URL,
  AuthTab,
  OTP_URL,
  HaveUser,
  useState,
  OtpLoginView,
  useOtpLoginViewModel,
  AlertIcon,
  useEffect,
  DASHBOARD,
  useRouter,
  showError,
  Visibility,
  VisibilityOff,
  LOGIN_URL,
  setCookie,
  AuthLayout,
  usePathname,
  useSelector,
  handlePhone,
  PHONE_REGEX,
  PASSWORD_REGEX,
  useDispatch,
  FormWrapper,
  INTEGER_REGEX,
  useAxiosQuery,
  USER_INFO_URL,
  VERIFY_EMAIL_URL,
  isEmptyObject,
  ENUM_URL,
  OstiganButton,
  LegalUserSignUp,
  LEGAL_LOGIN_URL,
  handleLoginStep,
  FormikTextField,
  useTranslations,
  LegalUserTabView,
  useAuthViewModel,
  useAxiosMutation,
  AuthTabsView,
  handleLoginedUser,
  LEGAL_REGISTER_URL,
  LegalUserSignUpView,
  FORGET_PASSWORD_URL,
  CHANGE_PASSWORD_URL,
  LegalConfirmOtpPage,
  RealUserVerification,
  LegalUserForgetPassword,
  useRealUserTabViewModel,
  NotHaveUserAndForgetPass,
  useLegalUserTabViewModel,
  useLegalUserSignUpViewModel,
  useForgetPasswordViewModel,
  useRealUserVerificationViewModel,
}

export type {
  PhoneType,
  RootState,
  ChangeEvent,
  UseForgetPasswordViewModelType,
}
