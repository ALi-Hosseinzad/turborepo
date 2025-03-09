// import { removeCookie, setCookie } from 'components/cookieMethods';
import axios from 'axios'
import { handleCookie } from 'utils/cookie'
import { showError } from 'hooks/useToust'

export const axiosInstance = axios.create({
  baseURL: `${process.env.BASE_URL}`,
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = handleCookie({
      type: 'getCookie',
      key: 'token',
    })
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
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
    const locale = window.location.href.split('/')[3]

    // error 500;
    if (error.message === 'Network Error') {
      return Promise.reject(error)
    }
    if (error.name === 'TypeError') {
      window.location.href = `/${locale}/login`
      // return Promise.reject(error)
    }
    const resError = error.response.data
    error.config.headers.Accept = 'application/json'

    switch (error.response.status) {
      case 401:
        if (resError.object) {
          const token = resError.object.access_token
          handleCookie({
            type: 'setCookie',
            key: 'token',
            value: token,
          })
          error.config.headers.Authorization = `Bearer ${token}`
          // await axiosInstance(error.config as object)
        } else {
          const currentToken = `Bearer ${handleCookie({
            type: 'getCookie',
            key: 'token',
          })}`
          const requestToken = error.config.headers.Authorization
          if (currentToken == requestToken) {
            handleCookie({
              type: 'removeCookie',
              key: 'token',
            })
            localStorage.clear()
            if (typeof window !== 'undefined') {
              window.location.href = `/${locale}/login`
            }
            showError(resError.message)
          }
        }
        break
      case 422:
        showError(resError.message)
        break
      case 404:
        showError(resError.message)
        break
      case 500:
        showError(resError.message)
        break
      default:
        return Promise.reject(error)
    }
  },
)
