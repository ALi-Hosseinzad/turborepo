import axios from 'axios'
import { QueryClient } from '@tanstack/query-core'
import {
  clearLocalStorage,
  getCookie,
  removeCookie,
  setCookie,
  showError,
} from 'ui'
import type { AxiosInterface } from '@/types/axiosProps'
import { handleLoginStep } from '@/redux/reducers/auth.slice'
import { store } from '@/redux/store'

export const getQueryClient = new QueryClient()

export const axiosInstance = axios.create({
  baseURL: `${process.env.BASE_URL}`,
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getCookie('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
      config.headers.Accept = 'application/json'
    }
    return config
  },
  (error) => {
    return Promise.reject(new Error('req interceptor error', error))
  },
)

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: any) => {
    if (error.message === 'Network Error') {
      // error 500;
      return Promise.reject(error)
    }
    const resError = error.response.data
    error.config.headers.Accept = 'application/json'

    switch (error.response.status) {
      case 401:
        if (resError.object) {
          const token = resError.object.access_token
          setCookie('token', token)
          error.config.headers.Authorization = `Bearer ${token}`
        } else {
          const currentToken = `Bearer ${getCookie('token')}`
          const requestToken = error.config.headers.Authorization
          if (currentToken == requestToken) {
            removeCookie('token')
            removeCookie('hasVerified')
            clearLocalStorage()
            store.dispatch(handleLoginStep('initStep'))
            const lang = window.location.href.split('/')[3]
            window.location.href = `/${lang}/login`
          }
        }
        break
      case 403:
        showError(resError.message)
        break
      case 422:
        showError(resError.message)
        break
      case 404:
        showError(resError.message)
        break
      default:
        return Promise.reject(error)
    }
    return Promise.reject(error)
  },
)

export const axiosGet = async ({ url }: AxiosInterface): Promise<any> => {
  const { data } = await axiosInstance.get(url)
  const results = data?.data
  return results
}

export const axiosPost = async ({
  url,
  body,
}: AxiosInterface): Promise<any> => {
  const res = await axiosInstance.post(url, body)
  return res?.data || res
}

export const axiosPut = async ({ url, body }: AxiosInterface): Promise<any> => {
  const res = await axiosInstance.put(url, body)
  return res?.data || res
}

export const axiosPutQuery = async ({ url, params }) => {
  const queryString = Object?.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join('&')

  const res = await axiosInstance.put(`${url}?${queryString}`)
  return res?.data
}

export const axiosDelete = async ({
  url,
  id,
}: AxiosInterface): Promise<any> => {
  const res = await axiosInstance.delete(`${url}/${id}`)
  return res?.data || res
}
