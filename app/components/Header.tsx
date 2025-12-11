'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../lib/LanguageContext';

type HeaderVariant = 'transparent' | 'solid';

export default function Header({
  variant = 'solid',
}: {
  variant?: HeaderVariant;
}) {
  const isTransparent = variant === 'transparent';
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header
      className={`${
        isTransparent
          ? 'absolute top-0 left-0 right-0 z-50'
          : 'bg-white shadow-sm border-b'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          <div className='flex items-center'>
            <Link
              href='/'
              className='inline-flex items-center gap-2'
              aria-label='Home'
            >
              <span
                className={`${
                  isTransparent ? 'bg-white' : 'bg-gray-900'
                } inline-flex items-center justify-center rounded-full w-10 h-10`}
              >
                <Image src='/globe.svg' alt='Logo' width={20} height={20} />
              </span>
              <span className='sr-only'>Dubrovnik Audio Guide</span>
            </Link>
          </div>

          <nav className='hidden md:flex items-center space-x-8'>
            <Link
              href='/#tours'
              className={`${
                isTransparent
                  ? 'text-white hover:text-gray-200'
                  : 'text-gray-700 hover:text-gray-900'
              } font-medium transition-colors`}
            >
              {t.nav.tours}
            </Link>
            <Link
              href='/#about'
              className={`${
                isTransparent
                  ? 'text-white hover:text-gray-200'
                  : 'text-gray-700 hover:text-gray-900'
              } font-medium transition-colors`}
            >
              {t.nav.about}
            </Link>
            <Link
              href='/#contact'
              className={`${
                isTransparent
                  ? 'text-white hover:text-gray-200'
                  : 'text-gray-700 hover:text-gray-900'
              } font-medium transition-colors`}
            >
              {t.nav.contact}
            </Link>
            <Link
              href='/blog'
              className={`${
                isTransparent
                  ? 'text-white hover:text-gray-200'
                  : 'text-gray-700 hover:text-gray-900'
              } font-medium transition-colors`}
            >
              {t.nav.blog}
            </Link>
            <Link
              href='/gallery'
              className={`${
                isTransparent
                  ? 'text-white hover:text-gray-200'
                  : 'text-gray-700 hover:text-gray-900'
              } font-medium transition-colors`}
            >
              {t.nav.gallery}
            </Link>
          </nav>

          <div className='hidden md:flex items-center gap-4'>
            <LanguageSwitcher
              theme={isTransparent ? 'dark' : 'light'}
              size='lg'
            />
            <Link
              href='/#tours'
              className={`${
                isTransparent
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-red-600 hover:bg-red-700 text-white'
              } font-bold px-6 py-3 rounded-lg transition-colors shadow-lg`}
            >
              {t.nav.bookNow}
            </Link>
          </div>

          <button
            className={`${
              isTransparent ? 'text-white' : 'text-gray-900'
            } md:hidden p-2`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls='mobile-drawer'
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg
                className='w-6 h-6'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 6l12 12M18 6L6 18'
                />
              </svg>
            ) : (
              <svg
                className='w-6 h-6'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 5v14M5 12h14'
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Overlay */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        } fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-300 z-40`}
      />
      {/* Mobile Drawer */}
      <aside
        id='mobile-drawer'
        className={`${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        } fixed top-0 right-0 h-full w-72 bg-white md:hidden shadow-2xl z-50 transition-transform duration-300`}
        aria-hidden={!mobileOpen}
      >
        <div className='h-20 px-6 flex items-center justify-between border-b'>
          <Link
            href='/'
            className='inline-flex items-center gap-2'
            aria-label='Home'
          >
            <span className='inline-flex items-center justify-center rounded-full w-9 h-9 bg-gray-900'>
              <Image src='/globe.svg' alt='Logo' width={18} height={18} />
            </span>
            <span className='sr-only'>Dubrovnik Audio Guide</span>
          </Link>
          <button
            className='p-2 text-gray-900'
            aria-label='Close menu'
            onClick={() => setMobileOpen(false)}
          >
            <svg
              className='w-6 h-6'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 6l12 12M18 6L6 18'
              />
            </svg>
          </button>
        </div>
        <nav className='px-6 py-6 space-y-4'>
          <Link
            href='/#tours'
            onClick={() => setMobileOpen(false)}
            className='block text-gray-800 text-base font-medium'
          >
            {t.nav.tours}
          </Link>
          <Link
            href='/#about'
            onClick={() => setMobileOpen(false)}
            className='block text-gray-800 text-base font-medium'
          >
            {t.nav.about}
          </Link>
          <Link
            href='/#contact'
            onClick={() => setMobileOpen(false)}
            className='block text-gray-800 text-base font-medium'
          >
            {t.nav.contact}
          </Link>
          <Link
            href='/blog'
            onClick={() => setMobileOpen(false)}
            className='block text-gray-800 text-base font-medium'
          >
            {t.nav.blog}
          </Link>
          <Link
            href='/gallery'
            onClick={() => setMobileOpen(false)}
            className='block text-gray-800 text-base font-medium'
          >
            {t.nav.gallery}
          </Link>
          <div className='pt-4 border-t'>
            <LanguageSwitcher theme='light' size='lg' />
          </div>
          <Link
            href='/#tours'
            onClick={() => setMobileOpen(false)}
            className='mt-4 inline-flex items-center justify-center w-full bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors shadow-lg'
          >
            {t.nav.bookNow}
          </Link>
        </nav>
      </aside>
    </header>
  );
}
