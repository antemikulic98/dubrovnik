'use client';

import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { useLanguage } from '@/app/lib/LanguageContext';
import { use, useState, useEffect, useCallback } from 'react';

interface TourPageProps {
  params: Promise<{ id: string }>;
}

// Dubrovnik images for Audio Guide Tour
const dubrovnikImages = Array.from({ length: 32 }, (_, i) => `/img/dubrovnik/dubrovnik${i + 1}.jpg`);

// Pelješac images for Wine Tour
const peljesacImages = Array.from({ length: 171 }, (_, i) => `/img/peljesac/peljesac${i + 1}.jpg`);

// City Tour images (reusing dubrovnik images)
const cityTourImages = dubrovnikImages;

// Hop-On Hop-Off Tour images (reusing dubrovnik images)
const hopOnHopOffImages = dubrovnikImages;

// Hero Slideshow Component
function HeroSlideshow({ images, title, badge, badgeColor, shortDescription }: {
  images: string[];
  title: string;
  badge: string;
  badgeColor: string;
  shortDescription: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Use first 8 images for hero slideshow
  const heroImages = images.slice(0, 8);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentIndex + 1) % heroImages.length);
  }, [currentIndex, heroImages.length, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentIndex - 1 + heroImages.length) % heroImages.length);
  }, [currentIndex, heroImages.length, goToSlide]);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className='relative h-[70vh] overflow-hidden'>
      {/* Slideshow Images */}
      {heroImages.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={img}
            alt={`${title} - ${index + 1}`}
            fill
            className='object-cover'
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10'></div>
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className='absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all'
        aria-label='Previous slide'
      >
        <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className='absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all'
        aria-label='Next slide'
      >
        <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
        </svg>
      </button>
      
      {/* Dots Indicator */}
      <div className='absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2'>
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className='absolute inset-0 flex items-center justify-center z-10'>
        <div className='text-center text-white max-w-4xl mx-auto px-4'>
          <div className={`inline-block ${badgeColor} text-white px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg font-body`}>
            {badge}
          </div>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-4'>
            {title}
          </h1>
          <p className='font-body text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed px-4'>
            {shortDescription}
          </p>
        </div>
      </div>
    </section>
  );
}

