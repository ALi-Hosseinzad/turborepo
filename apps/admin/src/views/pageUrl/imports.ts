'use client'

import { useEffect, useState } from 'react'
import { handleLocalStorage } from 'utils/localStorage'
import { getChangedObjectValues } from 'utils/objectsMethods'
import * as yup from 'yup'
import { useParams } from 'next/navigation'
import type { FormikHelpers } from 'formik'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { FormikSelect, FormikTextField, Loading, OstiganTable } from 'ui'
import { FormLayout } from 'views/category/imports'
import { axiosGet, axiosPost, axiosPut } from 'views/tag/imports'
import { showSuccess } from 'hooks/useToust'
import { PAGE_URL_URL } from 'constants/endPoints'
import { ADD, ADMIN, PAGE_URL } from 'constants/routes'
import { useListViewModel } from 'components/list/viewModel'
import type {
  PageUrlCreateViewModelType,
  PageUrlFormDataType,
} from 'types/pageUrl.d'
import { PageUrlForm } from './components/pageUrlForm'
import PageUrlFormView from './components/pageUrlForm/view'
import { usePageUrlFormViewModel } from './components/pageUrlForm/viewModel'
import { usePageUrlCreateViewModel } from './pageUrlCreate/viewModel'
import PageUrlEditView from './pageUrlEdit/view'
import { usePageUrlEditViewModel } from './pageUrlEdit/viewModel'
import PageUrlListView from './pageUrlList/view'
import { usePageUrlListViewModel } from './pageUrlList/viewModel'

export {
  useEffect,
  useState,
  useParams,
  useMutation,
  useQuery,
  axiosGet,
  axiosPut,
  axiosPost,
  showSuccess,
  useTranslations,
  PageUrlListView,
  PageUrlEditView,
  PageUrlForm,
  PageUrlFormView,
  usePageUrlEditViewModel,
  usePageUrlListViewModel,
  usePageUrlCreateViewModel,
  useListViewModel,
  getChangedObjectValues,
  usePageUrlFormViewModel,
  handleLocalStorage,
  Loading,
  yup,
  FormikSelect,
  FormikTextField,
  FormLayout,
  OstiganTable,
  PAGE_URL_URL,
  ADD,
  ADMIN,
  PAGE_URL,
}

export type { PageUrlCreateViewModelType, PageUrlFormDataType, FormikHelpers }
