import { type UseQueryOptions } from '@tanstack/react-query'

export interface CountDownTimerType {
  timer: number
  setTimer: Dispatch<SetStateAction<number>>
  onFinish: any
}

export interface UseAxiosMutationType {
  isPending: boolean
  mutateAsync: UseMutateAsyncFunction<any, Error, any, unknown>
  data: any
  error: any
  isError: any
  isIdle: any
  isPaused: any
  isSuccess: any
  failureCount: any
  failureReason: any
  mutate: any
  reset: any
  status: any
}

export interface UseAxiosQueryType {
  data: any
  isLoading: any
  isPending: any
  isFetched: boolean
  isError: boolean
  isFetching: any
  isSuccess: any
  refetch: any
  fetchStatus: any
}

export interface CountDownTimerType {
  timer: number
  onFinish?: any
  setTimer: Dispatch<SetStateAction<number>>
}

export interface AuthSliceType {
  curStep: string
  phone: string
}

export interface PersistSliceType {
  enums: object
  user: object
  wallet: object
  notifications: any[]
}

export interface OtpViewParamsType {
  endPoint: string
  method: string
  onSuccess?: any
  className?: string
  resendCode?: any
  isLoadingResend: any
  defaultTimer?: number
  extraBody: any
}

export type UseAxiosQueryPropsType = {
  url: string
  selectFn?: any
} & UseQueryOptions
