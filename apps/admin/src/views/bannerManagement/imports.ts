'use client'

import { useState } from 'react'
import { handleLocalStorage } from 'utils/localStorage'
import * as yup from 'yup'
import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import {
  FormikSelect,
  FormikTextField,
  Header2,
  Loading,
  OstiganTable,
} from 'ui'
import { useBannerManagementEditViewModel } from 'views/bannerManagement/bannerManagementEdit/viewModel'
import { CustomFormikSelect } from 'views/discount/imports'
import { FormLayout } from 'views/layouts/forms/formLayout'
import { useCreate } from 'hooks/useCreate'
import { useEdit } from 'hooks/useEdit'
import { BANNER_URL, PAGE_URL_URL } from 'constants/endPoints'
import { JUST_ENGLISH_REGEX } from 'constants/regex'
import { ADD, ADMIN, BANNER, BANNERIMAGE } from 'constants/routes'
import { useListViewModel } from 'components/list/viewModel'
import { useBannerManagementCreateViewModel } from './bannerManagementCreate/viewModel'
import BannerManagementListView from './bannerManagementList/view'
import { useBannerManagementListViewModel } from './bannerManagementList/viewModel'
import BannerManagementForm from './component/bannerManagementForm'
import BannerManagementFormView from './component/bannerManagementForm/view'
import { useBannerManagementFormViewModel } from './component/bannerManagementForm/viewModel'
import { BannerManagementHistory } from './component/bannerManagementHistory'
import { BannerManagementHistoryView } from './component/bannerManagementHistory/view'
import { useBannerManagementHistoryViewModel } from './component/bannerManagementHistory/viewModel'

export {
  BannerManagementListView,
  useBannerManagementListViewModel,
  BannerManagementHistoryView,
  useBannerManagementHistoryViewModel,
  useState,
  useMutation,
  useTranslations,
  useBannerManagementEditViewModel,
  BannerManagementFormView,
  useBannerManagementFormViewModel,
  useBannerManagementCreateViewModel,
  BannerManagementForm,
  BannerManagementHistory,
  Loading,
  CustomFormikSelect,
  handleLocalStorage,
  useListViewModel,
  useEdit,
  useCreate,
  ADD,
  ADMIN,
  BANNER,
  BANNER_URL,
  FormikSelect,
  FormikTextField,
  JUST_ENGLISH_REGEX,
  FormLayout,
  PAGE_URL_URL,
  BANNERIMAGE,
  Header2,
  OstiganTable,
  yup,
}
