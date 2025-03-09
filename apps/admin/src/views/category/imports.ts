'use client'

import { useCallback, useEffect, useState } from 'react'
import { useTranslations } from 'use-intl'
import { handleLocalStorage } from 'utils/localStorage'
import { getChangedObjectValues } from 'utils/objectsMethods'
import * as yup from 'yup'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useMutation, useQuery } from '@tanstack/react-query'
import {
  FormikSelect,
  FormikTextField,
  FormikUploader,
  Loading,
  OstiganSelect,
  OstiganTable,
  queryStringEndpoint,
} from 'ui'
import { FormLayout } from 'views/layouts/forms/formLayout'
import { useCreate } from 'hooks/useCreate'
import { useEdit } from 'hooks/useEdit'
import { showSuccess } from 'hooks/useToust'
import { INDEX_PARAMS } from 'constants/common'
import { CATEGORY_URL, SUBJECT_URL } from 'constants/endPoints'
import { CATEGORY_LIST_QUERY } from 'constants/queryKeys'
import { JUST_ENGLISH_REGEX } from 'constants/regex'
import { axiosGet, axiosPost } from 'configs/httpService/axios/httpService'
import { FormikTextEditor } from 'components/elements/textEditor/formikTextEditor'
import { List } from 'components/list'
import { useListViewModel } from 'components/list/viewModel'
import type {
  BodyInfoCategoryType,
  CategoryDetailDataType,
  CategoryDetailViewPropsType,
  InitialValuesType,
  UseCategoryCreateViewModelType,
  UseCategoryEditViewModelType,
  UseCategoryListViewModelType,
} from 'types/category'
import type {
  ListViewType,
  QueryListType,
  UseListViewModelType,
} from 'types/common'
import { AttachIcon, UserCircleIcon } from 'ui/components/icons'
import CategoryDetail from './categoryCreate'
import CategoryCreateView from './categoryCreate/view'
import { useCategoryCreateViewModel } from './categoryCreate/viewModel'
import CategoryEditView from './categoryEdit/view'
import { useCategoryEditViewModel } from './categoryEdit/viewModel'
import { useCategoryListViewModel } from './categoryList/viewModel'
import CategoryForm from './component/categoryForm'
import CategoryCreateFormView from './component/categoryForm/view'
import { useCategoryFormViewModel } from './component/categoryForm/viewModel'

export {
  yup,
  List,
  Image,
  Loading,
  useEdit,
  useState,
  useQuery,
  axiosGet,
  useCreate,
  useEffect,
  useParams,
  axiosPost,
  AttachIcon,
  FormLayout,
  useCallback,
  showSuccess,
  SUBJECT_URL,
  useMutation,
  CATEGORY_LIST_QUERY,
  INDEX_PARAMS,
  CategoryForm,
  OstiganTable,
  CATEGORY_URL,
  FormikSelect,
  OstiganSelect,
  UserCircleIcon,
  CategoryDetail,
  FormikUploader,
  useTranslations,
  FormikTextField,
  useListViewModel,
  CategoryEditView,
  FormikTextEditor,
  CategoryCreateView,
  JUST_ENGLISH_REGEX,
  handleLocalStorage,
  queryStringEndpoint,
  CategoryCreateFormView,
  getChangedObjectValues,
  useCategoryFormViewModel,
  useCategoryEditViewModel,
  useCategoryListViewModel,
  useCategoryCreateViewModel,
}

export type {
  ListViewType,
  UseCategoryEditViewModelType,
  CategoryDetailViewPropsType,
  UseListViewModelType,
  BodyInfoCategoryType,
  QueryListType,
  CategoryDetailDataType,
  UseCategoryCreateViewModelType,
  UseCategoryListViewModelType,
  InitialValuesType,
}
