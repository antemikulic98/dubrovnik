'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/app/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Logo and Contact */}
        <div className='flex flex-col lg:flex-row lg:justify-between gap-12 mb-12'>
          <div className='flex flex-col items-start'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='bg-white rounded-xl p-4'>
                <Image src='/img/logo.svg' alt='Dubrovnik Tours' width={200} height={70} className='h-[70px] w-auto' />
              </div>
            </div>
            <div className='font-body space-y-3 text-gray-300 text-left'>
              <div className='flex items-center gap-3 justify-start'>
                <svg
                  className='w-5 h-5 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
                <span>+385 99 220 6031</span>
              </div>
              <div className='flex items-center gap-3 justify-start'>
                <svg
                  className='w-5 h-5 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
                <a href='mailto:info@hop-on-hop-off-dubrovnik.com' className='hover:text-white transition-colors'>
                  info@hop-on-hop-off-dubrovnik.com
                </a>
              </div>
              <div className='flex items-center gap-3 justify-start'>
                <svg
                  className='w-5 h-5 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                <span>Dubrovnik, Croatia</span>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className='grid md:grid-cols-3 gap-8 lg:gap-12'>
            <div>
              <h4 className='font-bold mb-6 text-lg'>{t.footer.followUs}</h4>
              <div className='font-body space-y-3'>
                <a
                  href='#'
                  className='block text-gray-300 hover:text-white transition-colors'
                >
                  Instagram
                </a>
                <a
                  href='#'
                  className='block text-gray-300 hover:text-white transition-colors'
                >
                  Facebook
                </a>
                <a
                  href='#'
                  className='block text-gray-300 hover:text-white transition-colors'
                >
                  YouTube
                </a>
                <a
                  href='#'
                  className='block text-gray-300 hover:text-white transition-colors'
                >
                  TripAdvisor
                </a>
              </div>
            </div>
            <div>
              <h4 className='font-bold mb-6 text-lg'>
                {t.footer.popularTours}
              </h4>
              <div className='font-body space-y-3'>
                <Link
                  href='/tours/hop-on-hop-off'
                  className='block text-gray-300 hover:text-white transition-colors'
                >
                  {t.footer.hopOnHopOffTour}
                </Link>
                <Link
                  href='/tours/city-tour'
                  className='block text-gray-300 hover:text-white transition-colors'
                >
                  {t.footer.cityTour}
                </Link>
                <Link
                  href='/tours/audio-guide'
                  className='block text-gray-300 hover:text-white transition-colors'
                >
                  {t.footer.audioGuideTour}
                </Link>
                <Link
                  href='/tours/wine-tour'
                  className='block text-gray-300 hover:text-white transition-colors'
                >
                  {t.footer.wineTour}
                </Link>
                <Link
                  href='/#tours'
                  className='block text-gray-300 hover:text-white transition-colors'
                >
                  {t.footer.customTour}
                </Link>
              </div>
            </div>
            <div>
              <h4 className='font-bold mb-6 text-lg'>Explore</h4>
              <div className='font-body space-y-3'>
                <Link
                  href='/gallery'
                  className='block text-gray-300 hover:text-white transition-colors'
                >
                  {t.nav.gallery}
                </Link>
                <Link
                  href='/blog'
                  className='block text-gray-300 hover:text-white transition-colors'
                >
                  {t.nav.blog}
                </Link>
                <Link
                  href='/#about'
                  className='block text-gray-300 hover:text-white transition-colors'
                >
                  {t.nav.about}
                </Link>
                <Link
                  href='/#contact'
                  className='block text-gray-300 hover:text-white transition-colors'
                >
                  {t.nav.contact}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='border-t border-gray-700 pt-8 text-center'>
          <p className='font-body text-gray-400'>© {currentYear} Hop On Hop Off Dubrovnik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
