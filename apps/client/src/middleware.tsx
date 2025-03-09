/* eslint-disable -- Reason for disabling all ESLint rules in this file */
import { NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { EXPIRE_TIME_MINUITE } from '@/constants/constants'

const intlMiddleware = createMiddleware({
  defaultLocale: 'fa',
  locales: ['en', 'fa'],
})

export async function middleware(request) {
  const token = request.cookies.get('token')?.value
  const expireTime = request.cookies.get('expireTime')?.value
  const hasVerified = request.cookies.get('hasVerified')?.value
  const notification = request.cookies.get('notification')?.value
  const [, locale] = request.nextUrl.pathname.split('/')
  const { origin } = request.nextUrl
  const requestHeaders = new Headers(request.headers)

  let response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  if (request.nextUrl.pathname.split('/').pop() === 'login') {
    if (token) {
      request.nextUrl.pathname = 'dashboard'
    }
  }

  if (!token || hasVerified !== 'true' || !hasVerified) {
    request.nextUrl.pathname = `${locale}/login`
    if (hasVerified) {
      request.cookies.delete('hasVerified')
      response.cookies.delete('hasVerified')
    }
    if (token) {
      request.cookies.delete('token')
      response.cookies.delete('token')
    }
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: ['/', '/(fa|en)/:path*'],
}
