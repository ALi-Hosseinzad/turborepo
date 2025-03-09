import { t } from '@configs/language/translate'
import { useQuery } from '@tanstack/react-query'
import TermsView from './view'
import { useTermsViewModel } from './viewModel'
import { axiosGet } from '@/configs/httpService/axios/httpService'
import { TERM_AND_CONDITION_URL } from '@/constants/endPoints'

export {
  TermsView,
  useTermsViewModel,
  useQuery,
  axiosGet,
  TERM_AND_CONDITION_URL,
  t,
}
