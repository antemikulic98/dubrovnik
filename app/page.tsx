'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Header from './components/Header';

function FeaturedTours() {
  const featuredTours = [
    {
      id: 1,
      title: 'Dubrovnik Panorama Bus Tour',
      price: '25€',
      duration: '90 Minutes',
      rating: 4.9,
      image:
        'https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      badge: 'BESTSELLER',
      description:
        'See the city walls, Lokrum views and Mount Srđ panoramas from our open-top double-decker bus.',
    },
    {
      id: 2,
      title: 'Hop-On Hop-Off Dubrovnik (1-Day Pass)',
      price: '35€',
      duration: 'All Day',
      rating: 4.8,
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      badge: 'FLEXIBLE',
      description:
        'Unlimited rides for a full day. Get off at beaches, viewpoints and Old Town gates—then hop back on.',
    },
    {
      id: 3,
      title: 'Game of Thrones Locations Bus Tour',
      price: '29€',
      duration: '2.5 Hours',
      rating: 4.7,
      image:
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      badge: 'FAN FAVORITE',
      description:
        'Visit King’s Landing filming spots around Dubrovnik with panoramic stops and insider stories.',
    },
  ];

  return (
    <section id='tours' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Dubrovnik <span className='text-red-600'>Bus Tours</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Explore the city from the top deck. Flexible hop-on hop-off and
            curated panoramic routes designed for the best views of Dubrovnik.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {featuredTours.map((tour) => (
            <div
              key={tour.id}
              className='bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col'
            >
              <div className='relative h-64'>
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  className='object-cover'
                  unoptimized
                />
                <div className='absolute top-4 left-4'>
                  <span className='bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold'>
                    {tour.badge}
                  </span>
                </div>
                <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1'>
                  <div className='flex items-center space-x-1'>
                    <svg
                      className='w-4 h-4 text-yellow-400 fill-current'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                    </svg>
                    <span className='text-sm font-bold text-gray-900'>
                      {tour.rating}
                    </span>
                  </div>
                </div>
              </div>

              <div className='p-6 flex flex-col flex-grow'>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                  {tour.title}
                </h3>
                <div className='flex items-center gap-4 mb-4 p-3 bg-gray-50 rounded-lg'>
                  <div className='text-center'>
                    <div className='text-2xl font-bold text-red-600'>
                      {tour.price}
                    </div>
                    <div className='text-xs text-gray-500'>per person</div>
                  </div>
                  <div className='w-px h-10 bg-gray-300'></div>
                  <div className='text-center'>
                    <div className='text-lg font-semibold text-gray-900'>
                      {tour.duration}
                    </div>
                    <div className='text-xs text-gray-500'>duration</div>
                  </div>
                </div>
                <div className='flex items-center gap-1 mb-4'>
                  <svg
                    className='w-4 h-4 text-yellow-400 fill-current'
                    viewBox='0 0 20 20'
                  >
                    <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                  </svg>
                  <span className='text-sm font-bold text-gray-900'>
                    {tour.rating}
                  </span>
                </div>
                <p className='text-gray-600 mb-6 flex-grow'>
                  {tour.description}
                </p>
                <Link
                  href={`/tours/${tour.id}`}
                  className='block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200'
                >
                  Book This Tour
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);

  const subjectOptions = [
    { value: '', label: 'Select a topic' },
    { value: 'booking', label: 'Tour Booking' },
    { value: 'group', label: 'Group Reservations' },
    { value: 'information', label: 'Tour Information' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'other', label: 'Other' },
  ];

  const handleSubjectSelect = (value: string, label: string) => {
    setSelectedSubject(label);
    setIsSubjectOpen(false);
  };

  return (
    <form className='space-y-6'>
      <div className='grid md:grid-cols-2 gap-6'>
        <div>
          <label
            htmlFor='name'
            className='block text-sm font-bold text-gray-900 mb-2'
          >
            Full Name *
          </label>
          <input
            type='text'
            id='name'
            name='name'
            required
            className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-gray-900'
            placeholder='Your full name'
          />
        </div>
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-bold text-gray-900 mb-2'
          >
            Email Address *
          </label>
          <input
            type='email'
            id='email'
            name='email'
            required
            className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-gray-900'
            placeholder='your.email@example.com'
          />
        </div>
      </div>

      <div className='grid md:grid-cols-2 gap-6'>
        <div>
          <label
            htmlFor='phone'
            className='block text-sm font-bold text-gray-900 mb-2'
          >
            Phone Number
          </label>
          <input
            type='tel'
            id='phone'
            name='phone'
            className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-gray-900'
            placeholder='+385 ...'
          />
        </div>
        <div>
          <label
            htmlFor='subject'
            className='block text-sm font-bold text-gray-900 mb-2'
          >
            Subject
          </label>
          <div className='relative'>
            <button
              type='button'
              onClick={() => setIsSubjectOpen(!isSubjectOpen)}
              className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-gray-900 text-left flex items-center justify-between'
            >
              <span
                className={selectedSubject ? 'text-gray-900' : 'text-gray-500'}
              >
                {selectedSubject || 'Select a topic'}
              </span>
              <svg
                className={`w-5 h-5 text-gray-400 transition-transform ${
                  isSubjectOpen ? 'rotate-180' : ''
                }`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>
            {isSubjectOpen && (
              <div className='absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg'>
                {subjectOptions.map((option) => (
                  <button
                    key={option.value}
                    type='button'
                    onClick={() =>
                      handleSubjectSelect(option.value, option.label)
                    }
                    className='w-full px-4 py-3 text-left hover:bg-gray-50 text-gray-900 first:rounded-t-lg last:rounded-b-lg transition-colors'
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor='message'
          className='block text-sm font-bold text-gray-900 mb-2'
        >
          Message *
        </label>
        <textarea
          id='message'
          name='message'
          rows={5}
          required
          className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-vertical text-gray-900'
          placeholder='Tell us about your inquiry, preferred dates, group size, or any special requirements...'
        ></textarea>
      </div>

      <div className='flex items-start gap-3'>
        <input
          type='checkbox'
          id='newsletter'
          name='newsletter'
          className='mt-1 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded'
        />
        <label htmlFor='newsletter' className='text-sm text-gray-600'>
          I&apos;d like to receive updates about new tours and special offers
        </label>
      </div>

      <button
        type='submit'
        className='w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200'
      >
        Send Message
      </button>

      <p className='text-sm text-gray-500 text-center'>
        We typically respond within 2 hours during business hours
      </p>
    </form>
  );
}

export default function Home() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section with Background Image */}
      <section className='relative h-screen overflow-hidden'>
        {/* Background Image */}
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518727818782-ed5341dbd476?q=80&w=1920&auto=format&fit=crop')`,
          }}
        ></div>

        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60'></div>

        {/* Transparent Header */}
        <Header variant='transparent' />

        {/* Hero Content */}
        <div className='relative z-10 h-full flex items-center justify-center'>
          <div className='text-center text-white max-w-4xl mx-auto px-4'>
            <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
              See Dubrovnik <br />
              <span className='text-yellow-400'>from the Top Deck</span>
            </h1>
            <p className='text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto'>
              Open-top sightseeing buses, hop-on hop-off freedom and the best
              panoramic viewpoints in the Pearl of the Adriatic.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='#tours'
                className='bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg'
              >
                Explore Tours
              </a>
              <button className='border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors'>
                Watch Video
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 14l-7 7m0 0l-7-7m7 7V3'
            />
          </svg>
        </div>
      </section>

      {/* Featured Tours Section */}
      <FeaturedTours />

      {/* About Us & Contact Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-16'>
            {/* About Us */}
            <div
              id='about'
              className='flex flex-col justify-start order-1 lg:order-1'
            >
              <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                About <span className='text-red-600'>Our Story</span>
              </h2>
              <p className='text-gray-600 mb-8 text-lg'>
                Discover the passion and dedication behind Dubrovnik&apos;s
                premier sightseeing experience.
              </p>
              <div className='space-y-6 text-lg text-gray-700 leading-relaxed'>
                <p>
                  For over a decade, we&apos;ve been passionate about showcasing
                  the breathtaking beauty of Dubrovnik from the best possible
                  perspective – the top deck of our premium sightseeing buses.
                </p>
                <p>
                  Our fleet of modern, eco-friendly double-decker buses provides
                  unobstructed panoramic views of the Pearl of the Adriatic,
                  from the ancient city walls to the stunning coastline and
                  nearby islands.
                </p>
                <p>
                  What started as a family business has grown into
                  Dubrovnik&apos;s most trusted sightseeing experience,
                  welcoming over 100,000 visitors annually from around the
                  world.
                </p>
              </div>
              <div className='mt-8 grid grid-cols-3 gap-6'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-red-600 mb-2'>
                    10+
                  </div>
                  <div className='text-sm text-gray-600'>Years Experience</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-red-600 mb-2'>
                    100K+
                  </div>
                  <div className='text-sm text-gray-600'>Happy Visitors</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-red-600 mb-2'>
                    4.8
                  </div>
                  <div className='text-sm text-gray-600'>Average Rating</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              id='contact'
              className='bg-gray-50 rounded-3xl p-8 lg:p-12 order-2 lg:order-2'
            >
              <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                Get in <span className='text-red-600'>Touch</span>
              </h2>
              <p className='text-gray-600 mb-8 text-lg'>
                Have questions about our tours? Planning a group visit?
                We&apos;d love to hear from you!
              </p>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Logo and Contact */}
        <div className='flex flex-col lg:flex-row lg:justify-between gap-12 mb-12'>
          <div className='flex flex-col items-start'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='bg-white rounded-full w-12 h-12 flex items-center justify-center'>
                <Image src='/globe.svg' alt='Logo' width={24} height={24} />
              </div>
              <span className='sr-only'>Dubrovnik City Sightseeing</span>
            </div>
            <div className='space-y-3 text-gray-300 text-left'>
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
                <span>+385 91 135 9914</span>
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
                <span>hello@dubrovnik-sightseeing.com</span>
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
                <span>Obala Stjepana Radića, Port Gruž, 20000 Dubrovnik</span>
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
                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                <span>Mon - Sun 8.00 - 22.00</span>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
            <div>
              <h4 className='font-bold mb-6 text-lg'>Follow Us</h4>
              <div className='space-y-3'>
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
              <h4 className='font-bold mb-6 text-lg'>Popular Tours</h4>
              <div className='space-y-3'>
                <Link
                  href='/tours/1'
                  className='block text-gray-300 hover:text-white transition-colors'
                >
                  Dubrovnik Panorama Tour
                </Link>
                <Link
                  href='/tours/2'
                  className='block text-gray-300 hover:text-white transition-colors'
                >
                  Hop-On Hop-Off 1-Day Pass
                </Link>
                <Link
                  href='/tours/3'
                  className='block text-gray-300 hover:text-white transition-colors'
                >
                  Game of Thrones Tour
                </Link>
                <a
                  href='#'
                  className='block text-gray-300 hover:text-white transition-colors'
                >
                  Sunset Panorama Ride
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='border-t border-gray-700 pt-8 text-center'>
          <p className='text-gray-400'>&copy; 2024 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
