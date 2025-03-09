'use client'

import { useEffect, useState } from 'react'
import { getChangedObjectValues } from 'utils/objectsMethods'
import * as yup from 'yup'
import { useParams } from 'next/navigation'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import {
  FormikTextField,
  FormikUploader,
  Loading,
  OstiganTable,
  queryStringEndpoint,
} from 'ui'
import { FormikTextEditor } from 'views/giftCardPrices/imports'
import { FormLayout } from 'views/layouts/forms/formLayout'
import { showError, showSuccess } from 'hooks/useToust'
import { INDEX_PARAMS } from 'constants/common'
import { SUBJECT_URL } from 'constants/endPoints'
import {
  axiosGet,
  axiosPost,
  axiosPutBody,
} from 'configs/httpService/axios/httpService'
import CustomFormikSelect from 'components/customFormikSelect'
import type { QueryListType, UseListViewModelType } from 'types/common'
import type {
  InitialValuesType,
  RolesType,
  SubjectCreateViewType,
  SubjectFormViewType,
  SubjectRecordType,
  TableBodyType,
  UseSubjectCreateViewModelType,
} from 'types/subject'
import SubjectForm from './components/subjectForm/view'
import { useSubjectFormViewModel } from './components/subjectForm/viewModel'
import SubjectCreateView from './subjectCreate/view'
import { useSubjectCreateViewModel } from './subjectCreate/viewModel'
import SubjectEditView from './subjectEdit/view'
import { useSubjectEditViewModel } from './subjectEdit/viewModel'
import SubjectListView from './subjectList/view'
import { useSubjectListViewModel } from './subjectList/viewModel'

export type {
  SubjectFormViewType,
  TableBodyType,
  QueryListType,
  SubjectRecordType,
  UseSubjectCreateViewModelType,
  SubjectCreateViewType,
  RolesType,
  InitialValuesType,
  UseListViewModelType,
}

export {
  axiosPutBody,
  yup,
  getChangedObjectValues,
  useEffect,
  showError,
  useSubjectCreateViewModel,
  FormikUploader,
  useSubjectFormViewModel,
  showSuccess,
  Loading,
  SubjectForm,
  useSubjectEditViewModel,
  SubjectEditView,
  useParams,
  CustomFormikSelect,
  useMutation,
  SubjectCreateView,
  INDEX_PARAMS,
  SUBJECT_URL,
  OstiganTable,
  FormLayout,
  FormikTextEditor,
  FormikTextField,
  axiosGet,
  axiosPost,
  useQuery,
  queryStringEndpoint,
  useSubjectListViewModel,
  useState,
  useTranslations,
  SubjectListView,
}
