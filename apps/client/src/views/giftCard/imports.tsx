'use client'

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import * as yup from 'yup'
import { useRouter } from 'next/navigation'
import { useFormikContext } from 'formik'
import { useLocale, useTranslations } from 'next-intl'
import {
  FormikSwitch,
  FormikTextField,
  FormWrapper,
  Loading,
  OstiganButton,
  OstiganRadio,
} from 'ui'
import type { GiftCardDetailsViewModelType } from '@/types/giftCard'
import { useAxiosMutation } from '@/hooks/useAxiosMutation'
import { useAxiosQuery } from '@/hooks/useAxiosQuery'
import UseTomanToRial from '@/hooks/useTomanToRial'
import { GIFT_CARD_PACKAGE_URL, ORDER_URL } from '@/constants/endPoints'
import { RULE_URL } from '@/constants/routes'
import { TextWithIcon } from '@/components/blocks/textWithIcon'
import { CounterButton } from '@/components/button/counterButton'
import { Link } from '@/components/others/navigation'
import { ProductDetailHeaderBox } from '@/components/productDetails/productDetailHeaderBox'
import { ProductsList } from '@/components/productsList'
import {
  ArrowToSideLeftIcon,
  DiscountRedDotIcon,
  DiscountVerticalFlagIcon,
  EmailIcon,
  GiftCardCodeIcon,
  PhoneIcon,
} from 'ui/components/icons'
import { PreInvoice } from './components/preInvoice'
import { PreInvoiceView } from './components/preInvoice/view'
import { usePreInvoiceViewModel } from './components/preInvoice/viewModel'
import { GiftCardDetailsView } from './giftCardDetaile/view'
import { useGiftCardDetailsViewModel } from './giftCardDetaile/viewModel'
import type { RootState } from '@/redux/store'

export {
  React,
  useEffect,
  useState,
  useAxiosQuery,
  useFormikContext,
  useTranslations,
  useSelector,
  useRouter,
  useAxiosMutation,
  useLocale,
  UseTomanToRial,
  Loading,
  FormWrapper,
  OstiganRadio,
  FormikSwitch,
  FormikTextField,
  OstiganButton,
  ProductsList,
  GiftCardDetailsView,
  useGiftCardDetailsViewModel,
  ProductDetailHeaderBox,
  PreInvoice,
  PreInvoiceView,
  usePreInvoiceViewModel,
  TextWithIcon,
  CounterButton,
  Link,
  GIFT_CARD_PACKAGE_URL,
  ORDER_URL,
  RULE_URL,
  DiscountRedDotIcon,
  DiscountVerticalFlagIcon,
  ArrowToSideLeftIcon,
  EmailIcon,
  GiftCardCodeIcon,
  PhoneIcon,
  yup,
}

export type { RootState, GiftCardDetailsViewModelType }
