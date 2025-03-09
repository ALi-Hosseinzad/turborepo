'use client'

import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import { useParams, useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { FormWrapper, Loading, OstiganButton } from 'ui'
import type {
  OrderDataType,
  TankYouData,
  ThankYouViewProps,
} from '@/types/thankyou'
import { useAxiosQuery } from '@/hooks/useAxiosQuery'
import UseTimeConvertor from '@/hooks/useTimeConvertor'
import UseTomanToRial from '@/hooks/useTomanToRial'
import { ORDER_URL, WALLET_TRANSACTION_URL } from '@/constants/endPoints'
import { INVOICE } from '@/constants/routes'
import { ConfettiIcon, SuccessOrderIcon } from 'ui/components/icons'
import ConfettiComponent from './components/confetti'
import ThankYouSkeleton from './components/thankYouSkeleton'
import ThankYouView from './view'
import { useTankYouViewModel } from './viewModel'

export {
  React,
  useEffect,
  useState,
  useRouter,
  useParams,
  useTranslations,
  UseTomanToRial,
  useLocale,
  UseTimeConvertor,
  ThankYouView,
  useTankYouViewModel,
  useAxiosQuery,
  INVOICE,
  FormWrapper,
  OstiganButton,
  Loading,
  SuccessOrderIcon,
  ConfettiIcon,
  ConfettiComponent,
  Confetti,
  ORDER_URL,
  ThankYouSkeleton,
  WALLET_TRANSACTION_URL,
}
export type { OrderDataType, ThankYouViewProps, TankYouData }
