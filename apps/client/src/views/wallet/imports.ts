import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import * as yup from 'yup'
import Image from 'next/image'
import { useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import {
  FormikCheckbox,
  FormikSelect,
  FormikTextField,
  FormWrapper,
  OstiganButton,
  OstiganRadio,
  OstiganStatus,
  OstiganTab,
  OstiganTable,
} from 'ui'
import { type WalletStatusType } from '@/types/wallet'
import { useAxiosMutation } from '@/hooks/useAxiosMutation'
import { useAxiosQuery } from '@/hooks/useAxiosQuery'
import UseTomanToRial from '@/hooks/useTomanToRial'
import { showSuccess } from '@/hooks/useToust'
import useWindowDimensions from '@/hooks/useWindowDimension'
import {
  BANK_ACCOUNT_INFO_URL,
  PAYMENT_PAY_URL,
  WALLET_TRANSACTION_URL,
  WALLET_TRANSFER_URL,
  WALLET_URL,
  WALLET_WITHDRAW_URL,
} from '@/constants/endPoints'
import { WALLET_QUERY } from '@/constants/queryKeys'
import { QRCODES, WALLET } from '@/constants/routes'
import { useRouter } from '@/components/nextIntl/navigation'
import OtpComponent from '@/components/otp'
import TableSkeleton from '@/components/skeletons/tableSkeleton'
import {
  AddBalanceArrowIcon,
  AddBalanceIcon,
  AlarmIcon,
  ArrowToSideLeftIcon,
  CachoutArrowIcon,
  CashoutIcon,
  CaveatIcon,
  OstiganDotIcon,
  QrCodeIcon,
  TransferIcon,
} from 'ui/components/icons'
import { Spinner } from 'ui/components/loading/spinner'
import { Balance } from './balance/index'
import { BalanceView } from './balance/view'
import { useBalanceViewModel } from './balance/viewModel'
import WalletPricesBlock from './components/pricesBlock'
import { WalletCard } from './components/walletCard'
import WalletFormAddBalance from './components/walletDepositForm'
import WalletList from './components/walletList'
import WalletListView from './components/walletList/view'
import { useWalletListViewModel } from './components/walletList/viewModel'
import WalletTransferDescription from './components/walletTransferDescription'
import WalletTransferShowData from './components/walletTransferShowData'
import WalletWithdrawDescip from './components/walletWithdrawDescip'
import { useWalletWithdrawFormViewModel } from './components/walletWithdrawForm/viewModel'
import WalletDepositTab from './walletDepositTab'
import WalletTabs from './walletTabs'
import WalletTabsView from './walletTabs/view'
import { useWalletTabsViewModel } from './walletTabs/viewModel'
import WalletTransferTab from './walletTransferTab'
import type { RootState } from '@/redux/store'

export {
  useState,
  useEffect,
  WalletTransferDescription,
  WalletTransferTab,
  BANK_ACCOUNT_INFO_URL,
  WALLET_WITHDRAW_URL,
  useSelector,
  UseTomanToRial,
  useRouter,
  WalletTransferShowData,
  useWindowDimensions,
  WalletTabs,
  FormikCheckbox,
  FormikTextField,
  FormWrapper,
  OstiganButton,
  WalletPricesBlock,
  useAxiosMutation,
  PAYMENT_PAY_URL,
  WalletDepositTab,
  WalletFormAddBalance,
  yup,
  OstiganTab,
  WalletTabsView,
  useWalletTabsViewModel,
  BalanceView,
  WalletCard,
  Balance,
  useBalanceViewModel,
  WALLET_TRANSACTION_URL,
  WALLET_TRANSFER_URL,
  WALLET_URL,
  WALLET_QUERY,
  WalletList,
  Image,
  WalletWithdrawDescip,
  OstiganTable,
  FormikSelect,
  QrCodeIcon,
  AddBalanceIcon,
  OstiganStatus,
  CashoutIcon,
  TransferIcon,
  AlarmIcon,
  CaveatIcon,
  Spinner,
  AddBalanceArrowIcon,
  CachoutArrowIcon,
  ArrowToSideLeftIcon,
  OstiganRadio,
  useAxiosQuery,
  OstiganDotIcon,
  TableSkeleton,
  WalletListView,
  useTranslations,
  OtpComponent,
  showSuccess,
  useWalletWithdrawFormViewModel,
  useWalletListViewModel,
  useQueryClient,
  QRCODES,
  WALLET,
}

export type { WalletStatusType, RootState }
