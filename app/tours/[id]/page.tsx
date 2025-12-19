'use client';

import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Header from '@/app/components/Header';
import { useLanguage } from '@/app/lib/LanguageContext';
import { use } from 'react';

interface TourPageProps {
  params: Promise<{ id: string }>;
}

function AudioGuideTourPage() {
  const { t } = useLanguage();

  return (
    <div className='min-h-screen bg-white'>
      <Header variant='solid' />

      {/* Hero Section */}
      <section className='relative h-[70vh] overflow-hidden'>
        <Image
          src='https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
          alt={t.audioGuideTour.title}
          fill
          className='object-cover'
          priority
          unoptimized
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10'></div>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-center text-white max-w-4xl mx-auto px-4'>
            <div className='inline-block bg-amber-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg'>
              {t.audioGuideTour.badge}
            </div>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-4'>
              {t.audioGuideTour.title}
            </h1>
            <p className='text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed px-4'>
              {t.audioGuideTour.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Tour Info & Booking */}
      <section className='py-12 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-3 gap-6 lg:gap-12'>
            {/* Tour Details */}
            <div className='lg:col-span-2 space-y-6 lg:space-y-8'>
              <div className='bg-white rounded-2xl shadow-lg p-6 lg:p-8'>
                <h2 className='text-2xl lg:text-3xl font-bold text-gray-900 mb-6'>
                  {t.tourDetail.aboutTour}
                </h2>
                <p className='text-gray-700 text-lg leading-relaxed mb-8'>
                  {t.audioGuideTour.fullDescription}
                </p>

                {/* Two Tours Section */}
                <div className='grid md:grid-cols-2 gap-6 mb-8'>
                  <div className='bg-blue-50 rounded-xl p-6 border border-blue-100'>
                    <h3 className='text-xl font-bold text-gray-900 mb-3'>
                      {t.audioGuideTour.oldTownTourTitle}
                    </h3>
                    <p className='text-gray-700 mb-4'>
                      {t.audioGuideTour.oldTownTourDescription}
                    </p>
                    <div className='flex items-center gap-2 text-blue-700 font-medium'>
                      <svg
                        className='w-5 h-5'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span>{t.audioGuideTour.pointsOfInterest.oldTown}</span>
                    </div>
                  </div>
                  <div className='bg-green-50 rounded-xl p-6 border border-green-100'>
                    <h3 className='text-xl font-bold text-gray-900 mb-3'>
                      {t.audioGuideTour.cityWallsTourTitle}
                    </h3>
                    <p className='text-gray-700 mb-4'>
                      {t.audioGuideTour.cityWallsTourDescription}
                    </p>
                    <div className='flex items-center gap-2 text-green-700 font-medium'>
                      <svg
                        className='w-5 h-5'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span>{t.audioGuideTour.pointsOfInterest.cityWalls}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  {t.tourDetail.highlights}
                </h3>
                <div className='grid sm:grid-cols-2 gap-3 mb-8'>
                  {t.audioGuideTour.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className='flex items-start space-x-3 p-3 bg-green-50 rounded-lg'
                    >
                      <svg
                        className='w-5 h-5 text-green-600 mt-0.5 flex-shrink-0'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span className='text-gray-800'>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* How It Works */}
                <h3 className='text-xl font-bold text-gray-900 mb-6'>
                  {t.tourDetail.howItWorks}
                </h3>
                <div className='space-y-4'>
                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0'>
                      1
                    </div>
                    <div>
                      <h4 className='font-bold text-gray-900'>
                        {t.tourDetail.step1Title}
                      </h4>
                      <p className='text-gray-600'>{t.tourDetail.step1Desc}</p>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0'>
                      2
                    </div>
                    <div>
                      <h4 className='font-bold text-gray-900'>
                        {t.tourDetail.step2Title}
                      </h4>
                      <p className='text-gray-600'>{t.tourDetail.step2Desc}</p>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0'>
                      3
                    </div>
                    <div>
                      <h4 className='font-bold text-gray-900'>
                        {t.tourDetail.step3Title}
                      </h4>
                      <p className='text-gray-600'>{t.tourDetail.step3Desc}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Included / Not Included */}
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='bg-white rounded-2xl shadow-lg p-6'>
                  <h3 className='text-lg font-bold text-gray-900 mb-4 flex items-center'>
                    <svg
                      className='w-5 h-5 text-green-600 mr-2'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                    {t.tourDetail.included}
                  </h3>
                  <ul className='space-y-2'>
                    {t.audioGuideTour.included.map((item, index) => (
                      <li
                        key={index}
                        className='text-gray-700 flex items-start space-x-2'
                      >
                        <svg
                          className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='bg-white rounded-2xl shadow-lg p-6'>
                  <h3 className='text-lg font-bold text-gray-900 mb-4 flex items-center'>
                    <svg
                      className='w-5 h-5 text-red-600 mr-2'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                    {t.tourDetail.notIncluded}
                  </h3>
                  <ul className='space-y-2'>
                    {t.audioGuideTour.notIncluded.map((item, index) => (
                      <li
                        key={index}
                        className='text-gray-700 flex items-start space-x-2'
                      >
                        <svg
                          className='w-4 h-4 text-red-600 mt-0.5 flex-shrink-0'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className='lg:col-span-1 order-first lg:order-last'>
              <div className='bg-white rounded-2xl shadow-lg p-6 sticky top-6'>
                <div className='text-center mb-6'>
                  <span className='text-4xl font-bold text-red-600'>
                    {t.audioGuideTour.price}
                  </span>
                  <p className='text-gray-600'>{t.tours.perPerson}</p>
                  <div className='mt-4 inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full'>
                    <svg
                      className='w-4 h-4 mr-1'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    {t.tourDetail.bestPrice}
                  </div>
                </div>

                {/* Bokun Booking Widget */}
                <Script
                  src="https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=5133d488-02e7-4b3f-8aab-f7f57d5dc30b"
                  strategy="lazyOnload"
                />
                <div
                  className="bokunWidget"
                  data-src="https://widgets.bokun.io/online-sales/5133d488-02e7-4b3f-8aab-f7f57d5dc30b/experience-calendar/1131496"
                ></div>
                <noscript>Please enable javascript in your browser to book</noscript>

                <div className='space-y-4 text-sm text-gray-600 mt-6'>
                  <div className='flex items-start space-x-3'>
                    <svg
                      className='w-5 h-5 text-green-600 mt-0.5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <div>
                      <span className='font-medium text-gray-900'>
                        {t.audioGuideTour.availableLanguages}
                      </span>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <svg
                      className='w-5 h-5 text-purple-600 mt-0.5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <div>
                      <span className='font-medium text-gray-900'>
                        {t.tours.duration}
                      </span>
                      <p className='text-gray-600'>
                        {t.audioGuideTour.totalDuration}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='mt-6 pt-6 border-t text-center'>
                  <p className='text-sm text-gray-600 mb-3'>
                    {t.tourDetail.needHelp}
                  </p>
                  <a
                    href='tel:+385911359914'
                    className='text-red-600 hover:text-red-700 font-medium'
                  >
                    +385 91 135 9914
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TourFooter />
    </div>
  );
}

function WineTourPage() {
  const { t } = useLanguage();

  return (
    <div className='min-h-screen bg-white'>
      <Header variant='solid' />

      {/* Hero Section */}
      <section className='relative h-[70vh] overflow-hidden'>
        <Image
          src='https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
          alt={t.wineTour.title}
          fill
          className='object-cover'
          priority
          unoptimized
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10'></div>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-center text-white max-w-4xl mx-auto px-4'>
            <div className='inline-block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg'>
              {t.wineTour.badge}
            </div>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-4'>
              {t.wineTour.title}
            </h1>
            <p className='text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed px-4'>
              {t.wineTour.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Tour Info & Booking */}
      <section className='py-12 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-3 gap-6 lg:gap-12'>
            {/* Tour Details */}
            <div className='lg:col-span-2 space-y-6 lg:space-y-8'>
              <div className='bg-white rounded-2xl shadow-lg p-6 lg:p-8'>
                <h2 className='text-2xl lg:text-3xl font-bold text-gray-900 mb-6'>
                  {t.tourDetail.aboutTour}
                </h2>
                <p className='text-gray-700 text-lg leading-relaxed mb-6'>
                  {t.wineTour.fullDescription}
                </p>
                <p className='text-gray-700 leading-relaxed mb-8'>
                  {t.wineTour.stonDescription}
                </p>

                {/* Wineries Section */}
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  {t.tourDetail.itinerary}
                </h3>
                <div className='space-y-4 mb-8'>
                  <div className='bg-purple-50 rounded-xl p-5 border border-purple-100'>
                    <h4 className='font-bold text-gray-900 mb-2'>
                      {t.wineTour.wineries.matuskoTitle}
                    </h4>
                    <p className='text-gray-700'>
                      {t.wineTour.wineries.matuskoDesc}
                    </p>
                  </div>
                  <div className='bg-gray-50 rounded-xl p-5 border border-gray-200'>
                    <div className='flex items-center gap-2 mb-2'>
                      <h4 className='font-bold text-gray-900'>
                        {t.wineTour.wineries.curlinTitle}
                      </h4>
                      <span className='text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full'>
                        {t.common.optional}
                      </span>
                    </div>
                    <p className='text-gray-700'>
                      {t.wineTour.wineries.curlinDesc}
                    </p>
                  </div>
                  <div className='bg-gray-50 rounded-xl p-5 border border-gray-200'>
                    <div className='flex items-center gap-2 mb-2'>
                      <h4 className='font-bold text-gray-900'>
                        {t.wineTour.wineries.edivoTitle}
                      </h4>
                      <span className='text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full'>
                        {t.common.optional}
                      </span>
                    </div>
                    <p className='text-gray-700'>
                      {t.wineTour.wineries.edivoDesc}
                    </p>
                  </div>
                </div>

                {/* Beach Stop */}
                <div className='bg-blue-50 rounded-xl p-5 border border-blue-100 mb-8'>
                  <div className='flex items-center gap-3'>
                    <span className='text-2xl'>🏖️</span>
                    <p className='text-gray-700'>{t.wineTour.beachStop}</p>
                  </div>
                </div>

                {/* Highlights */}
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  {t.tourDetail.highlights}
                </h3>
                <div className='grid sm:grid-cols-2 gap-3 mb-8'>
                  {t.wineTour.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className='flex items-start space-x-3 p-3 bg-green-50 rounded-lg'
                    >
                      <svg
                        className='w-5 h-5 text-green-600 mt-0.5 flex-shrink-0'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span className='text-gray-800'>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Additional Options */}
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  {t.tourDetail.additionalOptions}
                </h3>
                <div className='space-y-3 mb-8'>
                  <div className='flex items-center gap-3 p-4 bg-amber-50 rounded-lg border border-amber-200'>
                    <span className='text-xl'>🍷</span>
                    <span className='text-gray-800'>
                      {t.wineTour.additionalOptions.winery}
                    </span>
                  </div>
                  <div className='flex items-center gap-3 p-4 bg-amber-50 rounded-lg border border-amber-200'>
                    <span className='text-xl'>🦪</span>
                    <span className='text-gray-800'>
                      {t.wineTour.additionalOptions.lunch}
                    </span>
                  </div>
                </div>
              </div>

              {/* Included / Not Included */}
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='bg-white rounded-2xl shadow-lg p-6'>
                  <h3 className='text-lg font-bold text-gray-900 mb-4 flex items-center'>
                    <svg
                      className='w-5 h-5 text-green-600 mr-2'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                    {t.tourDetail.included}
                  </h3>
                  <ul className='space-y-2'>
                    {t.wineTour.included.map((item, index) => (
                      <li
                        key={index}
                        className='text-gray-700 flex items-start space-x-2'
                      >
                        <svg
                          className='w-4 h-4 text-green-600 mt-0.5 flex-shrink-0'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='bg-white rounded-2xl shadow-lg p-6'>
                  <h3 className='text-lg font-bold text-gray-900 mb-4 flex items-center'>
                    <svg
                      className='w-5 h-5 text-red-600 mr-2'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                    {t.tourDetail.notIncluded}
                  </h3>
                  <ul className='space-y-2'>
                    {t.wineTour.notIncluded.map((item, index) => (
                      <li
                        key={index}
                        className='text-gray-700 flex items-start space-x-2'
                      >
                        <svg
                          className='w-4 h-4 text-red-600 mt-0.5 flex-shrink-0'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className='lg:col-span-1 order-first lg:order-last'>
              <div className='bg-white rounded-2xl shadow-lg p-6 sticky top-6'>
                <div className='text-center mb-6'>
                  <div className='text-sm text-gray-500 mb-1'>
                    {t.common.from}
                  </div>
                  <span className='text-4xl font-bold text-red-600'>
                    {t.wineTour.price}
                  </span>
                  <p className='text-gray-600'>{t.tours.perPerson}</p>
                  <div className='mt-4 inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full'>
                    <svg
                      className='w-4 h-4 mr-1'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    {t.tourDetail.bestPrice}
                  </div>
                </div>

                {/* Bokun Booking Widget */}
                <Script
                  src="https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=5133d488-02e7-4b3f-8aab-f7f57d5dc30b"
                  strategy="lazyOnload"
                />
                <div
                  className="bokunWidget"
                  data-src="https://widgets.bokun.io/online-sales/5133d488-02e7-4b3f-8aab-f7f57d5dc30b/experience-calendar/1131517"
                ></div>
                <noscript>Please enable javascript in your browser to book</noscript>

                <div className='space-y-4 text-sm text-gray-600 mt-6'>
                  <div className='flex items-start space-x-3'>
                    <svg
                      className='w-5 h-5 text-green-600 mt-0.5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <div>
                      <span className='font-medium text-gray-900'>
                        {t.tourDetail.freeCancellation}
                      </span>
                      <p className='text-gray-600'>24h before tour</p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <svg
                      className='w-5 h-5 text-blue-600 mt-0.5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <div>
                      <span className='font-medium text-gray-900'>
                        {t.tourDetail.pickupInfo}
                      </span>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <svg
                      className='w-5 h-5 text-purple-600 mt-0.5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <div>
                      <span className='font-medium text-gray-900'>
                        {t.tours.duration}
                      </span>
                      <p className='text-gray-600'>{t.wineTour.duration}</p>
                    </div>
                  </div>
                </div>

                {/* Vehicle Options */}
                <div className='mt-6 pt-6 border-t'>
                  <h4 className='font-medium text-gray-900 mb-3'>
                    Vehicle Options:
                  </h4>
                  <ul className='space-y-1 text-sm text-gray-600'>
                    {t.wineTour.vehicles.map((vehicle, index) => (
                      <li key={index}>• {vehicle}</li>
                    ))}
                  </ul>
                </div>

                <div className='mt-6 pt-6 border-t text-center'>
                  <p className='text-sm text-gray-600 mb-3'>
                    {t.tourDetail.needHelp}
                  </p>
                  <a
                    href='tel:+385911359914'
                    className='text-red-600 hover:text-red-700 font-medium'
                  >
                    +385 91 135 9914
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TourFooter />
    </div>
  );
}

function TourFooter() {
  const { t } = useLanguage();

  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          <div className='flex items-center gap-3'>
            <div className='bg-white rounded-xl p-4'>
              <Image src='/img/logo.svg' alt='Dubrovnik Tours' width={200} height={70} className='h-[70px] w-auto' />
            </div>
          </div>
          <div className='flex gap-6'>
            <Link
              href='/tours/audio-guide'
              className='text-gray-300 hover:text-white transition-colors'
            >
              {t.footer.audioGuideTour}
            </Link>
            <Link
              href='/tours/wine-tour'
              className='text-gray-300 hover:text-white transition-colors'
            >
              {t.footer.wineTour}
            </Link>
          </div>
          <div className='text-gray-400 text-sm'>{t.footer.copyright}</div>
        </div>
      </div>
    </footer>
  );
}

export default function TourPage({ params }: TourPageProps) {
  const { id } = use(params);
  const { t } = useLanguage();

  if (id === 'audio-guide') {
    return <AudioGuideTourPage />;
  }

  if (id === 'wine-tour') {
    return <WineTourPage />;
  }

  // Tour not found
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>
          {t.tourDetail.tourNotFound}
        </h1>
        <p className='text-gray-600 mb-8'>{t.tourDetail.tourNotFoundDesc}</p>
        <Link
          href='/'
          className='bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors'
        >
          {t.tourDetail.backHome}
        </Link>
      </div>
    </div>
  );
}
