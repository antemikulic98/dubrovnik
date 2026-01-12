'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { useLanguage } from '@/app/lib/LanguageContext';
import { use } from 'react';

const blogPostsData = {
  'best-restaurants-dubrovnik': {
    key: 'restaurants' as const,
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    category: 'food' as const,
    date: '2024-12-01',
    relatedSlugs: ['best-wineries-peljesac', 'hidden-gems-old-town'],
  },
  'best-wineries-peljesac': {
    key: 'wineries' as const,
    image:
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    category: 'wine' as const,
    date: '2024-11-15',
    relatedSlugs: ['best-restaurants-dubrovnik', 'best-beaches-dubrovnik'],
  },
  'hidden-gems-old-town': {
    key: 'oldTown' as const,
    image:
      'https://images.unsplash.com/photo-1555990793-da11153b2473?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    category: 'culture' as const,
    date: '2024-11-01',
    relatedSlugs: ['best-restaurants-dubrovnik', 'best-beaches-dubrovnik'],
  },
  'best-beaches-dubrovnik': {
    key: 'beaches' as const,
    image: '/img/dubrovnik/dubrovnik22.jpg',
    category: 'travel' as const,
    date: '2024-10-20',
    relatedSlugs: ['hidden-gems-old-town', 'best-wineries-peljesac'],
  },
};

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const { t } = useLanguage();

  const postData = blogPostsData[slug as keyof typeof blogPostsData];

  if (!postData) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Post Not Found
          </h1>
          <Link
            href='/blog'
            className='bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors'
          >
            {t.blog.backToBlog}
          </Link>
        </div>
      </div>
    );
  }

  const post = t.blog.posts[postData.key];
  const categoryLabel = t.blog.categories[postData.category];

  return (
    <div className='min-h-screen bg-white'>
      <Header variant='solid' />

      {/* Hero Section */}
      <section className='relative h-[50vh] min-h-[400px]'>
        <Image
          src={postData.image}
          alt={post.title}
          fill
          className='object-cover'
          priority
          unoptimized
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20'></div>
        <div className='absolute inset-0 flex items-end'>
          <div className='max-w-4xl mx-auto px-4 pb-12 w-full'>
            <Link
              href='/blog'
              className='inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors'
            >
              <svg
                className='w-4 h-4'
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
              {t.blog.backToBlog}
            </Link>
            <span className='inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-4'>
              {categoryLabel}
            </span>
            <h1 className='text-3xl md:text-5xl font-bold text-white mb-4'>
              {post.title}
            </h1>
            <p className='text-gray-300'>
              {new Date(postData.date).toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className='py-12'>
        <div className='max-w-3xl mx-auto px-4'>
          {/* Excerpt */}
          <p className='font-body text-xl text-gray-700 leading-relaxed mb-8 font-medium'>
            {post.excerpt}
          </p>

          {/* Main Content */}
          <div className='font-body prose prose-lg max-w-none'>
            {post.content.map((paragraph, index) => (
              <p key={index} className='text-gray-700 leading-relaxed mb-6'>
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className='mt-12 p-8 bg-red-50 rounded-2xl'>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
              Ready to explore Dubrovnik?
            </h3>
            <p className='font-body text-gray-700 mb-6'>
              Book one of our tours and experience the best of Dubrovnik with
              local guides.
            </p>
            <Link
              href='/#tours'
              className='inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors'
            >
              {t.nav.tours}
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className='py-12 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4'>
          <h2 className='text-2xl font-bold text-gray-900 mb-8'>
            {t.blog.relatedPosts}
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {postData.relatedSlugs.map((relatedSlug) => {
              const relatedData =
                blogPostsData[relatedSlug as keyof typeof blogPostsData];
              if (!relatedData) return null;
              const relatedPost = t.blog.posts[relatedData.key];
              const relatedCategory = t.blog.categories[relatedData.category];

              return (
                <Link
                  key={relatedSlug}
                  href={`/blog/${relatedSlug}`}
                  className='group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300'
                >
                  <div className='relative h-48'>
                    <Image
                      src={relatedData.image}
                      alt={relatedPost.title}
                      fill
                      className='object-cover group-hover:scale-105 transition-transform duration-500'
                      unoptimized
                    />
                    <div className='absolute top-4 left-4'>
                      <span className='bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold'>
                        {relatedCategory}
                      </span>
                    </div>
                  </div>
                  <div className='p-6'>
                    <h3 className='text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors'>
                      {relatedPost.title}
                    </h3>
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
