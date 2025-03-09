'use client'

import { useEffect, useState } from 'react'
import { getChangedObjectValues } from 'utils/objectsMethods'
import * as yup from 'yup'
import { useParams } from 'next/navigation'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import {
  FormikRadio,
  FormikTextField,
  Header2,
  Loading,
  OstiganSwitch,
  OstiganTable,
  queryStringEndpoint,
} from 'ui'
import { FormLayout } from 'views/tag/imports'
import { useCreate } from 'hooks/useCreate'
import UseJalaliDate from 'hooks/useJalaliDate'
import UseTomanToRial from 'hooks/useTomanToRial'
import { showSuccess } from 'hooks/useToust'
import { INDEX_PARAMS } from 'constants/common'
import { CURRENCY_URL } from 'constants/endPoints'
import { ADD, ADMIN, CURRENCY, CURRENCY_MANGMENT } from 'constants/routes'
import { List } from 'components/list'
import { useListViewModel } from 'components/list/viewModel'
import type { QueryListType } from 'types/common'
import type {
  CurrencyCreateViewType,
  CurrencyFormViewType,
  CurrencyTableType,
  UseCurrencyCreateViewModelType,
  UseCurrencyEditViewModelType,
} from 'types/currency'
import {
  axiosGet,
  axiosPost,
  axiosPutBody,
 axiosPut } from '../../configs/httpService/axios/httpService'

import { CURRENCY_LIST_QUERY } from '../../constants/queryKeys'
import { CurrencyForm } from './components/currencyForm'
import CurrencyFormView from './components/currencyForm/view'
import { useSubjectFormViewModel } from './components/currencyForm/viewModel'
import { CurrencyHistory } from './components/currencyHistory'
import { CurrencyHistoryView } from './components/currencyHistory/view'
import { useCurrencyHistoryViewModel } from './components/currencyHistory/viewModel'
import { useCurrencyCreateViewModel } from './currencyCreate/viewModel'
import CurrencyEditView from './currencyEdit/view'
import { useCurrencyEditViewModel } from './currencyEdit/viewModel'
import { useCurrencyListViewModel } from './currencyList/viewModel'

export {
  useListViewModel,
  CURRENCY_LIST_QUERY,
  CurrencyForm,
  CurrencyFormView,
  CurrencyHistory,
  CurrencyHistoryView,
  useCurrencyHistoryViewModel,
  useCurrencyCreateViewModel,
  CurrencyEditView,
  useCurrencyEditViewModel,
  useState,
  useEffect,
  useCurrencyListViewModel,
  useQuery,
  INDEX_PARAMS,
  queryStringEndpoint,
  useQueryClient,
  useTranslations,
  useCreate,
  axiosGet,
  axiosPutBody,
  getChangedObjectValues,
  UseTomanToRial,
  showSuccess,
  OstiganTable,
  OstiganSwitch,
  CURRENCY_URL,
  CURRENCY_MANGMENT,
  CURRENCY,
  ADD,
  yup,
  ADMIN,
  useMutation,
  axiosPost,
  useSubjectFormViewModel,
  FormikRadio,
  FormikTextField,
  Loading,
  FormLayout,
  List,
  Header2,
  axiosPut,
  useParams,
  UseJalaliDate,
}

export type {
  QueryListType,
  CurrencyTableType,
  UseCurrencyCreateViewModelType,
  UseCurrencyEditViewModelType,
  CurrencyFormViewType,
  CurrencyCreateViewType,
}
