'use client'

import React, { useEffect, useRef, useState } from 'react'
import { getChangedObjectValues } from 'utils/objectsMethods'
import * as yup from 'yup'
import { useParams } from 'next/navigation'
import { useFormikContext } from 'formik'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import {
  FormikSelect,
  FormikTextField,
  LabelField,
  Loading,
  OstiganAutoComplete,
  OstiganCheckbox,
  OstiganRadio,
  OstiganSelect,
  OstiganTable,
  OstiganTextField,
} from 'ui'
import { FormLayout } from 'views/layouts/forms/formLayout'
import { useCreate } from 'hooks/useCreate'
import { showError, showSuccess } from 'hooks/useToust'
import { FORM_INPUT_URL, FORM_URL } from 'constants/endPoints'
import { ADD, FORM_MANAGEMENT } from 'constants/routes'
import {
  axiosGet,
  axiosPost,
  axiosPut,
} from 'configs/httpService/axios/httpService'
import CustomFormikSelect from 'components/customFormikSelect'
import { List } from 'components/list'
import { useListViewModel } from 'components/list/viewModel'
import { FormikSelectActive } from 'components/selects/formikSelectActive/formikSelectActive'
import type { UseListViewModelType } from 'types/common'
import type {
  FormManagementCreateViewModelType,
  FormManagementEditViewModelType,
  FormManagementFormType,
  FormPreviewViewModelType,
  FormPreviewViewType,
} from 'types/formManagement'
import { CloseCircleIcon } from 'ui/components/icons'
import { FormManagementForm } from './components/formManagementForm/index'
import { FormManagementFormView } from './components/formManagementForm/view'
import { useFormManagementFormViewModel } from './components/formManagementForm/viewModel'
import { FormPreview } from './components/formPreview/index'
import { FormPreviewView } from './components/formPreview/view'
import { useFormPreviewViewModel } from './components/formPreview/viewModel'
import { InputPreview } from './components/inputPreview'
import { useFormManagementCreateViewModel } from './formManagementCreate/viewModel'
import { useFormManagementEditViewModel } from './formManagementEdit/viewModel'
import { useFormManagementListViewModel } from './formManagementList/viewModel'

export {
  React,
  useEffect,
  useState,
  useRef,
  useMutation,
  useQuery,
  useParams,
  useTranslations,
  useFormikContext,
  useListViewModel,
  useFormManagementListViewModel,
  useFormManagementFormViewModel,
  useFormPreviewViewModel,
  useFormManagementCreateViewModel,
  useFormManagementEditViewModel,
  useCreate,
  List,
  Loading,
  FormPreviewView,
  FormPreview,
  FormLayout,
  OstiganTable,
  OstiganAutoComplete,
  OstiganRadio,
  OstiganSelect,
  OstiganCheckbox,
  OstiganTextField,
  FormikSelect,
  FormikTextField,
  CustomFormikSelect,
  FormikSelectActive,
  LabelField,
  showError,
  showSuccess,
  InputPreview,
  CloseCircleIcon,
  FormManagementForm,
  FormManagementFormView,
  axiosGet,
  axiosPost,
  axiosPut,
  getChangedObjectValues,
  FORM_URL,
  ADD,
  FORM_MANAGEMENT,
  FORM_INPUT_URL,
  yup,
}
export type {
  UseListViewModelType,
  FormManagementCreateViewModelType,
  FormManagementEditViewModelType,
  FormManagementFormType,
  FormPreviewViewModelType,
  FormPreviewViewType,
}
