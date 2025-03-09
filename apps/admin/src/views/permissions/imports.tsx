'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { handleLocalStorage } from 'utils/localStorage'
import * as yup from 'yup'
import { useParams, useRouter } from 'next/navigation'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import {
  FormikAutoComplete,
  FormikSelect,
  FormikTextField,
  FormikWrapper,
  FormWrapper,
  Header1,
  Header2,
  Loading,
  OstiganButton,
  OstiganTable,
  queryStringEndpoint,
} from 'ui'
import { showSuccess } from 'hooks/useToust'
import { INDEX_PARAMS } from 'constants/common'
import { PERMISSION_URL } from 'constants/endPoints'
import { JUST_PERSIAN_REGEX } from 'constants/regex'
import { ADD, PERMISSIONS } from 'constants/routes'
import {
  axiosGet,
  axiosPost,
  axiosPut,
} from 'configs/httpService/axios/httpService'
import { FormikTextEditor } from 'components/elements/textEditor/formikTextEditor'
import { OstiganTextEditor } from 'components/elements/textEditor/ostiganTextEditor'
import { List } from 'components/list'
import { useListViewModel } from 'components/list/viewModel'
import type { QueryListType, UseListViewModelType } from 'types/common'
import type {
  PermissionCreateType,
  PermissionsBodyItemType,
  UsePermissionsViewModelType,
} from 'types/permissions'
import { FormLayout } from '../layouts/forms/formLayout'
import { PermissionForm } from './components/permissionForm/index'
import { PermissionFormView } from './components/permissionForm/view'
import { usePermissionCreateViewModel } from './permissionCreate/viewModel'
import { usePermissionEditViewModel } from './permissionEdit/viewModel'
import { usePermissionsViewModel } from './permissionsList/viewModel'

export {
  React,
  INDEX_PARAMS,
  OstiganTable,
  PermissionFormView,
  useEffect,
  useState,
  useParams,
  FormikWrapper,
  FormWrapper,
  useQuery,
  FormLayout,
  PermissionForm,
  usePermissionsViewModel,
  usePermissionCreateViewModel,
  usePermissionEditViewModel,
  useListViewModel,
  FormikTextField,
  FormikSelect,
  FormikAutoComplete,
  OstiganButton,
  OstiganTextEditor,
  FormikTextEditor,
  List,
  Header1,
  Header2,
  axios,
  Loading,
  showSuccess,
  PERMISSION_URL,
  JUST_PERSIAN_REGEX,
  ADD,
  PERMISSIONS,
  axiosGet,
  axiosPut,
  axiosPost,
  useTranslations,
  useMutation,
  useRouter,
  handleLocalStorage,
  yup,
  queryStringEndpoint,
}
export type {
  PermissionsBodyItemType,
  QueryListType,
  UseListViewModelType,
  PermissionCreateType,
  UsePermissionsViewModelType,
}
