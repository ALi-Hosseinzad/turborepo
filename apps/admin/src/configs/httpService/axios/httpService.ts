// TODO:handle cache later
// import { cache } from 'react'
import { QueryClient } from '@tanstack/query-core'
import type { AxiosType } from 'types/axiosProps'
import { axiosInstance } from './axiosInterceptors'

// export const getQueryClient = cache(() => new QueryClient())
export const getQueryClient = new QueryClient()

export const axiosGet = async ({
  url,
  isAdmin = true,
  version = 'v1',
}: AxiosType): Promise<any> => {
  const { data } = await axiosInstance.get(
    isAdmin ? `${version}/admin${url}` : `${version}${url}`,
  )
  const results = data?.data
  return results
}

export const axiosPost = async ({
  url,
  body,
  isAdmin = true,
  version = 'v1',
}: AxiosType): Promise<any> => {
  const res = await axiosInstance.post(
    isAdmin ? `${version}/admin${url}` : `${version}${url}`,
    body,
  )
  return res.data
}

export const axiosPut = async ({
  url,
  params,
  isAdmin = true,
  version = 'v1',
}: AxiosType): Promise<any> => {
  const queryString = Object.keys(params)
    .map((key) => {
      if (typeof params[key] === 'object') {
        return Object.entries(params[key])
          .map(([curKey, curValue]) => {
            return `${key}[${curKey}]=${encodeURIComponent(curValue as any)}`
          })
          .join('&')
      }
      return `${key}=${encodeURIComponent(params[key])}`
    })
    .join('&')
  const res = await axiosInstance.put(
    isAdmin
      ? `${version}/admin${url}?${queryString}`
      : `${version}${url}?${queryString}`,
  )
  return res?.data
}

export const axiosPutBody = async ({
  url,
  body,
  isAdmin = true,
  version = 'v1',
}: AxiosType): Promise<any> => {
  const res = await axiosInstance.put(
    isAdmin ? `${version}/admin${url}` : `${version}${url}`,
    body,
  )
  return res.data
}
