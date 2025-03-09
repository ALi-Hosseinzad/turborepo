import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}

export function middleware(req: NextRequest): NextResponse {
  const userAgent = req.headers.get('user-agent')
  if (userAgent?.includes('Googlebot')) {
    req.nextUrl.pathname = `/GoogleUser${req.nextUrl.pathname}`
    return NextResponse.rewrite(req.nextUrl)
  }
  req.nextUrl.pathname = `/SimpleUser${req.nextUrl.pathname}`
  return NextResponse.rewrite(req.nextUrl)
}
