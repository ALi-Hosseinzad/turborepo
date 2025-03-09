'use client'

import { useEffect, useState } from 'react'
import * as yup from 'yup'
import { useParams } from 'next/navigation'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import {
  FormikTextField,
  FormikUploader,
  Loading,
  OstiganTable,
  queryStringEndpoint,
} from 'ui'
import { FormikTextEditor } from 'views/giftCardPrices/imports'
import { FormLayout } from 'views/layouts/forms/formLayout'
import { CustomFormikSelect } from 'views/onlinePayment/imports'
import type { FC } from 'views/package/imports'
import { useStatus } from 'views/package/imports'
import { useCreate } from 'hooks/useCreate'
import { showSuccess } from 'hooks/useToust'
import { handleDate, INDEX_PARAMS } from 'constants/common'
import {
  FAQ_URL,
  GROUP_DETACH_URL,
  GROUP_EXCEL_URL,
  GROUP_URL,
  SUBJECT_URL,
  USER_URL,
} from 'constants/endPoints'
import { ADD } from 'constants/routes'
import {
  axiosGet,
  axiosPost,
  axiosPutBody,
} from 'configs/httpService/axios/httpService'
import { List } from 'components/list'
import type {
  ListViewType,
  QueryListType,
  UseListViewModelType,
} from 'types/common'
import type {
  UserGroupCreateViewType,
  UserGroupFormPropsType,
  UserGroupFormViewPropsType,
  UseUserGroupCreateViewModelType,
  UseUserGroupEditViewModelType,
  UseUserGroupFormViewModelType,
  UseUserGroupListViewModelType,
} from 'types/userGroup'
import FormikSelectSubjects from '../../components/FormikSelectSubjects'
import { useListViewModel } from '../../components/list/viewModel'
import { OstiganMenuIcon } from 'ui/components/icons'
import UserGroupForm from './components/form'
import { useUserGroupFormViewModel } from './components/form/viewModel'
import FormikExelUploader from './components/FormikExelUploader'
import { useFormikExelUploader } from './components/FormikExelUploader/viewModel'
import { UsersInGroup } from './components/usersInGroup'
import { useUsersInGroupListViewModel } from './components/usersInGroup/viewModel'
import UsersList from './components/usersList'
import { useUserListViewModel } from './components/usersList/viewModel'
import UserGroupCreateView from './userGroupCreate/view'
import { useUserGroupCreateViewModel } from './userGroupCreate/viewModel'
import UserGroupEditView from './userGroupEdit/view'
import { useUserGroupEditViewModel } from './userGroupEdit/viewModel'
import { useUserGroupListViewModel } from './userGroupList/viewModel'

export {
  yup,
  useFormikExelUploader,
  FormikExelUploader,
  OstiganMenuIcon,
  UsersInGroup,
  ADD,
  List,
  Loading,
  FAQ_URL,
  GROUP_EXCEL_URL,
  axiosGet,
  useQuery,
  useState,
  USER_URL,
  useCreate,
  useStatus,
  useEffect,
  UsersList,
  useParams,
  axiosPost,
  GROUP_URL,
  handleDate,
  FormLayout,
  SUBJECT_URL,
  GROUP_DETACH_URL,
  showSuccess,
  useMutation,
  INDEX_PARAMS,
  OstiganTable,
  axiosPutBody,
  UserGroupForm,
  FormikUploader,
  FormikTextField,
  useTranslations,
  useListViewModel,
  FormikTextEditor,
  UserGroupEditView,
  CustomFormikSelect,
  queryStringEndpoint,
  UserGroupCreateView,
  useUserListViewModel,
  FormikSelectSubjects,
  useUserGroupFormViewModel,
  useUserGroupEditViewModel,
  useUserGroupListViewModel,
  useUserGroupCreateViewModel,
  useUsersInGroupListViewModel,
}

export type {
  FC,
  ListViewType,
  QueryListType,
  UseListViewModelType,
  UserGroupFormPropsType,
  UserGroupCreateViewType,
  UserGroupFormViewPropsType,
  UseUserGroupListViewModelType,
  UseUserGroupFormViewModelType,
  UseUserGroupEditViewModelType,
  UseUserGroupCreateViewModelType,
}
