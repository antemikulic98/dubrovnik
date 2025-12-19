'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Header from '../components/Header';
import { useLanguage } from '../lib/LanguageContext';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1555990538-1e6c2e3c9c71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    alt: 'Dubrovnik Old Town',
    category: 'Old Town',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    alt: 'Wine Tasting Pelješac',
    category: 'Wine Tour',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    alt: 'Dubrovnik Beach',
    category: 'Beaches',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    alt: 'City Walls',
    category: 'Old Town',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    alt: 'Adriatic Sea View',
    category: 'Views',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    alt: 'Croatian Cuisine',
    category: 'Food',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    alt: 'Sunset Dubrovnik',
    category: 'Views',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    alt: 'Wine Cellar',
    category: 'Wine Tour',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    alt: 'Lokrum Island',
    category: 'Islands',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    alt: 'Local Restaurant',
    category: 'Food',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    alt: 'Stradun Street',
    category: 'Old Town',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    alt: 'Harbor View',
    category: 'Views',
  },
];

export default function GalleryPage() {
  const { t } = useLanguage();
  const [lightboxImage, setLightboxImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);

  const shareOnWhatsApp = (imageUrl: string) => {
    const text = `Check out this amazing photo from Dubrovnik! 📸\n${imageUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header variant='solid' />

      {/* Hero Section */}
      <section className='bg-gray-900 py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            {t.gallery.title}
          </h1>
          <p className='font-body text-lg text-gray-300 max-w-2xl mx-auto'>
            {t.gallery.subtitle}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-xl bg-gray-200 cursor-pointer ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => setLightboxImage(image)}
              >
                <div
                  className={`relative ${
                    index % 5 === 0 ? 'aspect-square' : 'aspect-square'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                    unoptimized
                  />
                  {/* Overlay */}
                  <div className='absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300' />

                  {/* Share Button - Always visible */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      shareOnWhatsApp(image.src);
                    }}
                    className='absolute bottom-3 right-3 w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 z-10'
                    aria-label={t.gallery.shareOn}
                  >
                    {/* WhatsApp Icon */}
                    <svg
                      className='w-5 h-5 text-white'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
                    </svg>
                  </button>

                  {/* Category Badge */}
                  <div className='absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <span className='bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium px-2.5 py-1 rounded-full'>
                      {image.category}
                    </span>
                  </div>

                  {/* Expand Icon */}
                  <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
                    <div className='w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center'>
                      <svg
                        className='w-6 h-6 text-gray-900'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className='fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4'
          onClick={() => setLightboxImage(null)}
        >
          {/* Close Button */}
          <button
            className='absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors'
            onClick={() => setLightboxImage(null)}
            aria-label='Close'
          >
            <svg
              className='w-6 h-6 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>

          {/* Image Container */}
          <div
            className='relative max-w-5xl max-h-[85vh] w-full'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='relative aspect-[4/3] w-full'>
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                fill
                className='object-contain rounded-lg'
                unoptimized
              />
            </div>

            {/* Bottom Bar */}
            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg'>
              <div className='flex items-center justify-between'>
                <div>
                  <h3 className='text-white text-lg font-medium'>
                    {lightboxImage.alt}
                  </h3>
                  <span className='text-white/70 text-sm'>
                    {lightboxImage.category}
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    shareOnWhatsApp(lightboxImage.src);
                  }}
                  className='flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2.5 rounded-full transition-colors'
                >
                  <svg
                    className='w-5 h-5'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                  >
                    <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
                  </svg>
                  {t.gallery.shareOn}
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            className='absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors'
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = galleryImages.findIndex(
                (img) => img.id === lightboxImage.id
              );
              const prevIndex =
                currentIndex === 0
                  ? galleryImages.length - 1
                  : currentIndex - 1;
              setLightboxImage(galleryImages[prevIndex]);
            }}
            aria-label='Previous'
          >
            <svg
              className='w-6 h-6 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>
          <button
            className='absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors'
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = galleryImages.findIndex(
                (img) => img.id === lightboxImage.id
              );
              const nextIndex =
                currentIndex === galleryImages.length - 1
                  ? 0
                  : currentIndex + 1;
              setLightboxImage(galleryImages[nextIndex]);
            }}
            aria-label='Next'
          >
            <svg
              className='w-6 h-6 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>
        </div>
      )}

      {/* Footer */}
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
                href='/'
                className='text-gray-300 hover:text-white transition-colors'
              >
                {t.nav.tours}
              </Link>
              <Link
                href='/blog'
                className='text-gray-300 hover:text-white transition-colors'
              >
                {t.nav.blog}
              </Link>
              <Link
                href='/gallery'
                className='text-gray-300 hover:text-white transition-colors'
              >
                {t.nav.gallery}
              </Link>
            </div>
            <div className='text-gray-400 text-sm'>{t.footer.copyright}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
