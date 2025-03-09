'use client'

import * as yup from 'yup'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { FormikCheckbox, FormikTextField, FormikUploader, Loading } from 'ui'
import { FormikTextEditor } from 'views/giftCardPrices/imports'
import { FormLayout } from 'views/layouts/forms/formLayout'
import { CustomFormikSelect } from 'views/onlinePayment/imports'
import { useCreate } from 'hooks/useCreate'
import { useEdit } from 'hooks/useEdit'
import { GROUP_URL, NOTIFICATION_URL } from 'constants/endPoints'
import { ADD } from 'constants/routes'
import { List } from 'components/list'
import { useListViewModel } from 'components/list/viewModel'
import type {
  CreatePropsType,
  EditViewModelType,
  UseListViewModelType,
} from 'types/common'
import type {
  NotificationCreateViewType,
  NotificationFormPropsType,
  NotificationFormViewPropsType,
  UseNotificationEditViewModelType,
  UseNotificationFormViewModelType,
} from 'types/notification'
import { UploadIcon } from 'ui/components/icons'
import NotificationForm from './components/notificationForm'
import NotificationFormView from './components/notificationForm/view'
import { useNotificationFormViewModel } from './components/notificationForm/viewModel'
import NotificationCreateView from './notificationCreate/view'
import { useNotificationCreateViewModel } from './notificationCreate/viewModel'
import NotificationEditView from './notificationEdit/view'
import { useNotificationEditViewModel } from './notificationEdit/viewModel'
import { useNotificationListViewModel } from './notificationList/viewModel'

export {
  yup,
  ADD,
  List,
  useEdit,
  Loading,
  useParams,
  useCreate,
  GROUP_URL,
  UploadIcon,
  FormLayout,
  FormikCheckbox,
  FormikUploader,
  FormikTextField,
  useTranslations,
  useListViewModel,
  NotificationForm,
  NOTIFICATION_URL,
  FormikTextEditor,
  CustomFormikSelect,
  NotificationFormView,
  NotificationEditView,
  NotificationCreateView,
  useNotificationFormViewModel,
  useNotificationEditViewModel,
  useNotificationListViewModel,
  useNotificationCreateViewModel,
}
export type {
  CreatePropsType,
  UseListViewModelType,
  EditViewModelType,
  NotificationFormPropsType,
  NotificationCreateViewType,
  NotificationFormViewPropsType,
  UseNotificationFormViewModelType,
  UseNotificationEditViewModelType,
}
