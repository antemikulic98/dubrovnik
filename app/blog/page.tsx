'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../lib/LanguageContext';

const blogPosts = [
  {
    slug: 'best-restaurants-dubrovnik',
    key: 'restaurants' as const,
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    category: 'food' as const,
    date: '2024-12-01',
  },
  {
    slug: 'best-wineries-peljesac',
    key: 'wineries' as const,
    image:
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    category: 'wine' as const,
    date: '2024-11-15',
  },
  {
    slug: 'hidden-gems-old-town',
    key: 'oldTown' as const,
    image:
      'https://images.unsplash.com/photo-1555990793-da11153b2473?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    category: 'culture' as const,
    date: '2024-11-01',
  },
  {
    slug: 'best-beaches-dubrovnik',
    key: 'beaches' as const,
    image: '/img/dubrovnik/dubrovnik5.jpg',
    category: 'travel' as const,
    date: '2024-10-20',
  },
];

export default function BlogPage() {
  const { t } = useLanguage();

  return (
    <div className='min-h-screen bg-white'>
      <Header variant='solid' />

      {/* Hero Section with Image */}
      <section className='relative h-[50vh] overflow-hidden'>
        <Image
          src='/img/dubrovnik/dubrovnik15.jpg'
          alt='Dubrovnik Blog'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20'></div>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-center text-white max-w-4xl mx-auto px-4'>
            <h1 className='text-4xl md:text-6xl font-bold mb-4'>
              {t.blog.title}
            </h1>
            <p className='font-body text-lg md:text-xl text-white/90 max-w-2xl mx-auto'>
              {t.blog.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 gap-8'>
            {blogPosts.map((post) => {
              const postData = t.blog.posts[post.key];
              const categoryLabel = t.blog.categories[post.category];

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className='group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'
                >
                  <div className='relative h-64'>
                    <Image
                      src={post.image}
                      alt={postData.title}
                      fill
                      className='object-cover group-hover:scale-105 transition-transform duration-500'
                      unoptimized
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>
                    <div className='absolute top-4 left-4'>
                      <span className='bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold'>
                        {categoryLabel}
                      </span>
                    </div>
                  </div>
                  <div className='p-6'>
                    <p className='text-sm text-gray-500 mb-2'>
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                    <h2 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors'>
                      {postData.title}
                    </h2>
                    <p className='font-body text-gray-600 mb-4 line-clamp-2'>
                      {postData.excerpt}
                    </p>
                    <span className='text-red-600 font-medium inline-flex items-center gap-2'>
                      {t.blog.readMore}
                      <svg
                        className='w-4 h-4 group-hover:translate-x-1 transition-transform'
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
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
