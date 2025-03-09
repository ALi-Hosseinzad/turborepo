'use client'

import { useEffect, useState } from 'react'
import * as yup from 'yup'
import { useParams } from 'next/navigation'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import {
  FormikAutoComplete,
  FormikSelect,
  FormikTextField,
  Loading,
  OstiganTable,
} from 'ui'
import { INDEX_PARAMS } from 'constants/common'
import {
  GET_NAME_GIFT_CARD_PRODUCT_URL,
  GIFT_CARD_PRODUCT_BUY_PRICE_URL,
  GIFT_CARD_PRODUCT_URL,
  GIFT_CARD_TOKEN_URL,
} from 'constants/endPoints'
import {
  axiosGet,
  axiosPost,
  axiosPut,
} from 'configs/httpService/axios/httpService'
import { List } from 'components/list'
import { useListViewModel } from 'components/list/viewModel'
import type { QueryListType } from 'types/common'
import type {
  TokenManagementFormType,
  TokenManagementFormViewType,
  UseTokenManagementCreateViewModelType,
  UseTokenManagementEditViewModelType,
  UseTokenManagementFormViewModelType,
} from 'types/tokenManagement'
import { ADD, TOKEN_MANAGEMENT } from '../../constants/routes'
import { showError, showSuccess } from '../../hooks/useToust'
import { FormLayout } from '../layouts/forms/formLayout'
import { UploadIcon } from 'ui/components/icons'
import { TokenManagementForm } from './components/tokenManagementForm'
import { TokenManagementFormView } from './components/tokenManagementForm/view'
import { useTokenManagementFormViewModel } from './components/tokenManagementForm/viewModel'
import { useTokenManagementCreateViewModel } from './tokenManagementCreate/viewModel'
import { useTokenManagementEditViewModel } from './tokenManagementEdit/viewModel'
import { useTokenManagementListViewModel } from './tokenManagementList/viewModel'

export {
  useState,
  useParams,
  useEffect,
  useQuery,
  useMutation,
  useTranslations,
  useTokenManagementListViewModel,
  useTokenManagementFormViewModel,
  useTokenManagementCreateViewModel,
  useTokenManagementEditViewModel,
  TokenManagementFormView,
  useListViewModel,
  FormLayout,
  FormikAutoComplete,
  FormikTextField,
  FormikSelect,
  TokenManagementForm,
  Loading,
  List,
  showError,
  showSuccess,
  OstiganTable,
  INDEX_PARAMS,
  GIFT_CARD_TOKEN_URL,
  GIFT_CARD_PRODUCT_BUY_PRICE_URL,
  GIFT_CARD_PRODUCT_URL,
  GET_NAME_GIFT_CARD_PRODUCT_URL,
  ADD,
  TOKEN_MANAGEMENT,
  axiosGet,
  axiosPost,
  axiosPut,
  UploadIcon,
  yup,
}

export type {
  QueryListType,
  UseTokenManagementCreateViewModelType,
  UseTokenManagementFormViewModelType,
  UseTokenManagementEditViewModelType,
  TokenManagementFormType,
  TokenManagementFormViewType,
}
