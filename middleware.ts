import NextAuth from 'next-auth';
import { authConfig } from '@/app/auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   * More info: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
   */
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
