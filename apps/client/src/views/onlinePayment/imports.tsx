import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import * as yup from 'yup'
import { useParams } from 'next/navigation'
import { useFormikContext } from 'formik'
import { InputAdornment } from '@mui/material'
import { useTranslations } from 'next-intl'
import {
  FormikAutoComplete,
  FormikCheckbox,
  FormikRadio,
  FormikSelect,
  FormikTextField,
  FormWrapper,
  Loading,
  OstiganButton,
} from 'ui'
import { useAxiosMutation } from '@/hooks/useAxiosMutation'
import { useAxiosQuery } from '@/hooks/useAxiosQuery'
import UsePrice from '@/hooks/usePrice'
import UseTomanToRial from '@/hooks/useTomanToRial'
import UseWage from '@/hooks/useWage'
import {
  ONLINE_PAYMENT_SERVICE_URL,
  ONLINE_PAYMENT_URL,
} from '@/constants/endPoints'
import { TextWithIcon } from '@/components/blocks/textWithIcon'
import { Link } from '@/components/others/navigation'
import { ProductDetailHeaderBox } from '@/components/productDetails/productDetailHeaderBox'
import { ProductsList } from '../../components/productsList'
import {
  ArrowToSideLeftIcon,
  EmailIcon,
  GiftCardCodeIcon,
  PhoneIcon,
} from 'ui/components/icons'
import { OnlinePaymentForm } from './components/form'
import { OnlinePaymentFormView } from './components/form/view'
import { useOnlinePaymentFormViewModel } from './components/form/viewModel'
import { InputView } from './components/inputs/view'
import { PreInvoice } from './components/preInvoice/index'
import { PreInvoiceView } from './components/preInvoice/view'
import { usePreInvoiceViewModel } from './components/preInvoice/viewModel'
import { OnlinePaymentDetailsView } from './onlinePaymentDetaile/view'
import { useOnlinePaymentDetailsViewModel } from './onlinePaymentDetaile/viewModel'
import type { RootState } from '@/redux/store'

export {
  useState,
  useEffect,
  useSelector,
  useParams,
  useAxiosQuery,
  useFormikContext,
  useAxiosMutation,
  useTranslations,
  UsePrice,
  UseWage,
  Link,
  PreInvoice,
  OnlinePaymentForm,
  OnlinePaymentFormView,
  ProductDetailHeaderBox,
  OnlinePaymentDetailsView,
  InputView,
  PreInvoiceView,
  usePreInvoiceViewModel,
  useOnlinePaymentFormViewModel,
  useOnlinePaymentDetailsViewModel,
  UseTomanToRial,
  TextWithIcon,
  FormikAutoComplete,
  ProductsList,
  FormikRadio,
  FormikSelect,
  FormikTextField,
  OstiganButton,
  Loading,
  FormikCheckbox,
  FormWrapper,
  ArrowToSideLeftIcon,
  EmailIcon,
  GiftCardCodeIcon,
  PhoneIcon,
  InputAdornment,
  ONLINE_PAYMENT_URL,
  ONLINE_PAYMENT_SERVICE_URL,
  yup,
}
export type { RootState }
