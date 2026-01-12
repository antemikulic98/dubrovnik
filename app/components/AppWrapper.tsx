'use client';

import CookieConsent from './CookieConsent';

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CookieConsent />
    </>
  );
}
