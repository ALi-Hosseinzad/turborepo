import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import * as yup from 'yup'
import { useRouter } from 'next/navigation'
import InputAdornment from '@mui/material/InputAdornment'
import { useLocale, useTranslations } from 'next-intl'
import {
  FormikCheckbox,
  FormikTextField,
  FormWrapper,
  Loading,
  OstiganButton,
  OstiganModal,
} from 'ui'
import type {
  BillProps,
  BreadcrumbType,
  CheckoutPropsType,
  CheckoutWrapperProps,
  DiscountProps,
  OnlinePaymentItem,
  OrderableType,
  OrderDataType,
  OrderInfoProps,
  OrderInfoType,
  UseBillViewModelProps,
  UseDiscountViewModelProps,
} from '@/types/checkout'
import { useAxiosMutation } from '@/hooks/useAxiosMutation'
import { useAxiosQuery } from '@/hooks/useAxiosQuery'
import UseTomanToRial from '@/hooks/useTomanToRial'
import {
  CHECKOUT_DISCOUNT_URL,
  CHECKOUT_PAYMENT_URL,
  CHECKOUT_UNDO_DISCOUNT_URL,
  ORDER_URL,
  PAYMENT_PAY_URL,
} from '@/constants/endPoints'
import {
  DASHBOARD,
  GIFT_CARD,
  ONLINE_PAYMENT,
  ORDERS,
} from '@/constants/routes'
import { TextIcon } from '@/components/productsList/components/other/textIcon'
import { BreadCrumbs } from '../authorization/imports'
import {
  ArrowLeftIcon,
  DiscountIcon,
  PrintIcon,
  SaveIcon,
} from 'ui/components/icons'
import { AddBalanceModelView } from './components/addBalanceModal/view'
import { useAddBalanceModalViewModel } from './components/addBalanceModal/viewModal'
import Bill from './components/bill/index'
import BillView from './components/bill/view'
import { useBillViewModel } from './components/bill/viewModel'
import CheckoutSkeleton from './components/checkoutSkeleton'
import CheckoutWrapper from './components/checkoutWrapper'
import Discount from './components/discount'
import DiscountView from './components/discount/view'
import { useDiscountViewModel } from './components/discount/viewModel'
import OrderInfo from './components/orderInfo/index'
import OrderInfoView from './components/orderInfo/view'
import { useOrderInfoViewModel } from './components/orderInfo/viewModel'
import { useCheckoutViewModel } from './components/useCheckoutViewModel'
import type { RootState } from '@/redux/store'

export {
  React,
  yup,
  useEffect,
  useLocale,
  useState,
  useRouter,
  InputAdornment,
  useTranslations,
  TextIcon,
  FormikTextField,
  FormikCheckbox,
  CheckoutSkeleton,
  FormWrapper,
  Loading,
  OstiganButton,
  OstiganModal,
  BreadCrumbs,
  CheckoutWrapper,
  ArrowLeftIcon,
  PrintIcon,
  SaveIcon,
  DiscountIcon,
  useCheckoutViewModel,
  useDiscountViewModel,
  OrderInfo,
  OrderInfoView,
  Discount,
  DiscountView,
  useOrderInfoViewModel,
  Bill,
  useBillViewModel,
  BillView,
  UseTomanToRial,
  useAddBalanceModalViewModel,
  AddBalanceModelView,
  DASHBOARD,
  GIFT_CARD,
  ORDERS,
  ONLINE_PAYMENT,
  ORDER_URL,
  CHECKOUT_DISCOUNT_URL,
  CHECKOUT_UNDO_DISCOUNT_URL,
  PAYMENT_PAY_URL,
  CHECKOUT_PAYMENT_URL,
  useAxiosQuery,
  useAxiosMutation,
  useSelector,
}
export type {
  RootState,
  CheckoutPropsType,
  OrderDataType,
  OrderInfoProps,
  BreadcrumbType,
  CheckoutWrapperProps,
  OrderInfoType,
  OrderableType,
  DiscountProps,
  UseDiscountViewModelProps,
  BillProps,
  UseBillViewModelProps,
  OnlinePaymentItem,
}