// Photo Gallery Component
function PhotoGallery({ images, title }: { images: string[]; title: string }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);
  
  // Skip first 8 used in hero, show the rest
  const galleryImages = images.slice(8);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const goToPrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, galleryImages.length));
  };

  if (galleryImages.length === 0) return null;

  return (
    <section className='py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
          Photo Gallery
        </h2>
        
        {/* Gallery Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {galleryImages.slice(0, visibleCount).map((img, index) => (
            <div
              key={img}
              className='relative aspect-square rounded-xl overflow-hidden cursor-pointer group'
              onClick={() => openLightbox(index)}
            >
              <Image
                src={img}
                alt={`${title} - Photo ${index + 1}`}
                fill
                className='object-cover transition-transform duration-300 group-hover:scale-110'
                sizes='(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
              />
              <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center'>
                <svg
                  className='w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7' />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < galleryImages.length && (
          <div className='text-center mt-8'>
            <button
              onClick={loadMore}
              className='font-body bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-8 py-3 rounded-xl transition-colors'
            >
              Load More Photos ({galleryImages.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className='fixed inset-0 z-50 bg-black/95 flex items-center justify-center'>
          <button
            onClick={closeLightbox}
            className='absolute top-4 right-4 text-white hover:text-gray-300 z-10'
          >
            <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
          
          <button
            onClick={goToPrev}
            className='absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all'
          >
            <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className='absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all'
          >
            <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </button>

          <div className='relative w-full h-full max-w-6xl max-h-[80vh] mx-4'>
            <Image
              src={galleryImages[selectedImage]}
              alt={`${title} - Photo ${selectedImage + 1}`}
              fill
              className='object-contain'
              sizes='100vw'
            />
          </div>

          <div className='absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm'>
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
}

function AudioGuideTourPage() {
  const { t } = useLanguage();

  return (
    <div className='min-h-screen bg-white'>
      <Header variant='solid' />

      {/* Hero Slideshow */}
      <HeroSlideshow
        images={dubrovnikImages}
        title={t.audioGuideTour.title}
        badge={t.audioGuideTour.badge}
        badgeColor='bg-amber-500'
        shortDescription={t.audioGuideTour.shortDescription}
      />

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
                <p className='font-body text-gray-700 text-lg leading-relaxed mb-8'>
                  {t.audioGuideTour.fullDescription}
                </p>

                {/* Two Tours Section */}
                <div className='grid md:grid-cols-2 gap-6 mb-8'>
                  <div className='bg-blue-50 rounded-xl p-6 border border-blue-100'>
                    <h3 className='text-xl font-bold text-gray-900 mb-3'>
                      {t.audioGuideTour.oldTownTourTitle}
                    </h3>
                    <p className='font-body text-gray-700 mb-4'>
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
                    <p className='font-body text-gray-700 mb-4'>
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
                      <span className='font-body text-gray-800'>{highlight}</span>
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
                      <p className='font-body text-gray-600'>{t.tourDetail.step1Desc}</p>
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
                      <p className='font-body text-gray-600'>{t.tourDetail.step2Desc}</p>
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
                      <p className='font-body text-gray-600'>{t.tourDetail.step3Desc}</p>
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
                        className='font-body text-gray-700 flex items-start space-x-2'
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
                        className='font-body text-gray-700 flex items-start space-x-2'
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
                  <p className='font-body text-gray-600'>{t.tours.perPerson}</p>
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

                <div className='font-body space-y-4 text-sm text-gray-600 mt-6'>
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
                  <p className='font-body text-sm text-gray-600 mb-3'>
                    {t.tourDetail.needHelp}
                  </p>
                  <a
                    href='tel:+385992206031'
                    className='text-red-600 hover:text-red-700 font-medium'
                  >
                    +385 99 220 6031
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery images={dubrovnikImages} title={t.audioGuideTour.title} />

      <Footer />
    </div>
  );
}

function WineTourPage() {
  const { t } = useLanguage();

  return (
    <div className='min-h-screen bg-white'>
      <Header variant='solid' />

      {/* Hero Slideshow */}
      <HeroSlideshow
        images={peljesacImages}
        title={t.wineTour.title}
        badge={t.wineTour.badge}
        badgeColor='bg-red-600'
        shortDescription={t.wineTour.shortDescription}
      />

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
                <p className='font-body text-gray-700 text-lg leading-relaxed mb-6'>
                  {t.wineTour.fullDescription}
                </p>
                <p className='font-body text-gray-700 leading-relaxed mb-8'>
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
                    <p className='font-body text-gray-700'>
                      {t.wineTour.wineries.matuskoDesc}
                    </p>
                  </div>
                  <div className='bg-gray-50 rounded-xl p-5 border border-gray-200'>
                    <div className='flex items-center gap-2 mb-2'>
                      <h4 className='font-bold text-gray-900'>
                        {t.wineTour.wineries.curlinTitle}
                      </h4>
                      <span className='font-body text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full'>
                        {t.common.optional}
                      </span>
                    </div>
                    <p className='font-body text-gray-700'>
                      {t.wineTour.wineries.curlinDesc}
                    </p>
                  </div>
                  <div className='bg-gray-50 rounded-xl p-5 border border-gray-200'>
                    <div className='flex items-center gap-2 mb-2'>
                      <h4 className='font-bold text-gray-900'>
                        {t.wineTour.wineries.edivoTitle}
                      </h4>
                      <span className='font-body text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full'>
                        {t.common.optional}
                      </span>
                    </div>
                    <p className='font-body text-gray-700'>
                      {t.wineTour.wineries.edivoDesc}
                    </p>
                  </div>
                </div>

                {/* Beach Stop */}
                <div className='bg-blue-50 rounded-xl p-5 border border-blue-100 mb-8'>
                  <div className='flex items-center gap-3'>
                    <span className='text-2xl'>🏖️</span>
                    <p className='font-body text-gray-700'>{t.wineTour.beachStop}</p>
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
                      <span className='font-body text-gray-800'>{highlight}</span>
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
                    <span className='font-body text-gray-800'>
                      {t.wineTour.additionalOptions.winery}
                    </span>
                  </div>
                  <div className='flex items-center gap-3 p-4 bg-amber-50 rounded-lg border border-amber-200'>
                    <span className='text-xl'>🦪</span>
                    <span className='font-body text-gray-800'>
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
                        className='font-body text-gray-700 flex items-start space-x-2'
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
                        className='font-body text-gray-700 flex items-start space-x-2'
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
                  <div className='font-body text-sm text-gray-500 mb-1'>
                    {t.common.from}
                  </div>
                  <span className='text-4xl font-bold text-red-600'>
                    {t.wineTour.price}
                  </span>
                  <p className='font-body text-gray-600'>{t.tours.perPerson}</p>
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

                <div className='font-body space-y-4 text-sm text-gray-600 mt-6'>
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
                <div className='font-body mt-6 pt-6 border-t'>
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
                  <p className='font-body text-sm text-gray-600 mb-3'>
                    {t.tourDetail.needHelp}
                  </p>
                  <a
                    href='tel:+385992206031'
                    className='text-red-600 hover:text-red-700 font-medium'
                  >
                    +385 99 220 6031
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery images={peljesacImages} title={t.wineTour.title} />

      <Footer />
    </div>
  );
}

