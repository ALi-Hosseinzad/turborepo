'use client'

import axios from 'axios'
import type { ChangeEvent } from 'react'
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
import { FormLayout } from 'views/layouts/forms/formLayout'
import { INDEX_PARAMS } from 'constants/common'
import {
  CURRENCY_URL,
  GET_NAME_GIFT_CARD_PRODUCT_URL,
  GIFT_CARD_PACKAGE_URL,
  GIFT_CARD_PRODUCT_BUY_PRICE_URL,
  GIFT_CARD_PRODUCT_URL,
} from 'constants/endPoints'
import { axiosGet, axiosPost } from 'configs/httpService/axios/httpService'
import CustomFormikAutoComplete from 'components/customFormikAutoComplete'
import { FormikTextEditor } from 'components/elements/textEditor/formikTextEditor'
import { OstiganTextEditor } from 'components/elements/textEditor/ostiganTextEditor'
import type {
  OptionalObjectType,
  QueryListType,
  UseListViewModelType,
} from 'types/common'
import type { GiftCardPriceCreateType } from 'types/giftCardPrice'
import { GiftCardPriceCreateForm } from './components/giftCardPriceForm'
import { GiftCardPriceCreateView } from './giftCardPriceCreate/view'
import { useGiftCardPriceCreateViewModel } from './giftCardPriceCreate/viewModel'
import GiftCardPriceListView from './giftCardPriceList/view'
import { useGiftCardPriceViewModel } from './giftCardPriceList/viewModel'

export {
  yup,
  React,
  axios,
  Header1,
  Header2,
  Loading,
  useState,
  useQuery,
  axiosGet,
  useParams,
  useEffect,
  axiosPost,
  useRouter,
  FormLayout,
  FormWrapper,
  useMutation,
  INDEX_PARAMS,
  CURRENCY_URL,
  OstiganTable,
  FormikSelect,
  FormikWrapper,
  OstiganButton,
  FormikTextField,
  useTranslations,
  FormikTextEditor,
  OstiganTextEditor,
  handleLocalStorage,
  FormikAutoComplete,
  queryStringEndpoint,
  GiftCardPriceListView,
  GIFT_CARD_PACKAGE_URL,
  GIFT_CARD_PRODUCT_URL,
  GiftCardPriceCreateForm,
  GiftCardPriceCreateView,
  CustomFormikAutoComplete,
  useGiftCardPriceViewModel,
  GET_NAME_GIFT_CARD_PRODUCT_URL,
  GIFT_CARD_PRODUCT_BUY_PRICE_URL,
  useGiftCardPriceCreateViewModel,
}
export type {
  GiftCardPriceCreateType,
  QueryListType,
  OptionalObjectType,
  UseListViewModelType,
  ChangeEvent,
}
