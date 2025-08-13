import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/components/Header';

// Expanded tour data - in a real app, this would come from a database or API
const tourData = {
  '1': {
    id: 1,
    title: 'Dubrovnik Panorama Bus Tour',
    price: '25€',
    originalPrice: '29€',
    duration: '90 Minutes',
    rating: 4.9,
    reviewCount: 324,
    images: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    ],
    badge: 'BESTSELLER',
    description:
      'See the Old Town walls, Fort Lovrijenac and Mount Srđ panoramas from the comfort of our open-top bus.',
    fullDescription:
      'Take in Dubrovnik’s highlights on a comfortable panoramic route with multiple scenic stops for photos. Perfect introduction to the city for first-time visitors with live commentary by our expert guides.',
    highlights: [
      'Panoramic viewpoints of the Old Town and city walls',
      'Photo stop at Mount Srđ lookout',
      'Views towards Lokrum and the Elaphiti Islands',
      'Open-top double-decker with guaranteed top-deck seats (weather permitting)',
      'Live English and Croatian commentary',
    ],
    itinerary: [
      {
        time: '10:00 AM',
        title: 'Departure from Port Gruž',
        description: 'Board the open-top bus at the main stop in Gruž.',
      },
      {
        time: '10:15 AM',
        title: 'Dubrovnik Bridge',
        description:
          'Scenic drive across Franjo Tuđman Bridge with harbor views.',
      },
      {
        time: '10:35 AM',
        title: 'Mount Srđ Viewpoint',
        description:
          '15-minute photo stop with panoramic views over the Old Town.',
      },
      {
        time: '11:05 AM',
        title: 'Ploče Gate',
        description:
          'Drive-by of the eastern approach to the Old Town and beaches.',
      },
      {
        time: '11:30 AM',
        title: 'Return to Port Gruž',
        description:
          'Finish where you started; grab tips for the rest of your day.',
      },
    ],
    included: [
      'Transportation by open-top sightseeing bus',
      'Live commentary (EN/HR)',
      'Free city map',
      'All taxes and fees',
    ],
    notIncluded: ['Food and drinks', 'Entrance fees to attractions'],
    meetingPoint: 'Port Gruž, Obala Stjepana Radića (main bus stop)',
    cancellationPolicy:
      'Free cancellation up to 24 hours before the tour starts',
    groupSize: 'Top deck capacity 55 seats',
    difficulty: 'Easy - suitable for all ages',
    language: 'English, Croatian',
    season: 'Year-round (weather dependent for top deck)',
  },
  '2': {
    id: 2,
    title: 'Hop-On Hop-Off Dubrovnik (1-Day Pass)',
    price: '35€',
    originalPrice: '39€',
    duration: 'All Day',
    rating: 4.8,
    reviewCount: 412,
    images: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    ],
    badge: 'FLEXIBLE',
    description:
      'Unlimited rides for a full day—perfect for beaches, viewpoints and Old Town gates with audio commentary.',
    fullDescription:
      'Enjoy Dubrovnik at your own pace. Use our network of stops to reach Banje Beach, Lapad, Ploče Gate and more. Buses run frequently; hop off to explore and hop back on to continue your route.',
    highlights: [
      'Unlimited rides for 24 hours',
      'Multiple stops near key attractions',
      'Audio commentary and city tips',
      'Family-friendly and stroller accessible',
    ],
    itinerary: [
      {
        time: 'Every 30 min',
        title: 'City Loop',
        description:
          'Continuous loop between Gruž, Old Town, Lapad and viewpoints.',
      },
    ],
    included: [
      'Day pass wristband',
      'Audio commentary (EN/HR/DE/IT)',
      'City map and discount coupons',
    ],
    notIncluded: ['Attraction entry tickets', 'Food and drinks'],
    meetingPoint: 'Any hop-on stop. Main start: Port Gruž',
    cancellationPolicy:
      'Free cancellation up to 24 hours before the tour starts',
    groupSize: 'Multiple buses in rotation',
    difficulty: 'Easy',
    language: 'English, Croatian, German, Italian',
    season: 'March - November',
  },
  '3': {
    id: 3,
    title: 'Game of Thrones Locations Bus Tour',
    price: '29€',
    originalPrice: '35€',
    duration: '2.5 Hours',
    rating: 4.7,
    reviewCount: 189,
    images: [
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    ],
    badge: 'FAN FAVORITE',
    description:
      'Visit King’s Landing filming spots around Dubrovnik with panoramic stops and insider stories.',
    fullDescription:
      'Relive iconic scenes from the series as you pass Fort Lovrijenac, Pile Gate, Bokar Fortress and more. Our fans-first route maximizes views and photo time while sharing behind-the-scenes stories.',
    highlights: [
      'Key King’s Landing filming locations',
      'Photo stops at famous fortresses',
      'Live guide with insider stories',
      'Comfortable panoramic bus',
    ],
    itinerary: [
      {
        time: '4:00 PM',
        title: 'Pile Gate',
        description: 'Start near the western entrance to the Old Town.',
      },
      {
        time: '4:30 PM',
        title: 'Fort Lovrijenac',
        description: 'Photo stop overlooking the Adriatic.',
      },
      {
        time: '5:10 PM',
        title: 'Bokar Fortress',
        description: 'See defensive walls used in multiple scenes.',
      },
      {
        time: '6:30 PM',
        title: 'Finish at Port Gruž',
        description: 'Drop-off and free time suggestions.',
      },
    ],
    included: ['Live guide (EN/HR)', 'City map', 'All taxes and fees'],
    notIncluded: ['Attraction tickets', 'Hotel pickup'],
    meetingPoint: 'Pile Gate bus stop',
    cancellationPolicy:
      'Free cancellation up to 24 hours before the tour starts',
    groupSize: 'Bus capacity 60',
    difficulty: 'Easy',
    language: 'English, Croatian',
    season: 'April - October',
  },
};

