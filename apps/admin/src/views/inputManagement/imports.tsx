'use client'

import { useEffect, useState } from 'react'
import { handleEnumsParse } from 'utils/enumParse'
import { handleLocalStorage } from 'utils/localStorage'
import { getChangedObjectValues } from 'utils/objectsMethods'
import * as yup from 'yup'
import { useParams } from 'next/navigation'
import { useFormikContext } from 'formik'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import {
  FormikAutoComplete,
  FormikRadio,
  FormikSelect,
  FormikTextField,
  FormikUploader,
  Loading,
  OstiganTable,
} from 'ui'
import { FormLayout } from 'views/layouts/forms/formLayout'
import { showError, showSuccess } from 'hooks/useToust'
import { INDEX_PARAMS } from 'constants/common'
import { FORM_INPUT_URL } from 'constants/endPoints'
import {
  EMAIL_REGEX,
  INTEGER_REGEX,
  JUST_ENGLISH_REGEX,
  JUST_PERSIAN_REGEX,
  PHONE_REGEX,
} from 'constants/regex'
import { ADD, INPUT_MANAGEMENT } from 'constants/routes'
import { axiosGet, axiosPost } from 'configs/httpService/axios/httpService'
import { List } from 'components/list'
import { useListViewModel } from 'components/list/viewModel'
import { FormikSelectActive } from 'components/selects/formikSelectActive/formikSelectActive'
import type { QueryListType, UseListViewModelType } from 'types/common'
import type {
  InputManagementCreateViewModelType,
  InputManagementEditViewModelType,
  InputManagementFormType,
  InputManagementFormViewModelType,
  InputManagementFormViewType,
} from 'types/inputManagement'
import { UploadIcon } from 'ui/components/icons'
import { FormikDynamicList } from './components/dynamicList/formikDynamicList'
import { InputManagementForm } from './components/inputManagementForm'
import { InputManagementFormView } from './components/inputManagementForm/view'
import { useInputManagementFormViewModel } from './components/inputManagementForm/viewModel'
import { useInputManagementCreateViewModel } from './inputManagementCreate/viewModel'
import { useInputManagementEditViewModel } from './inputManagementEdit/viewModel'
import { useInputManagementListViewModel } from './inputManagementList/viewModel'

export {
  useState,
  useEffect,
  useParams,
  useFormikContext,
  useQuery,
  useMutation,
  useTranslations,
  axiosGet,
  axiosPost,
  FormLayout,
  InputManagementForm,
  InputManagementFormView,
  useInputManagementListViewModel,
  useInputManagementCreateViewModel,
  useInputManagementFormViewModel,
  useInputManagementEditViewModel,
  useListViewModel,
  OstiganTable,
  FormikAutoComplete,
  FormikRadio,
  FormikSelect,
  FormikTextField,
  FormikUploader,
  FormikDynamicList,
  FormikSelectActive,
  Loading,
  getChangedObjectValues,
  showError,
  showSuccess,
  handleLocalStorage,
  FORM_INPUT_URL,
  INDEX_PARAMS,
  EMAIL_REGEX,
  INTEGER_REGEX,
  JUST_ENGLISH_REGEX,
  JUST_PERSIAN_REGEX,
  PHONE_REGEX,
  ADD,
  List,
  UploadIcon,
  INPUT_MANAGEMENT,
  handleEnumsParse,
  yup,
}

export type {
  QueryListType,
  UseListViewModelType,
  InputManagementEditViewModelType,
  InputManagementCreateViewModelType,
  InputManagementFormType,
  InputManagementFormViewType,
  InputManagementFormViewModelType,
}
