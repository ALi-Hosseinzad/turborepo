'use client'

import axios from 'axios'
import type { ChangeEvent, FC } from 'react'
import React, { useEffect, useState } from 'react'
import { getChangedObjectValues } from 'utils/objectsMethods'
import * as yup from 'yup'
import { useParams, useRouter } from 'next/navigation'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import {
  FormikAutoComplete,
  FormikRadio,
  FormikSelect,
  FormikSwitch,
  FormikTextField,
  FormikUploader,
  FormikWrapper,
  FormWrapper,
  Header1,
  Header2,
  Loading,
  OstiganButton,
  OstiganTable,
  queryStringEndpoint,
} from 'ui'
import { FormLayout } from 'views/layouts/forms/formLayout'
import { useCreate } from 'hooks/useCreate'
import { useStatus } from 'hooks/useStatus'
import { showError } from 'hooks/useToust'
import { INDEX_PARAMS } from 'constants/common'
import {
  CATEGORY_URL,
  GIFT_CARD_PACKAGE_URL,
  GIFT_CARD_PRODUCT_URL,
  TAG_URL,
  WAGE_URL,
} from 'constants/endPoints'
import {
  CATEGORY_LIST_QUERY,
  GIFTCARDPACKAGE_LIST_QUERY,
  TAG_LIST_QUERY,
  WAGE_LIST_QUERY,
} from 'constants/queryKeys'
import { ADD } from 'constants/routes'
import { axiosGet, axiosPost } from 'configs/httpService/axios/httpService'
import CustomFormikAutoComplete from 'components/customFormikAutoComplete'
import CustomFormikSelect from 'components/customFormikSelect'
import { FormikTextEditor } from 'components/elements/textEditor/formikTextEditor'
import { OstiganTextEditor } from 'components/elements/textEditor/ostiganTextEditor'
import { List } from 'components/list'
import { useListViewModel } from 'components/list/viewModel'
import type {
  CreatePropsType,
  ListViewType,
  QueryListType,
  UseListViewModelType,
} from 'types/common'
import type {
  ManagementProductListViewModelType,
  PackageCreateType,
  PackageCreateViewType,
  PackageEditType,
  PackagesBodyItemType,
  TableBodyType,
} from 'types/packages'
import { UploadIcon } from 'ui/components/icons'
import { ManagementProductList } from './components/editTable'
import { PackageForm } from './components/form'
import { usePackageFormViewModel } from './components/form/viewModel'
import { PackageCreateView } from './packageCreate/view'
import { usePackageCreateViewModel } from './packageCreate/viewModel'
import PackageEditView from './packageEdit/view'
import { usePackageEditViewModel } from './packageEdit/viewModel'
import { usePackageListViewModel } from './packageList/viewModel'

CustomFormikSelect

export {
  yup,
  CustomFormikAutoComplete,
  List,
  getChangedObjectValues,
  useCreate,
  React,
  axios,
  TAG_URL,
  WAGE_URL,
  Header1,
  Header2,
  Loading,
  useState,
  useQuery,
  useStatus,
  ADD,
  axiosGet,
  useParams,
  showError,
  useEffect,
  axiosPost,
  useRouter,
  UploadIcon,
  FormLayout,
  FormWrapper,
  CustomFormikSelect,
  useMutation,
  FormikRadio,
  INDEX_PARAMS,
  OstiganTable,
  CATEGORY_URL,
  FormikSwitch,
  FormikSelect,
  FormikWrapper,
  OstiganButton,
  FormikUploader,
  FormikTextField,
  useTranslations,
  GIFTCARDPACKAGE_LIST_QUERY,
  CATEGORY_LIST_QUERY,
  TAG_LIST_QUERY,
  WAGE_LIST_QUERY,
  useListViewModel,
  FormikTextEditor,
  OstiganTextEditor,
  FormikAutoComplete,
  queryStringEndpoint,
  GIFT_CARD_PRODUCT_URL,
  PackageForm,
  ManagementProductList,
  GIFT_CARD_PACKAGE_URL,
  PackageEditView,
  PackageCreateView,
  usePackageListViewModel,
  usePackageFormViewModel,
  usePackageEditViewModel,
  usePackageCreateViewModel,
}

export type {
  FC,
  ChangeEvent,
  QueryListType,
  TableBodyType,
  UseListViewModelType,
  CreatePropsType,
  PackageCreateType,
  PackagesBodyItemType,
  PackageCreateViewType,
  ListViewType,
  PackageEditType,
  ManagementProductListViewModelType,
}
