import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Cache public images for 1 year
  if (request.nextUrl.pathname.match(/\.(jpg|jpeg|png|webp|avif|svg)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }

  return response
}

// Configure middleware matches
export const config = {
  matcher: [
    // Match all public files
    '/public/:path*',
    // Match all image files
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
