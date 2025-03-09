'use client'

import { useAppContextValue } from 'contexts/app/appContextValue'
import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { handleCookie } from 'utils/cookie'
import { handleLocalStorage } from 'utils/localStorage'
import * as yup from 'yup'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Box } from '@mui/material'
import { useTranslations } from 'next-intl'
import { FormikTextField, FormWrapper, OstiganButton } from 'ui'
import { ENUM_URL, LOGIN_URL, ME_URL } from 'constants/endPoints'
import { PHONE_REGEX } from 'constants/regex'
import { DASHBOARD, USERS } from 'constants/routes'
import { axiosGet, axiosPost } from 'configs/httpService/axios/httpService'
import { useRouter } from 'components/other/navigation'
import type { LoginPropsType } from 'types/login'
import { LoginOstiganIcon } from 'ui/components/icons'

export {
  React,
  USERS,
  useAppContextValue,
  useEffect,
  ENUM_URL,
  useTranslations,
  FormikTextField,
  FormWrapper,
  DASHBOARD,
  OstiganButton,
  handleCookie,
  PHONE_REGEX,
  Box,
  useRouter,
  Cookies,
  useMutation,
  useQuery,
  axiosPost,
  axiosGet,
  ME_URL,
  LOGIN_URL,
  handleLocalStorage,
  LoginOstiganIcon,
  yup,
}

export type { LoginPropsType }
