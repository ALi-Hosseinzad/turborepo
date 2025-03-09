import type { NextRequest, NextResponse } from 'next/server'
import createIntlMiddleware from 'next-intl/middleware'

const intlMiddleware = createIntlMiddleware({
  defaultLocale: 'fa',
  locales: ['en', 'fa'],
})

export default function middleware(request: NextRequest): NextResponse {
  const token = request.cookies.get('token')?.value

  const [, locale] = request.nextUrl.pathname.split('/')
  const requestHeaders = new Headers(request.headers)
  if (token) {
    // if(request.nextUrl.pathname === '/fa/login' && request.nextUrl.pathname === '/en/login' ){
    //   request.url
    // }
    requestHeaders.set('token', `Bearer ${token}`)
    return intlMiddleware(request)
  }
  request.nextUrl.pathname = `/${locale}/login`
  return intlMiddleware(request)
}

export const config = {
  matcher: ['/', '/(fa|en)/:path*'],
}
