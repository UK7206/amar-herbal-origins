'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

let sessionId: string | null = null;

function getSessionId() {
  if (sessionId) return sessionId;
  if (typeof window !== 'undefined') {
    sessionId = sessionStorage.getItem('_sid') || Math.random().toString(36).slice(2);
    sessionStorage.setItem('_sid', sessionId);
  }
  return sessionId || 'unknown';
}

export function VisitorTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const track = async () => {
      try {
        await fetch('/api/track', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            page: pathname,
            referrer: document.referrer,
            sessionId: getSessionId(),
          }),
        });
      } catch {
        // silent fail – never break the user experience
      }
    };
    track();
  }, [pathname]);

  return null;
}
