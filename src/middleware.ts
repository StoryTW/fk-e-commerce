import { NextResponse, type NextRequest } from 'next/server';
import { AUTH_COOKIE_NAME } from './utils/constants';

const protectedRoutes = [
  '/account/cart',
  '/account/cashback',
  '/account/change-password',
  '/account/lucky-wheel',
  '/account/promocodes',
  '/account/refunds-history',
  '/account/success-orders',
];

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get(AUTH_COOKIE_NAME)?.value;
  const isAuthenticated = !!authToken;
  const path = request.nextUrl.pathname;

  if (!isAuthenticated && protectedRoutes.includes(path) && !path.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  return NextResponse.next();
}

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// };

export const config = {
  matcher: ['/account/:path*'],
};
