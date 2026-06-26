import createMiddleware from 'next-intl/middleware';
import { routing } from '@/lib/routing';
import type { NextRequest } from 'next/server';

// Next.js 16: file must be named proxy.ts (middleware.ts is deprecated)
// This handles locale detection and redirection for all routes
const intlMiddleware = createMiddleware(routing);

export function proxy(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  // Match all paths except:
  // - /admin (admin panel, no locale prefix needed)
  // - /api (API routes)
  // - /_next, /_vercel (framework internals)
  // - static files with extensions (images, fonts, etc.)
  matcher: [
    '/((?!admin|api|_next|_vercel|.*\\..*).*)',
    '/',
  ],
};
