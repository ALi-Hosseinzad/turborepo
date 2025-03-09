// TODO:handle cache later
// import { cache } from 'react'
import { QueryClient } from '@tanstack/query-core'
import type { AxiosType } from '@/types/axiosProps'
import { axiosInstance } from './axiosInterceptors'

// export const getQueryClient = cache(() => new QueryClient())
export const getQueryClient = new QueryClient()

export const axiosGet = async ({
  url,
  isAdmin = false,
}: AxiosType): Promise<any> => {
  const { data } = await axiosInstance.get(isAdmin ? `admin${url}` : url)
  const results = data?.data
  return results
}

export const axiosPost = async ({
  url,
  body,
  isAdmin = false,
}: AxiosType): Promise<any> => {
  const res = await axiosInstance.post(isAdmin ? `admin${url}` : url, body)
  return res.data
}

export const axiosPut = async ({
  url,
  params,
  isAdmin = false,
}: AxiosType): Promise<any> => {
  const queryString = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join('&')

  const res = await axiosInstance.put(
    isAdmin ? `admin${url}?${queryString}` : `${url}?${queryString}`,
  )
  return res.data
}
