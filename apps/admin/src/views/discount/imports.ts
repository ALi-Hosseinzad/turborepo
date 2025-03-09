'use client'

import { useEffect, useState } from 'react'
import { handleLocalStorage } from 'utils/localStorage'
import * as yup from 'yup'
import { useParams } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import {
  FormikRadio,
  FormikSelect,
  FormikTextField,
  Loading,
  OstiganTable,
} from 'ui'
import { FormLayout } from 'views/category/imports'
import { axiosPost } from 'views/login/imports'
import UseDifferenceDays from 'hooks/useDifferenceDays'
import { useEdit } from 'hooks/useEdit'
import { showSuccess } from 'hooks/useToust'
import {
  DISCOUNT_URL,
  GIFT_CARD_PACKAGE_URL,
  GIFT_CARD_PRODUCT_URL,
  GROUP_URL,
  SERVICE_URL,
} from 'constants/endPoints'
import { ADD, ADMIN, DISCOUNT } from 'constants/routes'
import CustomFormikSelect from 'components/customFormikSelect'
import { useListViewModel } from 'components/list/viewModel'
import DiscountFormView from './components/discountForm/view'
import { useDiscountFormViewModel } from './components/discountForm/viewModel'
import { useDiscountCreateViewModel } from './discountCreate/viewModel'
import { useDiscountEditViewModel } from './discountEdit/viewModel'
import DiscountListView from './discountList/view'
import { useDiscountListViewModel } from './discountList/viewModel'

export {
  useDiscountEditViewModel,
  UseDifferenceDays,
  useEdit,
  useState,
  useEffect,
  useParams,
  useMutation,
  CustomFormikSelect,
  axiosPost,
  showSuccess,
  DiscountListView,
  useDiscountListViewModel,
  useListViewModel,
  DiscountFormView,
  useDiscountCreateViewModel,
  FormikSelect,
  OstiganTable,
  DISCOUNT_URL,
  DISCOUNT,
  ADD,
  ADMIN,
  yup,
  FormikRadio,
  FormikTextField,
  Loading,
  FormLayout,
  useDiscountFormViewModel,
  useTranslations,
  handleLocalStorage,
  GIFT_CARD_PACKAGE_URL,
  GIFT_CARD_PRODUCT_URL,
  GROUP_URL,
  SERVICE_URL,
}
