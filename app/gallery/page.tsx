'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../lib/LanguageContext';

// Explicit list of existing dubrovnik images
const dubrovnikImageNumbers = [1, 2, 3, 4, 5, 6, 13, 14, 15, 16, 17, 18, 19, 20, 21, 25, 31, 32];
const dubrovnikImages = dubrovnikImageNumbers.map((num) => ({
  id: `dubrovnik-${num}`,
  src: `/img/dubrovnik/dubrovnik${num}.jpg`,
  alt: `Dubrovnik Old Town - Photo ${num}`,
  category: 'Dubrovnik',
}));

const peljesacImages = Array.from({ length: 171 }, (_, i) => ({
  id: `peljesac-${i + 1}`,
  src: `/img/peljesac/peljesac${i + 1}.jpg`,
  alt: `Pelješac Wine Tour - Photo ${i + 1}`,
  category: 'Pelješac',
}));

// Combine all images
const allImages = [...dubrovnikImages, ...peljesacImages];

type CategoryFilter = 'all' | 'Dubrovnik' | 'Pelješac';

export default function GalleryPage() {
  const { t } = useLanguage();
  const [lightboxImage, setLightboxImage] = useState<typeof allImages[0] | null>(null);
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [visibleCount, setVisibleCount] = useState(24);

  const filteredImages = filter === 'all' 
    ? allImages 
    : allImages.filter(img => img.category === filter);

  const shareOnWhatsApp = (imageSrc: string) => {
    const fullUrl = typeof window !== 'undefined' 
      ? `${window.location.origin}${imageSrc}` 
      : imageSrc;
    const text = `Check out this amazing photo from Dubrovnik Tours! 📸\n${fullUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const downloadImage = async (imageSrc: string, imageName: string) => {
    try {
      const response = await fetch(imageSrc);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${imageName}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 24, filteredImages.length));
  };

  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(24);
  }, [filter]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxImage) return;
      
      if (e.key === 'Escape') {
        setLightboxImage(null);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage.id);
        const nextIndex = (currentIndex + 1) % filteredImages.length;
        setLightboxImage(filteredImages[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage.id);
        const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        setLightboxImage(filteredImages[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage, filteredImages]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxImage]);

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header variant='solid' />

      {/* Hero Section with Image */}
      <section className='relative h-[50vh] overflow-hidden'>
        <Image
          src='/img/dubrovnik/dubrovnik3.jpg'
          alt='Gallery Hero'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20'></div>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-center text-white max-w-4xl mx-auto px-4'>
            <h1 className='text-4xl md:text-6xl font-bold mb-4'>
              {t.gallery.title}
            </h1>
            <p className='font-body text-lg md:text-xl text-white/90 max-w-2xl mx-auto'>
              {t.gallery.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className='sticky top-0 z-30 bg-white border-b shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-center gap-2 py-4'>
            <button
              onClick={() => setFilter('all')}
              className={`font-body px-6 py-2.5 rounded-full font-medium transition-all ${
                filter === 'all'
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Photos ({allImages.length})
            </button>
            <button
              onClick={() => setFilter('Dubrovnik')}
              className={`font-body px-6 py-2.5 rounded-full font-medium transition-all ${
                filter === 'Dubrovnik'
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Dubrovnik ({dubrovnikImages.length})
            </button>
            <button
              onClick={() => setFilter('Pelješac')}
              className={`font-body px-6 py-2.5 rounded-full font-medium transition-all ${
                filter === 'Pelješac'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Pelješac ({peljesacImages.length})
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {filteredImages.slice(0, visibleCount).map((image, index) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-xl bg-gray-200 cursor-pointer ${
                  index % 7 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => setLightboxImage(image)}
              >
                <div className='relative aspect-square'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                    sizes={index % 7 === 0 ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
                  />
                  {/* Overlay */}
                  <div className='absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300' />

                  {/* Share Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      shareOnWhatsApp(image.src);
                    }}
                    className='absolute bottom-3 right-3 w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 z-10'
                    aria-label={t.gallery.shareOn}
                  >
                    <svg
                      className='w-5 h-5 text-white'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
                    </svg>
                  </button>

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

          {/* Load More Button */}
          {visibleCount < filteredImages.length && (
            <div className='text-center mt-12'>
              <button
                onClick={loadMore}
                className='font-body bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl'
              >
                Load More Photos ({filteredImages.length - visibleCount} remaining)
              </button>
            </div>
          )}

          {/* Photo Count */}
          <div className='text-center mt-8'>
            <p className='font-body text-gray-500'>
              Showing {Math.min(visibleCount, filteredImages.length)} of {filteredImages.length} photos
            </p>
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
            className='absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10'
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
            className='relative max-w-6xl max-h-[85vh] w-full'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='relative w-full h-[70vh]'>
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                fill
                className='object-contain'
                sizes='100vw'
              />
            </div>

            {/* Bottom Bar */}
            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg'>
              <div className='flex items-center justify-between flex-wrap gap-4'>
                <div>
                  <h3 className='font-body text-white text-lg font-medium'>
                    {lightboxImage.alt}
                  </h3>
                </div>
                <div className='flex gap-3'>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      downloadImage(lightboxImage.src, lightboxImage.id);
                    }}
                    className='font-body flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-medium px-5 py-2.5 rounded-full transition-colors'
                  >
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4' />
                    </svg>
                    {t.gallery.downloadImage}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      shareOnWhatsApp(lightboxImage.src);
                    }}
                    className='font-body flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2.5 rounded-full transition-colors'
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
          </div>

          {/* Navigation Arrows */}
          <button
            className='absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors'
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = filteredImages.findIndex(
                (img) => img.id === lightboxImage.id
              );
              const prevIndex =
                currentIndex === 0
                  ? filteredImages.length - 1
                  : currentIndex - 1;
              setLightboxImage(filteredImages[prevIndex]);
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
              const currentIndex = filteredImages.findIndex(
                (img) => img.id === lightboxImage.id
              );
              const nextIndex =
                currentIndex === filteredImages.length - 1
                  ? 0
                  : currentIndex + 1;
              setLightboxImage(filteredImages[nextIndex]);
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

          {/* Image Counter */}
          <div className='absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full font-body text-sm'>
            {filteredImages.findIndex(img => img.id === lightboxImage.id) + 1} / {filteredImages.length}
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
