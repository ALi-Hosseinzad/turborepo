'use client'

import * as yup from 'yup'
import { useTranslations } from 'next-intl'
import {
  FormikDatePicker,
  FormikSelect,
  FormikTextField,
  FormikUploader,
  Loading,
} from 'ui'
import { FormLayout } from 'views/layouts/forms/formLayout'
import { CustomFormikSelect } from 'views/onlinePayment/imports'
import { useConstants } from 'hooks/useConstants'
import { useCreate } from 'hooks/useCreate'
import { useEdit } from 'hooks/useEdit'
import {
  BANNER_IMAGE_URL,
  BANNER_URL,
  GIFT_CARD_PACKAGE_URL,
  SERVICE_URL,
} from 'constants/endPoints'
import { BANNERIMAGE_LIST_QUERY } from 'constants/queryKeys'
import { ADD } from 'constants/routes'
import { List } from 'components/list'
import { useListViewModel } from 'components/list/viewModel'
import type {
  CreatePropsType,
  EditViewModelType,
  UseListViewModelType,
} from 'types/common'
import { UploadIcon } from 'ui/components/icons'
import BannerImageCreateView from './bannerImageCreate/view'
import { useBannerImageCreateViewModel } from './bannerImageCreate/viewModel'
import BannerImageEditView from './bannerImageEdit/view'
import { useBannerImageEditViewModel } from './bannerImageEdit/viewModel'
import { useBannerImageListViewModel } from './bannerImageList/viewModel'
import BannerImageForm from './components/bannerImageForm'
import BannerImageFormView from './components/bannerImageForm/view'
import { useBannerImageFormViewModel } from './components/bannerImageForm/viewModel'

export {
  yup,
  ADD,
  List,
  useEdit,
  Loading,
  useCreate,
  UploadIcon,
  BANNER_URL,
  FormLayout,
  BANNERIMAGE_LIST_QUERY,
  SERVICE_URL,
  useConstants,
  FormikSelect,
  FormikUploader,
  BannerImageForm,
  FormikTextField,
  useTranslations,
  FormikDatePicker,
  useListViewModel,
  BANNER_IMAGE_URL,
  CustomFormikSelect,
  BannerImageFormView,
  BannerImageEditView,
  GIFT_CARD_PACKAGE_URL,
  BannerImageCreateView,
  useBannerImageFormViewModel,
  useBannerImageEditViewModel,
  useBannerImageListViewModel,
  useBannerImageCreateViewModel,
}

export type { CreatePropsType, UseListViewModelType, EditViewModelType }
