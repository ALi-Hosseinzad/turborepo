export interface Cookie {
  type: 'setCookie' | 'removeCookie'
  key: string
  value?: any
}