interface TourPageProps {
  params: Promise<{ id: string }>;
}

export default async function TourPage({ params }: TourPageProps) {
  const { id } = await params;
  const tour = tourData[id as keyof typeof tourData];

  if (!tour) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Tour Not Found
          </h1>
          <p className='text-gray-600 mb-8'>
            Sorry, the tour you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href='/'
            className='bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors'
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <Header variant='solid' />

      {/* Hero Section */}
      <section className='relative h-[70vh] overflow-hidden'>
        <img
          src={tour.images[0]}
          alt={tour.title}
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10'></div>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-center text-white max-w-4xl mx-auto px-4'>
            <div className='inline-block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg'>
              {tour.badge}
            </div>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight px-4'>
              {tour.title}
            </h1>
            <p className='text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed px-4'>
              {tour.description}
            </p>

            {/* Quick Info Bar */}
            <div className='flex flex-wrap justify-center items-center gap-3 sm:gap-6 mt-6 md:mt-8 text-white/90 text-sm sm:text-base px-4'>
              <div className='flex items-center space-x-2'>
                <svg
                  className='w-5 h-5 text-yellow-400 fill-current'
                  viewBox='0 0 20 20'
                >
                  <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                </svg>
                <span className='font-medium'>
                  {tour.rating} ({tour.reviewCount} reviews)
                </span>
              </div>
              <div className='flex items-center space-x-2'>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='font-medium'>{tour.duration}</span>
              </div>
              <div className='flex items-center space-x-2'>
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
                <span className='font-medium'>{tour.difficulty}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Info & Booking */}
      <section className='py-12 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-3 gap-6 lg:gap-12'>
            {/* Tour Details */}
            <div className='lg:col-span-2 space-y-6 lg:space-y-8'>
              {/* Small Gallery */}
              <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
                <div className='grid grid-cols-3 gap-1'>
                  {tour.images.map((image, index) => (
                    <div
                      key={index}
                      className='h-24 sm:h-32 md:h-40 overflow-hidden'
                    >
                      <img
                        src={image}
                        alt={`${tour.title} - Image ${index + 1}`}
                        className='w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer'
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Tour Information */}
              <div className='bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8'>
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 lg:mb-8 gap-4'>
                  <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6'>
                    <div className='flex items-center space-x-1'>
                      <svg
                        className='w-5 h-5 text-yellow-400 fill-current'
                        viewBox='0 0 20 20'
                      >
                        <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                      </svg>
                      <span className='font-bold text-lg text-gray-900'>
                        {tour.rating}
                      </span>
                      <span className='text-gray-700'>
                        ({tour.reviewCount} reviews)
                      </span>
                    </div>
                    <span className='hidden sm:inline text-gray-400'>•</span>
                    <span className='text-gray-600 font-medium'>
                      {tour.duration}
                    </span>
                    <span className='hidden sm:inline text-gray-400'>•</span>
                    <span className='text-gray-600 font-medium text-sm sm:text-base'>
                      {tour.groupSize}
                    </span>
                  </div>
                  <div className='text-left lg:text-right'>
                    <div className='flex items-center space-x-2'>
                      <span className='text-2xl lg:text-3xl font-bold text-red-600'>
                        {tour.price}
                      </span>
                      <span className='text-base lg:text-lg text-gray-500 line-through'>
                        {tour.originalPrice}
                      </span>
                    </div>
                    <p className='text-sm text-gray-500'>per person</p>
                  </div>
                </div>

                <h2 className='text-2xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-6'>
                  About This Tour
                </h2>
                <p className='text-gray-700 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8'>
                  {tour.fullDescription}
                </p>

                {/* Tour Highlights */}
                <h3 className='text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6'>
                  What Makes This Tour Special
                </h3>
                <div className='grid sm:grid-cols-2 gap-3 lg:gap-4 mb-8 lg:mb-10'>
                  {tour.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className='flex items-start space-x-3 p-4 bg-green-50 rounded-lg'
                    >
                      <div className='flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-0.5'>
                        <svg
                          className='w-4 h-4 text-white'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </div>
                      <span className='text-gray-800 font-medium'>
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Itinerary */}
                <h3 className='text-xl lg:text-2xl font-bold text-gray-900 mb-6 lg:mb-8'>
                  Daily Itinerary
                </h3>
                <div className='space-y-6'>
                  {tour.itinerary.map((item, index) => (
                    <div key={index} className='relative'>
                      <div className='flex space-x-4 sm:space-x-6'>
                        <div className='flex-shrink-0 relative'>
                          <div className='w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-xl flex items-center justify-center font-bold text-sm sm:text-base lg:text-lg shadow-lg'>
                            {index + 1}
                          </div>
                          {index < tour.itinerary.length - 1 && (
                            <div className='absolute top-10 sm:top-12 lg:top-14 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gray-300'></div>
                          )}
                        </div>
                        <div className='flex-1 pb-6'>
                          <div className='flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-2'>
                            <span className='font-bold text-red-600 text-base sm:text-lg'>
                              {item.time}
                            </span>
                            <span className='hidden sm:block text-gray-400'>
                              •
                            </span>
                            <h4 className='font-bold text-gray-900 text-base sm:text-lg'>
                              {item.title}
                            </h4>
                          </div>
                          <p className='text-gray-700 leading-relaxed text-sm sm:text-base'>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included/Not Included */}
              <div className='grid md:grid-cols-2 gap-6 lg:gap-8'>
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
                    What&apos;s Included
                  </h3>
                  <ul className='space-y-2'>
                    {tour.included.map((item, index) => (
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
                    Not Included
                  </h3>
                  <ul className='space-y-2'>
                    {tour.notIncluded.map((item, index) => (
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
              <div
                id='booking'
                className='bg-white rounded-2xl shadow-lg p-4 sm:p-6 sticky top-6'
              >
                <div className='text-center mb-6'>
                  <div className='flex items-center justify-center space-x-2 mb-2'>
                    <span className='text-3xl sm:text-4xl font-bold text-red-600'>
                      {tour.price}
                    </span>
                    <span className='text-lg sm:text-xl text-gray-500 line-through'>
                      {tour.originalPrice}
                    </span>
                  </div>
                  <p className='text-gray-600 text-base sm:text-lg'>
                    per person
                  </p>
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
                    Best Price Guaranteed
                  </div>
                </div>

                {/* Bokun Widget Placeholder */}
                <div className='border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6'>
                  <div className='text-gray-500 mb-4'>
                    <svg
                      className='w-12 h-12 mx-auto mb-3 text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <p className='font-medium text-gray-700 mb-2'>
                      Bokun Booking Widget
                    </p>
                    <p className='text-sm text-gray-500'>
                      Paste your Bokun widget code here
                    </p>
                  </div>
                  <code className='text-xs bg-gray-100 px-3 py-1 rounded text-gray-600'>
                    &lt;script
                    src=&quot;bokun-widget.js&quot;&gt;&lt;/script&gt;
                  </code>
                </div>

                <div className='space-y-4 text-sm text-gray-600'>
                  <div className='flex items-start space-x-3'>
                    <svg
                      className='w-5 h-5 text-green-600 mt-0.5 flex-shrink-0'
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
                        Free Cancellation
                      </span>
                      <p className='text-gray-600'>{tour.cancellationPolicy}</p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-3'>
                    <svg
                      className='w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0'
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
                        Meeting Point
                      </span>
                      <p className='text-gray-600'>{tour.meetingPoint}</p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-3'>
                    <svg
                      className='w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0'
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
                        Duration
                      </span>
                      <p className='text-gray-600'>{tour.duration}</p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-3'>
                    <svg
                      className='w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                    <div>
                      <span className='font-medium text-gray-900'>
                        Difficulty
                      </span>
                      <p className='text-gray-600'>{tour.difficulty}</p>
                    </div>
                  </div>
                </div>

                <div className='mt-8 pt-6 border-t border-gray-200 text-center'>
                  <p className='text-sm text-gray-600 mb-3'>
                    Need help with your booking?
                  </p>
                  <div className='space-y-2'>
                    <a
                      href='tel:+385911359914'
                      className='flex items-center justify-center space-x-2 text-red-600 hover:text-red-700 font-medium'
                    >
                      <svg
                        className='w-4 h-4'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                      </svg>
                      <span>+385 91 135 9914</span>
                    </a>
                    <a
                      href='mailto:info@adriatravel.com'
                      className='flex items-center justify-center space-x-2 text-red-600 hover:text-red-700 font-medium'
                    >
                      <svg
                        className='w-4 h-4'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                        <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                      </svg>
                      <span>info@adriatravel.com</span>
                    </a>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className='mt-6 pt-6 border-t border-gray-200'>
                  <div className='flex items-center justify-center space-x-4 text-xs text-gray-500'>
                    <div className='flex items-center space-x-1'>
                      <svg
                        className='w-4 h-4 text-green-600'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span>Secure Booking</span>
                    </div>
                    <div className='flex items-center space-x-1'>
                      <svg
                        className='w-4 h-4 text-blue-600'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span>Instant Confirmation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-20 bg-gradient-to-r from-red-600 to-red-700 relative overflow-hidden'>
        <div className='absolute inset-0 bg-black opacity-10'></div>
        <div className='relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Ready to Ride?
          </h2>
          <p className='text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed'>
            Hop aboard Dubrovnik’s best sightseeing buses. Reserve your seat in
            minutes and enjoy panoramic views of the Old Town and Adriatic.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <a
              href='#booking'
              className='bg-white text-red-600 hover:bg-gray-100 font-bold px-10 py-4 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
            >
              Book This Tour Now
            </a>
            <a
              href='tel:+385911359914'
              className='border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold px-10 py-4 rounded-xl text-lg transition-all duration-300'
            >
              Call Us: +385 91 135 9914
            </a>
          </div>

          <div className='mt-12 flex justify-center items-center space-x-8 text-red-100'>
            <div className='text-center'>
              <div className='text-3xl font-bold'>{tour.reviewCount}+</div>
              <div className='text-sm opacity-80'>Happy Travelers</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold'>{tour.rating}</div>
              <div className='text-sm opacity-80'>Average Rating</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold'>24/7</div>
              <div className='text-sm opacity-80'>Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Logo and Contact */}
          <div className='flex flex-col lg:flex-row lg:justify-between gap-12 mb-12'>
            <div className='flex flex-col items-center lg:items-start'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='bg-white rounded-full w-12 h-12 flex items-center justify-center'>
                  <Image src='/globe.svg' alt='Logo' width={24} height={24} />
                </div>
                <span className='sr-only'>Dubrovnik City Sightseeing</span>
              </div>
              <div className='space-y-3 text-gray-300 text-center lg:text-left'>
                <div className='flex items-center gap-3 justify-center lg:justify-start'>
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
                <div className='flex items-center gap-3 justify-center lg:justify-start'>
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
                <div className='flex items-center gap-3 justify-center lg:justify-start'>
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
                <div className='flex items-center gap-3 justify-center lg:justify-start'>
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
    </div>
  );
}
