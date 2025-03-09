'use client'

import React, { Fragment, useEffect, useState } from 'react'
import { useTranslations } from 'use-intl'
import * as yup from 'yup'
import Image from 'next/image'
import { useParams, usePathname } from 'next/navigation'
import { useMutation, useQuery } from '@tanstack/react-query'
import {
  FormikUploader,
  FormWrapper,
  Loading,
  OstiganButton,
  OstiganTable,
} from 'ui'
import UseTomanToRial from 'hooks/useTomanToRial'
import { showSuccess } from 'hooks/useToust'
import { INDEX_PARAMS } from 'constants/common'
import { ORDER_URL } from 'constants/endPoints'
import { axiosGet, axiosPost } from 'configs/httpService/axios/httpService'
import { FormikTextEditor } from 'components/elements/textEditor/formikTextEditor'
import { useRouter } from 'components/other/navigation'
import type {
  OrderDetailDataType,
  OrderDetailType,
  OrderListViewType,
  OrderQueryListType,
  PaginationType,
  UseOrderDetailModelPropsType,
} from 'types/order'
import type { UserOnSubmitFormikPropsType } from 'types/user'
import { ArrowToSideRightIcon, UploadIcon } from 'ui/components/icons'
import GiftCardProductDetail from './component/giftCardProductDetail'
import OnlinePaymentDetail from './component/onlinePaymentDetail'
import OrderInformationGrid from './component/orderInformationGrid'
import OrderDetailsView from './orderDetail/view'
import { UseOrderDetailModel } from './orderDetail/viewModel'
import OrderListview from './orderList/view'
import { useOrderListViewModel } from './orderList/viewModel'

export {
  React,
  Fragment,
  INDEX_PARAMS,
  OrderDetailsView,
  useOrderListViewModel,
  OstiganTable,
  useTranslations,
  useEffect,
  useState,
  useQuery,
  useMutation,
  usePathname,
  useParams,
  ORDER_URL,
  axiosGet,
  Image,
  FormikTextEditor,
  FormikUploader,
  FormWrapper,
  OstiganButton,
  ArrowToSideRightIcon,
  UploadIcon,
  OrderInformationGrid,
  showSuccess,
  useRouter,
  axiosPost,
  yup,
  GiftCardProductDetail,
  OnlinePaymentDetail,
  OrderListview,
  UseOrderDetailModel,
  UseTomanToRial,
  Loading,
}
export type {
  OrderListViewType,
  PaginationType,
  UserOnSubmitFormikPropsType,
  OrderQueryListType,
  OrderDetailDataType,
  UseOrderDetailModelPropsType,
  OrderDetailType,
}
