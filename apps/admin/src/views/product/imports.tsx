'use client'

import React, { useEffect, useState } from 'react'
import { handleEnumsParse } from 'utils/enumParse'
import * as yup from 'yup'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useLocale, useTranslations } from 'next-intl'
import {
  FormikAutoComplete,
  FormikRadio,
  FormikSelect,
  FormikTextField,
  Header2,
  OstiganTable,
  queryStringEndpoint,
} from 'ui'
import { showSuccess } from 'hooks/useToust'
import { INDEX_PARAMS } from 'constants/common'
import {
  GIFT_CARD_PACKAGE_URL,
  GIFT_CARD_PRODUCT_BUY_PRICE_URL,
  GIFT_CARD_PRODUCT_URL,
  GIFT_CARD_TOKEN_URL,
  REGION_URL,
} from 'constants/endPoints'
import { ADD, PRODUCT } from 'constants/routes'
import { useRouter } from 'components/other/navigation'
import type { QueryListType, UseListViewModelType } from 'types/common'
import type {
  ProductBodyInTableType,
  ProductHistoryViewModelType,
  UseProductCreateViewModelType,
  UseProductEditViewModelType,
  UseProductFormViewModelType,
} from 'types/product'
import { List } from '../../components/list/index'
import {
  axiosGet,
  axiosPost,
  axiosPut,
} from '../../configs/httpService/axios/httpService'
import { FormLayout } from '../layouts/forms/formLayout'
import { Loading } from 'ui/components/loading/loading'
import { ProductForm } from './components/productForm/index'
import { ProductFormView } from './components/productForm/view'
import { useProductFormViewModel } from './components/productForm/viewModel'
import { ProductHistory } from './components/productHistory/index'
import { ProductHistoryView } from './components/productHistory/view'
import { useProductHistoryViewModel } from './components/productHistory/viewModel'
import { useProductCreateViewModel } from './productCreate/viewModel'
import { useProductEditViewModel } from './productEdit/viewModel'
import { useProductListViewModel } from './productList/viewModel'

export {
  React,
  useState,
  useEffect,
  useRouter,
  useQuery,
  useTranslations,
  useMutation,
  useParams,
  useLocale,
  OstiganTable,
  FormikAutoComplete,
  FormikTextField,
  FormLayout,
  FormikRadio,
  FormikSelect,
  Header2,
  List,
  showSuccess,
  Loading,
  ProductForm,
  ProductFormView,
  ProductHistory,
  axiosGet,
  axiosPost,
  axiosPut,
  queryStringEndpoint,
  useProductListViewModel,
  useProductCreateViewModel,
  useProductFormViewModel,
  useProductEditViewModel,
  ProductHistoryView,
  useProductHistoryViewModel,
  handleEnumsParse,
  GIFT_CARD_PRODUCT_URL,
  GIFT_CARD_PACKAGE_URL,
  REGION_URL,
  GIFT_CARD_PRODUCT_BUY_PRICE_URL,
  GIFT_CARD_TOKEN_URL,
  ADD,
  PRODUCT,
  INDEX_PARAMS,
  yup,
  Link,
}
export type {
  QueryListType,
  UseListViewModelType,
  ProductBodyInTableType,
  UseProductFormViewModelType,
  UseProductCreateViewModelType,
  UseProductEditViewModelType,
  ProductHistoryViewModelType,
}
