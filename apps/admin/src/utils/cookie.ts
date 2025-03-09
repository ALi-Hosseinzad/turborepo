import Cookies from 'js-cookie'
import type { Cookie } from 'types/cookie'

export function handleCookie({ type, key, value }: Cookie): undefined | string {
  switch (type) {
    case 'setCookie':
      Cookies.set(key, value, { expires: 7 })
      break
    case 'removeCookie':
      Cookies.remove(key)
      break
    case 'getCookie':
      return Cookies.get(key)
  }
}
