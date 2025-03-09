'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { useTranslations } from 'use-intl'
import { handleLocalStorage } from 'utils/localStorage'
import * as yup from 'yup'
import { useParams, useRouter } from 'next/navigation'
import { useFormikContext } from 'formik'
import { useMutation, useQuery } from '@tanstack/react-query'
import {
  FormikAutoComplete,
  FormikSelect,
  FormikTextField,
  Loading,
  OstiganTable,
  queryStringEndpoint,
} from 'ui'
import { RoleFormView } from 'views/roles/components/roleForm/view'
import { useCreate } from 'hooks/useCreate'
import { useEdit } from 'hooks/useEdit'
import { showSuccess } from 'hooks/useToust'
import { INDEX_PARAMS } from 'constants/common'
import {
  GET_ALL_PERMISSION_URL,
  PERMISSION_URL,
  ROLE_URL,
} from 'constants/endPoints'
import { ADD, ROLES } from 'constants/routes'
import {
  axiosGet,
  axiosPost,
  axiosPut,
} from 'configs/httpService/axios/httpService'
import CustomFormikAutoComplete from 'components/customFormikAutoComplete'
import { List } from 'components/list'
import { useListViewModel } from 'components/list/viewModel'
import type { QueryListType, UseListViewModelType } from 'types/common'
import type {
  RoleCreateType,
  RoleEditType,
  RolesBodyItemType,
  UseRolesViewModelType,
} from 'types/roles'
import { FormLayout } from '../layouts/forms/formLayout'
import RoleForm from './components/roleForm'
import { useRoleFormViewModel } from './components/roleForm/viewModel'
import { useRoleCreateViewModel } from './roleCreate/viewModel'
import { useRoleEditViewModel } from './roleEdit/viewModel'
import { useRolesViewModel } from './rolesList/viewModel'

export {
  ADD,
  yup,
  List,
  React,
  ROLES,
  useEdit,
  Loading,
  RoleForm,
  useState,
  useQuery,
  axiosGet,
  ROLE_URL,
  axiosPut,
  useCreate,
  useEffect,
  useParams,
  useRouter,
  axiosPost,
  FormLayout,
  useCallback,
  showSuccess,
  useMutation,
  INDEX_PARAMS,
  FormikSelect,
  OstiganTable,
  RoleFormView,
  PERMISSION_URL,
  useTranslations,
  FormikTextField,
  useListViewModel,
  useFormikContext,
  useRolesViewModel,
  handleLocalStorage,
  FormikAutoComplete,
  queryStringEndpoint,
  useRoleEditViewModel,
  useRoleFormViewModel,
  useRoleCreateViewModel,
  GET_ALL_PERMISSION_URL,
  CustomFormikAutoComplete,
}

export type {
  QueryListType,
  UseListViewModelType,
  RolesBodyItemType,
  RoleCreateType,
  UseRolesViewModelType,
  RoleEditType,
}
