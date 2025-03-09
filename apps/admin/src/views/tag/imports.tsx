'use client'

import React, { useEffect, useState } from 'react'
import { handleEnumsParse } from 'utils/enumParse'
import * as yup from 'yup'
import Image from 'next/image'
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
  TAG_URL,
} from 'constants/endPoints'
import { JUST_ENGLISH_REGEX, JUST_PERSIAN_REGEX } from 'constants/regex'
import { ADD, ADMIN, PRODUCT_MANAGEMENT, TAG } from 'constants/routes'
import { List } from 'components/list'
import { useListViewModel } from 'components/list/viewModel'
import { useRouter } from 'components/other/navigation'
import type { QueryListType, UseListViewModelType } from 'types/common'
import type {
  TagBodyInTableType,
  UseTagCreateViewModelType,
  UseTagEditViewModelType,
  UseTagFormViewModelType,
} from 'types/tag'
import {
  axiosGet,
  axiosPost,
  axiosPut,
} from '../../configs/httpService/axios/httpService'
import { FormLayout } from '../layouts/forms/formLayout'
import { Loading } from 'ui/components/loading/loading'
import { TagForm } from './components/tagForm/index'
import { TagFormView } from './components/tagForm/view'
import { useTagFormViewModel } from './components/tagForm/viewModel'
import { TagHistory } from './components/tagHistory/index'
import { useTagCreateViewModel } from './tagCreate/viewModel'
import { useTagEditViewModel } from './tagEdit/viewModel'
import { useTagListViewModel } from './tagList/viewModel'

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
  ADMIN,
  List,
  Image,
  showSuccess,
  Loading,
  TagForm,
  TagFormView,
  TagHistory,
  TAG,
  TAG_URL,
  axiosGet,
  axiosPost,
  axiosPut,
  queryStringEndpoint,
  useTagListViewModel,
  useTagCreateViewModel,
  useTagFormViewModel,
  useTagEditViewModel,
  handleEnumsParse,
  useListViewModel,
  GIFT_CARD_PRODUCT_URL,
  GIFT_CARD_PACKAGE_URL,
  REGION_URL,
  GIFT_CARD_PRODUCT_BUY_PRICE_URL,
  GIFT_CARD_TOKEN_URL,
  ADD,
  PRODUCT_MANAGEMENT,
  INDEX_PARAMS,
  yup,
  Link,
  JUST_ENGLISH_REGEX,
  JUST_PERSIAN_REGEX,
}
export type {
  QueryListType,
  UseListViewModelType,
  TagBodyInTableType,
  UseTagFormViewModelType,
  UseTagCreateViewModelType,
  UseTagEditViewModelType,
}
