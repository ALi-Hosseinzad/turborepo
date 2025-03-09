'use client'

import { useState } from 'react'
import { handleLocalStorage } from 'utils/localStorage'
import * as yup from 'yup'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import {
  FormikUploader,
  FormWrapper,
  Loading,
  OstiganTable,
  queryStringEndpoint,
} from 'ui'
import { FormLayout } from 'views/layouts/forms/formLayout'
import { INDEX_PARAMS } from 'constants/common'
import { SUBJECT_URL, TICKET_URL } from 'constants/endPoints'
import { axiosGet, axiosPost } from 'configs/httpService/axios/httpService'
import CustomFormikSelect from 'components/customFormikSelect'
import { FormikTextEditor } from 'components/elements/textEditor/formikTextEditor'
import FormikSelectSubjects from 'components/FormikSelectSubjects'
import { useListViewModel } from 'components/list/viewModel'
import type { QueryListType, UseListViewModelType } from 'types/common'
import type {
  BodyInfoTicketType,
  TicketDetailDataType,
  TicketDetailViewPropsType,
  TicketReplyFormPropsType,
  UseTicketDetailViewModelType,
} from 'types/ticket'
import { AttachIcon, UserCircleIcon } from 'ui/components/icons'
import { DeleteModal } from 'ui/components/modal/deleteModal'
import TicketDetailHead from './component/ticketDetailHead'
import TicketDetailList from './component/ticketDetailList'
import TicketReplyForm from './component/ticketReplyForm'
import TicketSubject from './component/ticketSubject'
import TicketDetail from './ticketDetail'
import TicketDetailView from './ticketDetail/view'
import { useTicketDetailViewModel } from './ticketDetail/viewModel'
import TicketListview from './ticketList/view'
import { useTicketListViewModel } from './ticketList/viewModel'

export {
  yup,
  Image,
  Loading,
  useListViewModel,
  useState,
  useQuery,
  axiosGet,
  useParams,
  axiosPost,
  AttachIcon,
  FormLayout,
  TICKET_URL,
  DeleteModal,
  FormWrapper,
  SUBJECT_URL,
  useMutation,
  INDEX_PARAMS,
  TicketDetail,
  OstiganTable,
  TicketSubject,
  UserCircleIcon,
  FormikUploader,
  TicketListview,
  TicketReplyForm,
  useTranslations,
  TicketDetailHead,
  TicketDetailList,
  TicketDetailView,
  FormikTextEditor,
  CustomFormikSelect,
  handleLocalStorage,
  queryStringEndpoint,
  FormikSelectSubjects,
  useTicketListViewModel,
  useTicketDetailViewModel,
}

export type {
  UseTicketDetailViewModelType,
  TicketDetailViewPropsType,
  UseListViewModelType,
  BodyInfoTicketType,
  QueryListType,
  TicketDetailDataType,
  TicketReplyFormPropsType,
}
