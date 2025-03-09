import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { OstiganAccordion, OstiganTab } from 'ui'
import ContactUsView from './view'
import { useContactUsViewModel } from './viewModel'
import { axiosGet } from '@/configs/httpService/axios/httpService'
import { SUBJECT_USER_URL } from '@/constants/endPoints'

export {
  React,
  ContactUsView,
  useContactUsViewModel,
  OstiganTab,
  useQuery,
  OstiganAccordion,
  axiosGet,
  SUBJECT_USER_URL,
}
