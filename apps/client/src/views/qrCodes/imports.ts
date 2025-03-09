import { useState } from 'react'
import * as yup from 'yup'
import Image from 'next/image'
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { OstiganButton, OstiganModal } from 'ui'
import type {
  QrCodeFormModalType,
  QrCodeItemViewModelType,
  ShareHandlerType,
  ShareModalViewModelType,
  ShareModalViewType,
} from '@/types/qrCodes'
import { useAxiosMutation } from '@/hooks/useAxiosMutation'
import { useAxiosQuery } from '@/hooks/useAxiosQuery'
import { UsePrint } from '@/hooks/usePrint'
import UseTomanToRial from '@/hooks/useTomanToRial'
import { WALLET_QR_CODE_URL } from '@/constants/endPoints'
import { QR_CODE_LIST_QUERY } from '@/constants/queryKeys'
import { axiosGet } from '@/configs/httpService/axiosInterceptors'
import { TextWithIcon } from '@/components/blocks/textWithIcon'
import { LazyLoading } from '@/components/lazyLoading'
import {
  EditIcon,
  PlusIcon,
  RemoveIcon,
  SaveIcon,
  ShareIcon,
  UploadIcon,
} from 'ui/components/icons'
import { DeleteModal } from 'ui/components/modal/deleteModal'
import { ModalHeader } from 'ui/components/modal/modalHeader'
import { AddNewQrCode } from './add/index'
import { DisableQrCodeModal } from './components/modals/disableQrCodeModal'
import { ShowQrCodeModal } from './components/modals/showQrCodeModal'
import { QrCodeFormModalView } from './components/QrCodeFormModal/view'
import { useQrCodeFormModalViewModel } from './components/QrCodeFormModal/viewModel'
import { QrCodeItem } from './components/qrCodeItem'
import { QrCodeItemView } from './components/qrCodeItem/view'
import { useQrCodeItemViewModel } from './components/qrCodeItem/viewModel'
import { QrCodeList } from './components/qrCodeList'
import { QrCodeListView } from './components/qrCodeList/view.tsx'
import { ShareModalView } from './components/shareModal/view'
import { useShareModalViewModel } from './components/shareModal/viewModel'
import { EditNewQrCode } from './edit/index'

export {
  yup,
  Image,
  useState,
  useAxiosQuery,
  useTranslations,
  useInfiniteQuery,
  UseTomanToRial,
  useQrCodeItemViewModel,
  useQueryClient,
  useAxiosMutation,
  UsePrint,
  axiosGet,
  QrCodeList,
  QrCodeListView,
  ShareModalView,
  DisableQrCodeModal,
  ShowQrCodeModal,
  QrCodeItemView,
  AddNewQrCode,
  EditNewQrCode,
  ModalHeader,
  OstiganModal,
  QrCodeFormModalView,
  useQrCodeFormModalViewModel,
  useShareModalViewModel,
  OstiganButton,
  QrCodeItem,
  LazyLoading,
  PlusIcon,
  EditIcon,
  RemoveIcon,
  TextWithIcon,
  ShareIcon,
  SaveIcon,
  UploadIcon,
  DeleteModal,
  WALLET_QR_CODE_URL,
  QR_CODE_LIST_QUERY,
}

export type {
  QrCodeFormModalType,
  ShareHandlerType,
  ShareModalViewModelType,
  ShareModalViewType,
  QrCodeItemViewModelType,
}
