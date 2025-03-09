'use client'

import type { FC } from 'react'
import React, { useCallback, useEffect, useState } from 'react'
import { getChangedObjectValues } from 'utils/objectsMethods'
import * as yup from 'yup'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { Form } from 'formik'
import { useMutation, useQuery , useQueryClient } from '@tanstack/react-query'

import { useTranslations } from 'next-intl'
import {
  FormikRadio,
  FormikTextField,
  FormikUploader,
  Loading,
  OstiganSwitch,
  OstiganTable,
  queryStringEndpoint,
} from 'ui'
import { useCreate } from 'hooks/useCreate'
import { useEdit } from 'hooks/useEdit'
import { showSuccess } from 'hooks/useToust'
import { INDEX_PARAMS } from 'constants/common'
import { CURRENCY_URL, REGION_URL } from 'constants/endPoints'
import { REGION_LIST_QUERY } from 'constants/queryKeys'
import { JUST_ENGLISH_REGEX } from 'constants/regex'
import { REGION } from 'constants/routes'
import { axiosGet, axiosPost } from 'configs/httpService/axios/httpService'
import CustomFormikSelect from 'components/customFormikSelect'
import { List } from 'components/list'
import { useListViewModel } from 'components/list/viewModel'
import { useRouter } from 'components/other/navigation'
import type {
  CreatePropsType,
  EditPropsType,
  EditViewModelType,
  QueryListType,
  UseListViewModelType,
} from 'types/common'
import type {
  CreateValuesType,
  RegionType,
  ReionInfotype,
  UseListRegionViewModelType,
  UseRegionViewModelType,
  UseViewModelReturnType,
} from 'types/regions'
import { FormLayout } from '../layouts/forms/formLayout'
import { UploadIcon } from 'ui/components/icons'
import { RegionForm } from './components/form'
import { useRegionFormViewModel } from './components/form/viewModel'
import EditProductsTable from './components/regionProducts'
import { useViewModelRegionProducts } from './components/regionProducts/viewModel'
import RiongCreateView from './regionCreate/view'
import useReionCreateViewModel from './regionCreate/viewModel'
import RegionEditView from './regionEdit/view'
import useViewModelEditRegion from './regionEdit/viewModel'
import { useRegionViewModel } from './regionList/viewModel'

export {
  yup,
  Form,
  List,
  React,
  Image,
  REGION,
  type FC,
  useEdit,
  Loading,
  axiosGet,
  useState,
  useQuery,
  axiosPost,
  useEffect,
  useCreate,
  useRouter,
  useParams,
  REGION_URL,
  RegionForm,
  FormLayout,
  UploadIcon,
  showSuccess,
  useMutation,
  FormikRadio,
  useCallback,
  OstiganTable,
  INDEX_PARAMS,
  CURRENCY_URL,
  RegionEditView,
  FormikUploader,
  useTranslations,
  useQueryClient,
  RiongCreateView,
  FormikTextField,
  REGION_LIST_QUERY,
  useListViewModel,
  EditProductsTable,
  CustomFormikSelect,
  useRegionViewModel,
  JUST_ENGLISH_REGEX,
  queryStringEndpoint,
  OstiganSwitch,
  useRegionFormViewModel,
  useViewModelEditRegion,
  getChangedObjectValues,
  useReionCreateViewModel,
  useViewModelRegionProducts,
}

export type {
  RegionType,
  EditPropsType,
  ReionInfotype,
  QueryListType,
  CreatePropsType,
  UseListRegionViewModelType,
  CreateValuesType,
  UseListViewModelType,
  EditViewModelType,
  UseRegionViewModelType,
  UseViewModelReturnType,
}
