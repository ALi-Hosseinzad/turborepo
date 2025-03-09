import Cookies from 'js-cookie'

export const setCookie = (key: string, value: any): void => {
  Cookies.set(key, value, { expires: 7 })
}

export const removeCookie = (key: string): void => {
  Cookies.remove(key)
}

export const getCookie = (key: string): any => {
  return Cookies.get(key)
}
