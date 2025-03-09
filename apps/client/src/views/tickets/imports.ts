'use client'

import { useState } from 'react'
import { useSelector } from 'react-redux'
import * as yup from 'yup'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Skeleton } from '@mui/material'
import { useTranslations } from 'next-intl'
import {
  FormikSelect,
  FormikTextEditor,
  FormikTextField,
  FormikUploader,
  FormWrapper,
  OstiganButton,
} from 'ui'
import { useAxiosMutation } from '@/hooks/useAxiosMutation'
import { useAxiosQuery } from '@/hooks/useAxiosQuery'
import useWindowDimensions from '@/hooks/useWindowDimension'
import {
  TICKET_ROOTS_URL,
  TICKET_SHOW_DETAIL_URL,
  TICKET_SUBJECT_URL,
  TICKET_UPDATE_URL,
  TICKET_URL,
} from '@/constants/endPoints'
import { ADD, TICKETS } from '@/constants/routes'
import Breadcrumbs from '@/components/breadCrumbs'
import { List } from '@/components/list'
import TableNotFound from '@/components/list/tableNotFound'
import { useRouter } from '@/components/nextIntl/navigation'
import TicketAddSkeleton from '@/components/skeletons/ticketAddSkeleton'
import TicketChooseSubjectSkeleton from '@/components/skeletons/ticketChooseSubjectSkeleton'
import TicketDetailSkeleton from '@/components/skeletons/ticketDetailSkeleton'
import TextIcon from '@/components/textIcon'
import {
  ArrowLeftIcon,
  ArrowToSideLeftIcon,
  AttachIcon,
  CloseIcon,
  NotFoundSearchIcon,
  PlusIcon,
  ScurityIcon,
  SendIcon,
  UserAdminCircleIcon,
  UserCircleIcon,
} from 'ui/components/icons'
import { Spinner } from 'ui/components/loading/spinner'
import { DesktopTicketDetailFormView } from './components/desktopTicketDetailForm/view'
import { MobileTicketDetailFormView } from './components/mobileTicketDetailForm/view'
import TicketChooseSubject from './components/ticketChooseSubject'
import TicketChooseSubjectView from './components/ticketChooseSubject/view'
import { useTicketChooseSubject } from './components/ticketChooseSubject/viewModel'
import TicketDetailCreate from './components/ticketDetailCreate'
import TicketDetailForm from './components/ticketDetailForm'
import TicketDetailFormView from './components/ticketDetailForm/view'
import { useTicketDetailFormViewModel } from './components/ticketDetailForm/viewModel'
import TicketDetailHeader from './components/ticketDetailHeader'
import TicketDetailList from './components/ticketDetailList'
import TicketMessageBox from './components/ticketDetailList/ticketMessageBox'
import TicketFaq from './components/ticketFaq'
import TicketForm from './components/ticketForm'
import TicketFormView from './components/ticketForm/view'
import { useTicketFormViewModel } from './components/ticketForm/viewModel'
import TextArrowRow from './components/ticketTextArrowRow'
import ToRespond from './components/toRespond'
import TicketAddView from './ticketAdd/view'
import { useTicketAddViewModel } from './ticketAdd/viewModel'
import TicketDetailView from './TicketDetail/view'
import { useTicketDetailViewModel } from './TicketDetail/viewModel'
import TicketList from './ticketList'
import TicketListView from './ticketList/view'
import { useTicketListViewModel } from './ticketList/viewModel'
import type { RootState } from '@/redux/store'

export {
  useWindowDimensions,
  ADD,
  yup,
  TicketDetailFormView,
  List,
  TICKETS,
  useState,
  PlusIcon,
  Skeleton,
  TicketDetailForm,
  TicketFaq,
  ToRespond,
  useRouter,
  useParams,
  Link,
  TICKET_URL,
  TICKET_UPDATE_URL,
  TicketList,
  TicketForm,
  FormWrapper,
  DesktopTicketDetailFormView,
  MobileTicketDetailFormView,
  TextArrowRow,
  FormikTextEditor,
  FormikSelect,
  ArrowLeftIcon,
  TicketAddView,
  useAxiosQuery,
  TicketDetailCreate,
  useSelector,
  TicketDetailList,
  OstiganButton,
  TableNotFound,
  UserCircleIcon,
  ScurityIcon,
  FormikUploader,
  TicketFormView,
  TicketListView,
  UserAdminCircleIcon,
  Spinner,
  CloseIcon,
  SendIcon,
  FormikTextField,
  Breadcrumbs,
  TicketDetailSkeleton,
  useTranslations,
  useTicketDetailFormViewModel,
  TicketDetailView,
  useAxiosMutation,
  TicketMessageBox,
  TICKET_ROOTS_URL,
  TicketAddSkeleton,
  TicketDetailHeader,
  TICKET_SUBJECT_URL,
  NotFoundSearchIcon,
  AttachIcon,
  TicketChooseSubject,
  ArrowToSideLeftIcon,
  TextIcon,
  useTicketAddViewModel,
  TICKET_SHOW_DETAIL_URL,
  useTicketFormViewModel,
  useTicketChooseSubject,
  useTicketListViewModel,
  TicketChooseSubjectView,
  useTicketDetailViewModel,
  TicketChooseSubjectSkeleton,
}

export type { RootState }