function HopOnHopOffTourPage() {
  const { t } = useLanguage();

  return (
    <div className='min-h-screen bg-white'>
      <Header variant='solid' />

      {/* Hero Slideshow */}
      <HeroSlideshow
        images={hopOnHopOffImages}
        title={t.hopOnHopOffTour.title}
        badge={t.hopOnHopOffTour.badge}
        badgeColor='bg-blue-600'
        shortDescription={t.hopOnHopOffTour.shortDescription}
      />

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
                <p className='font-body text-gray-700 text-lg leading-relaxed mb-8'>
                  {t.hopOnHopOffTour.fullDescription}
                </p>

                {/* How It Works */}
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  {t.tourDetail.howItWorks}
                </h3>
                <div className='bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100'>
                  <p className='font-body text-gray-700'>
                    {t.hopOnHopOffTour.howItWorks}
                  </p>
                </div>

                {/* Highlights */}
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  {t.tourDetail.highlights}
                </h3>
                <div className='grid sm:grid-cols-2 gap-3 mb-8'>
                  {t.hopOnHopOffTour.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className='flex items-start space-x-3 p-3 bg-blue-50 rounded-lg'
                    >
                      <svg
                        className='w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span className='font-body text-gray-800'>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Route & Stops */}
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  Route & Stops
                </h3>
                <div className='space-y-4 mb-8'>
                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0'>
                      1
                    </div>
                    <div className='bg-red-50 rounded-xl p-4 flex-grow border border-red-100'>
                      <h4 className='font-bold text-gray-900'>{t.hopOnHopOffTour.stops.pile}</h4>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0'>
                      2
                    </div>
                    <div className='bg-orange-50 rounded-xl p-4 flex-grow border border-orange-100'>
                      <h4 className='font-bold text-gray-900'>{t.hopOnHopOffTour.stops.postaLapad}</h4>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0'>
                      3
                    </div>
                    <div className='bg-yellow-50 rounded-xl p-4 flex-grow border border-yellow-100'>
                      <h4 className='font-bold text-gray-900'>{t.hopOnHopOffTour.stops.hotelPresident}</h4>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0'>
                      4
                    </div>
                    <div className='bg-green-50 rounded-xl p-4 flex-grow border border-green-100'>
                      <h4 className='font-bold text-gray-900'>{t.hopOnHopOffTour.stops.hotelKompas}</h4>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0'>
                      5
                    </div>
                    <div className='bg-teal-50 rounded-xl p-4 flex-grow border border-teal-100'>
                      <h4 className='font-bold text-gray-900'>{t.hopOnHopOffTour.stops.gruz}</h4>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0'>
                      6
                    </div>
                    <div className='bg-blue-50 rounded-xl p-4 flex-grow border border-blue-100'>
                      <h4 className='font-bold text-gray-900'>{t.hopOnHopOffTour.stops.bridge}</h4>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0'>
                      7
                    </div>
                    <div className='bg-purple-50 rounded-xl p-4 flex-grow border border-purple-100'>
                      <h4 className='font-bold text-gray-900'>{t.hopOnHopOffTour.stops.viewpoint}</h4>
                    </div>
                  </div>
                </div>

                {/* Departure Times */}
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  Departure Times
                </h3>
                <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 mb-8'>
                  {t.hopOnHopOffTour.departures.map((time, index) => (
                    <div
                      key={index}
                      className='bg-gray-100 text-gray-800 rounded-lg p-3 text-center font-medium'
                    >
                      {time}
                    </div>
                  ))}
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
                    {t.hopOnHopOffTour.included.map((item, index) => (
                      <li
                        key={index}
                        className='font-body text-gray-700 flex items-start space-x-2'
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
                    {t.hopOnHopOffTour.notIncluded.map((item, index) => (
                      <li
                        key={index}
                        className='font-body text-gray-700 flex items-start space-x-2'
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
                  <div className='font-body text-sm text-gray-500 mb-1'>
                    {t.common.from}
                  </div>
                  <span className='text-4xl font-bold text-red-600'>
                    {t.hopOnHopOffTour.price}
                  </span>
                  <p className='font-body text-gray-600'>{t.tours.perPerson}</p>
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
                  data-src="https://widgets.bokun.io/online-sales/5133d488-02e7-4b3f-8aab-f7f57d5dc30b/experience-calendar/1144868"
                ></div>
                <noscript>Please enable javascript in your browser to book</noscript>

                <div className='font-body space-y-4 text-sm text-gray-600 mt-6'>
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
                      <p className='text-gray-600'>{t.hopOnHopOffTour.duration}</p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <svg
                      className='w-5 h-5 text-blue-600 mt-0.5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z' />
                      <path d='M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z' />
                    </svg>
                    <div>
                      <span className='font-medium text-gray-900'>
                        Service Type
                      </span>
                      <p className='text-gray-600'>{t.hopOnHopOffTour.serviceType}</p>
                    </div>
                  </div>
                </div>

                <div className='mt-6 pt-6 border-t text-center'>
                  <p className='font-body text-sm text-gray-600 mb-3'>
                    {t.tourDetail.needHelp}
                  </p>
                  <a
                    href='tel:+385992206031'
                    className='text-red-600 hover:text-red-700 font-medium'
                  >
                    +385 99 220 6031
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery images={hopOnHopOffImages} title={t.hopOnHopOffTour.title} />

      <Footer />
    </div>
  );
}

function CityTourPage() {
  const { t } = useLanguage();

  return (
    <div className='min-h-screen bg-white'>
      <Header variant='solid' />

      {/* Hero Slideshow */}
      <HeroSlideshow
        images={cityTourImages}
        title={t.cityTour.title}
        badge={t.cityTour.badge}
        badgeColor='bg-green-600'
        shortDescription={t.cityTour.shortDescription}
      />

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
                <p className='font-body text-gray-700 text-lg leading-relaxed mb-8'>
                  {t.cityTour.fullDescription}
                </p>

                {/* Highlights */}
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  {t.tourDetail.highlights}
                </h3>
                <div className='grid sm:grid-cols-2 gap-3 mb-8'>
                  {t.cityTour.highlights.map((highlight, index) => (
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
                      <span className='font-body text-gray-800'>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Itinerary */}
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  {t.tourDetail.itinerary}
                </h3>
                <div className='space-y-4 mb-8'>
                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0'>
                      1
                    </div>
                    <div className='bg-green-50 rounded-xl p-4 flex-grow border border-green-100'>
                      <h4 className='font-bold text-gray-900'>Bridge Stop</h4>
                      <p className='font-body text-gray-700 text-sm'>10-minute photo stop at a scenic bridge viewpoint</p>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0'>
                      2
                    </div>
                    <div className='bg-blue-50 rounded-xl p-4 flex-grow border border-blue-100'>
                      <h4 className='font-bold text-gray-900'>Ombla River Spring</h4>
                      <p className='font-body text-gray-700 text-sm'>15-minute visit to the beautiful river spring</p>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0'>
                      3
                    </div>
                    <div className='bg-purple-50 rounded-xl p-4 flex-grow border border-purple-100'>
                      <h4 className='font-bold text-gray-900'>Mount Srd Viewpoint</h4>
                      <p className='font-body text-gray-700 text-sm'>15-20 minutes of free time at the top with panoramic views</p>
                    </div>
                  </div>
                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0'>
                      4
                    </div>
                    <div className='bg-red-50 rounded-xl p-4 flex-grow border border-red-100'>
                      <h4 className='font-bold text-gray-900'>Pile Gate Drop-off</h4>
                      <p className='font-body text-gray-700 text-sm'>Tour ends at Pile Gate (Old Town entrance)</p>
                    </div>
                  </div>
                </div>

                {/* Departure Times */}
                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                  Departure Times
                </h3>
                <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 mb-8'>
                  {t.cityTour.departures.map((time, index) => (
                    <div
                      key={index}
                      className={`rounded-lg p-3 text-center font-medium ${
                        time.toLowerCase().includes('sunset')
                          ? 'bg-orange-100 text-orange-800 border border-orange-200'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {time}
                    </div>
                  ))}
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
                    {t.cityTour.included.map((item, index) => (
                      <li
                        key={index}
                        className='font-body text-gray-700 flex items-start space-x-2'
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
                    {t.cityTour.notIncluded.map((item, index) => (
                      <li
                        key={index}
                        className='font-body text-gray-700 flex items-start space-x-2'
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
                  <div className='font-body text-sm text-gray-500 mb-1'>
                    {t.common.from}
                  </div>
                  <span className='text-4xl font-bold text-red-600'>
                    {t.cityTour.price}
                  </span>
                  <p className='font-body text-gray-600'>{t.tours.perPerson}</p>
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
                  data-src="https://widgets.bokun.io/online-sales/5133d488-02e7-4b3f-8aab-f7f57d5dc30b/experience-calendar/1144868"
                ></div>
                <noscript>Please enable javascript in your browser to book</noscript>

                <div className='font-body space-y-4 text-sm text-gray-600 mt-6'>
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
                      <p className='text-gray-600'>{t.cityTour.duration}</p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <svg
                      className='w-5 h-5 text-blue-600 mt-0.5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z' />
                      <path d='M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z' />
                    </svg>
                    <div>
                      <span className='font-medium text-gray-900'>
                        Vehicle
                      </span>
                      <p className='text-gray-600'>{t.cityTour.vehicle}</p>
                    </div>
                  </div>
                </div>

                <div className='mt-6 pt-6 border-t text-center'>
                  <p className='font-body text-sm text-gray-600 mb-3'>
                    {t.tourDetail.needHelp}
                  </p>
                  <a
                    href='tel:+385992206031'
                    className='text-red-600 hover:text-red-700 font-medium'
                  >
                    +385 99 220 6031
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery images={cityTourImages} title={t.cityTour.title} />

      <Footer />
    </div>
  );
}

export default function TourPage({ params }: TourPageProps) {
  const { id } = use(params);
  const { t } = useLanguage();

  if (id === 'hop-on-hop-off') {
    return <HopOnHopOffTourPage />;
  }

  if (id === 'city-tour') {
    return <CityTourPage />;
  }

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
