'use client'

import { useState } from 'react'
import * as yup from 'yup'
import { useParams } from 'next/navigation'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import {
  FormikSelect,
  FormikTextField,
  FormikUploader,
  Loading,
  OstiganTable,
  queryStringEndpoint,
} from 'ui'
import { FormikTextEditor } from 'views/giftCardPrices/imports'
import { FormLayout } from 'views/layouts/forms/formLayout'
import { useCreate } from 'hooks/useCreate'
import { useStatus } from 'hooks/useStatus'
import { showSuccess } from 'hooks/useToust'
import { INDEX_PARAMS } from 'constants/common'
import {
  CATEGORY_URL,
  FORM_URL,
  REGION_URL,
  SERVICE_URL,
  SUBSCRIPTION_URL,
  TAG_URL,
  WAGE_URL,
} from 'constants/endPoints'
import {
  axiosGet,
  axiosPost,
  axiosPutBody,
} from 'configs/httpService/axios/httpService'
import CustomFormikAutoComplete from 'components/customFormikAutoComplete'
import CustomFormikSelect from 'components/customFormikSelect'
import { useListViewModel } from 'components/list/viewModel'
import type {
  ListViewType,
  QueryListType,
  UseListViewModelType,
} from 'types/common'
import type {
  OnlinePaymentCreateViewType,
  OnlinePaymentFormPropsType,
  OnlinePaymentFormViewPropsType,
  UseOnlinePaymentCreateViewModelType,
  UseOnlinePaymentEditViewModelType,
  UseOnlinePaymentFormViewModelType,
  UseOnlinePaymentListViewModelType,
} from 'types/onlinePayment'
import { UploadIcon } from 'ui/components/icons'
import OnlinePaymentForm from './components/onlinePaymentForm'
import OnlinePaymentFormView from './components/onlinePaymentForm/view'
import { useOnlinePaymentFormViewModel } from './components/onlinePaymentForm/viewModel'
import OnlinePaymentCreateView from './onlinePaymentCreate/view'
import { useOnlinePaymentCreateViewModel } from './onlinePaymentCreate/viewModel'
import OnlinePaymentEditView from './onlinePaymentEdit/view'
import { useOnlinePaymentEditViewModel } from './onlinePaymentEdit/viewModel'
import OnlinePaymentListView from './onlinePaymentList/view'
import { useOnlinePaymentListViewModel } from './onlinePaymentList/viewModel'

export {
  yup,
  useStatus,
  Loading,
  axiosGet,
  useQuery,
  useState,
  useParams,
  axiosPost,
  UploadIcon,
  FormLayout,
  showSuccess,
  useMutation,
  useCreate,
  SERVICE_URL,
  CATEGORY_URL,
  SUBSCRIPTION_URL,
  WAGE_URL,
  FORM_URL,
  REGION_URL,
  TAG_URL,
  FormikSelect,
  INDEX_PARAMS,
  OstiganTable,
  axiosPutBody,
  FormikUploader,
  FormikTextField,
  useTranslations,
  useListViewModel,
  FormikTextEditor,
  OnlinePaymentForm,
  CustomFormikSelect,
  queryStringEndpoint,
  OnlinePaymentFormView,
  OnlinePaymentEditView,
  OnlinePaymentListView,
  OnlinePaymentCreateView,
  CustomFormikAutoComplete,
  useOnlinePaymentFormViewModel,
  useOnlinePaymentEditViewModel,
  useOnlinePaymentListViewModel,
  useOnlinePaymentCreateViewModel,
}

export type {
  ListViewType,
  QueryListType,
  UseListViewModelType,
  OnlinePaymentFormPropsType,
  OnlinePaymentCreateViewType,
  OnlinePaymentFormViewPropsType,
  UseOnlinePaymentListViewModelType,
  UseOnlinePaymentFormViewModelType,
  UseOnlinePaymentEditViewModelType,
  UseOnlinePaymentCreateViewModelType,
}
