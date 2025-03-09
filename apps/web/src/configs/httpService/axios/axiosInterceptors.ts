// import { removeCookie, setCookie } from '@/components/cookieMethods';
import { handleLocalStorage } from '@utils/localStorage'
import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: `${process.env.BASE_URL}`,
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = handleLocalStorage({
      type: 'getLocalStorage',
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
    // error 500;
    if (error.message === 'Network Error') {
      return Promise.reject(error)
    }
    const resError = error.response.data
    switch (error.response.status) {
      case 401:
        if (resError.object) {
          const token = resError.object.access_token

          useLocalStorege({
            type: 'setLocalStorage',
            key: 'token',
            item: token,
          })
          // setCookie('token', token);
          error.config.headers.Authorization = `Bearer ${token}`
          // TODO:think about as object
          await axiosInstance(error.config as object)
        } else {
          // removeCookie('token');
          // localStorage.clear();
          window.location.href = '/'
        }
        break
      // case 403:
      //   showError(resError.message);

      //   break;
      // case 422:
      //   showError(resError.message);
      //   break;
      // case 404:
      //   showError(resError.message);
      //   break;
      // case 500:
      //   showError(resError.message);
      //   break;
      default:
        return Promise.reject(error)
    }
  },
)
