'use client'

import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import { useFormikContext } from 'formik'
import { useQuery } from '@tanstack/react-query'
import {
  FormikAutoComplete,
  FormikSelect,
  FormWrapper,
  OstiganButton,
} from 'ui'
import type {
  FormikValuesPriceEstimationFormType,
  UsePriceEstimationFormViewMOdelType,
  UsePriceEstimationViewMOdelType,
} from '../../types/priceEstimation'
import { PriceEstimationForm } from './priceEstimationForm/view'
import { usePriceEstimationFormViewMOdel } from './priceEstimationForm/viewModel'
import { PriceEstimationView } from './view'
import { usePriceEstimationViewMOdel } from './viewModel'
import { axiosGet } from '@/configs/httpService/axios/httpService'
import { t } from '@/configs/language/translate'
import {
  GIFTCARD_PACKAGE_ALL_URL,
  GIFTCARD_PACKAGE_URL,
} from '@/constants/endPoints'

export {
  React,
  useEffect,
  useState,
  yup,
  t,
  useQuery,
  useFormikContext,
  axiosGet,
  GIFTCARD_PACKAGE_ALL_URL,
  GIFTCARD_PACKAGE_URL,
  FormWrapper,
  FormikAutoComplete,
  FormikSelect,
  OstiganButton,
  PriceEstimationView,
  usePriceEstimationViewMOdel,
  usePriceEstimationFormViewMOdel,
  PriceEstimationForm,
}
export type {
  UsePriceEstimationFormViewMOdelType,
  FormikValuesPriceEstimationFormType,
  UsePriceEstimationViewMOdelType,
}
