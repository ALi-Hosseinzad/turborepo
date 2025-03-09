'use client'

import * as yup from 'yup'
import { useTranslations } from 'next-intl'
import { FormikTextField, Loading } from 'ui'
import { FormikTextEditor } from 'views/giftCardPrices/imports'
import { FormLayout } from 'views/layouts/forms/formLayout'
import { CustomFormikSelect } from 'views/onlinePayment/imports'
import { useCreate } from 'hooks/useCreate'
import { useEdit } from 'hooks/useEdit'
import { FAQ_URL, SUBJECT_URL } from 'constants/endPoints'
import { ADD, ADMIN, FAQ } from 'constants/routes'
import { List } from 'components/list'
import { useListViewModel } from 'components/list/viewModel'
import type {
  CreatePropsType,
  EditViewModelType,
  UseListViewModelType,
} from 'types/common'
import type {
  FaqCreateViewType,
  FaqFormPropsType,
  FaqFormViewPropsType,
  UseFaqEditViewModelType,
  UseFaqFormViewModelType,
} from 'types/faq'
import FaqForm from './components/faqForm'
import FaqFormView from './components/faqForm/view'
import { useFaqFormViewModel } from './components/faqForm/viewModel'
import FaqCreateView from './faqCreate/view'
import { useFaqCreateViewModel } from './faqCreate/viewModel'
import FaqEditView from './faqEdit/view'
import { useFaqEditViewModel } from './faqEdit/viewModel'
import { useFaqListViewModel } from './faqList/viewModel'

export {
  yup,
  ADD,
  useCreate,
  useListViewModel,
  useEdit,
  Loading,
  FaqForm,
  List,
  FAQ_URL,
  FAQ,
  FormLayout,
  SUBJECT_URL,
  FaqFormView,
  FaqEditView,
  FaqCreateView,
  FormikTextField,
  useTranslations,
  FormikTextEditor,
  CustomFormikSelect,
  useFaqFormViewModel,
  useFaqEditViewModel,
  useFaqListViewModel,
  useFaqCreateViewModel,
  ADMIN,
}
export type {
  FaqFormPropsType,
  FaqCreateViewType,
  UseListViewModelType,
  FaqFormViewPropsType,
  EditViewModelType,
  CreatePropsType,
  UseFaqFormViewModelType,
  UseFaqEditViewModelType,
}
