'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import { Form } from 'formik'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import {
  FormikSelect,
  FormikTextField,
  FormikWrapper,
  Loading,
  OstiganModal,
  OstiganTab,
  OstiganTable,
  queryStringEndpoint,
} from 'ui'
import { FormLayout } from 'views/layouts/forms/formLayout'
import { useCreate } from 'hooks/useCreate'
import { showSuccess } from 'hooks/useToust'
import { INDEX_PARAMS } from 'constants/common'
import { USER_URL } from 'constants/endPoints'
import {
  JUST_PERSIAN_REGEX,
  PHONE_NUMBER_REGEX,
  PHONE_REGEX,
} from 'constants/regex'
import { ADD, USERS } from 'constants/routes'
import { axiosGet, axiosPost } from 'configs/httpService/axios/httpService'
import { List } from 'components/list'
import { useListViewModel } from 'components/list/viewModel'
import type { QueryListType, UseListViewModelType } from 'types/common'
import type {
  CreateValuesType,
  OrderInfoType,
  User,
  UserCreateViewModelRouteType,
  UserListViewType,
  UserOnSubmitFormikPropsType,
  UserRouteType,
  UseUserCreateViewModelReturnType,
} from 'types/user'
import {
  BankInfoIcon,
  CloseIcon,
  IdentificationIcon,
  UserSquareIcon,
} from 'ui/components/icons'
import { UserCreateForm } from './components/userCreateForm'
import { UserStatusModal } from './components/userStatusModal'
import { UserCreateView } from './userCreate/view'
import { useUserCreateViewModel } from './userCreate/viewModel'
import { useUserListViewModel } from './userList/viewModel'

export {
  yup,
  ADD,
  List,
  Form,
  React,
  axios,
  USERS,
  Loading,
  useState,
  useQuery,
  axiosGet,
  USER_URL,
  useCreate,
  useEffect,
  axiosPost,
  CloseIcon,
  OstiganTab,
  FormLayout,
  showSuccess,
  PHONE_REGEX,
  useMutation,
  FormikSelect,
  OstiganTable,
  OstiganModal,
  INDEX_PARAMS,
  BankInfoIcon,
  IdentificationIcon,
  UserSquareIcon,
  FormikWrapper,
  UserCreateForm,
  UserCreateView,
  useTranslations,
  FormikTextField,
  UserStatusModal,
  useListViewModel,
  JUST_PERSIAN_REGEX,
  PHONE_NUMBER_REGEX,
  queryStringEndpoint,
  useUserListViewModel,
  useUserCreateViewModel,
}
export type {
  User,
  QueryListType,
  OrderInfoType,
  UserRouteType,
  UserListViewType,
  CreateValuesType,
  UseListViewModelType,
  UserOnSubmitFormikPropsType,
  UserCreateViewModelRouteType,
  UseUserCreateViewModelReturnType,
}
