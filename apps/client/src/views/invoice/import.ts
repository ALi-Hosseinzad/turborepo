import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import type { InvoicePropsType } from '@/types/invoice'
import { useAxiosQuery } from '@/hooks/useAxiosQuery'
import UseTomanToRial from '@/hooks/useTomanToRial'
import { ORDER_URL } from '@/constants/endPoints'
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
  AttachIcon,
  PrintIcon,
  SaveIcon,
} from 'ui/components/icons'
import ResponseMessageBox from './components/responseMessageBox'
import InvoiceSkeleton from './invoiceSkeleton'
import { useInvoiceViewModel } from './viewModel'

export {
  React,
  Link,
  useEffect,
  useRouter,
  useTranslations,
  TextIcon,
  AttachIcon,
  BreadCrumbs,
  ArrowLeftIcon,
  PrintIcon,
  SaveIcon,
  useInvoiceViewModel,
  UseTomanToRial,
  InvoiceSkeleton,
  ResponseMessageBox,
  DASHBOARD,
  GIFT_CARD,
  ONLINE_PAYMENT,
  ORDERS,
  ORDER_URL,
  useAxiosQuery,
}
export type { InvoicePropsType }
