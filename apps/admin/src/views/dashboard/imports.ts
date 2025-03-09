'use client'

import * as yup from 'yup'
import { useTranslations } from 'next-intl'
import { axiosGet, useOrderListViewModel, useQuery } from 'views/order/import'
import UseTomanToRial from 'hooks/useTomanToRial'
import { GIFT_CARD_PACKAGE_URL, USER_URL } from 'constants/endPoints'
import { OstiganLogoWithNameIconWhite } from 'ui/components/icons'
import DashboardView from './dashboard/view'
import { useDashboardViewModel } from './dashboard/viewModel'

export {
  yup,
  useTranslations,
  UseTomanToRial,
  OstiganLogoWithNameIconWhite,
  axiosGet,
  useOrderListViewModel,
  useQuery,
  DashboardView,
  useDashboardViewModel,
  GIFT_CARD_PACKAGE_URL,
  USER_URL,
}
