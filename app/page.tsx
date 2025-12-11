'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Header from './components/Header';
import { useLanguage } from './lib/LanguageContext';

// Custom Tour Modal Component
function CustomTourModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    groupSize: '',
    interests: [] as string[],
    duration: '',
    additionalRequests: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create email body
    const interestLabels = formData.interests
      .map((i) => {
        const key = i as keyof typeof t.customTour.form.interestOptions;
        return t.customTour.form.interestOptions[key];
      })
      .join(', ');

    const durationLabel =
      formData.duration === 'halfDay'
        ? t.customTour.form.durationOptions.halfDay
        : formData.duration === 'fullDay'
        ? t.customTour.form.durationOptions.fullDay
        : t.customTour.form.durationOptions.multiDay;

    const emailSubject = encodeURIComponent(
      `Custom Tour Request from ${formData.name}`
    );
    const emailBody = encodeURIComponent(
      `New Custom Tour Request\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || 'Not provided'}\n` +
        `Preferred Date: ${formData.date || 'Flexible'}\n` +
        `Group Size: ${formData.groupSize || 'Not specified'}\n` +
        `Interests: ${interestLabels || 'Not specified'}\n` +
        `Duration: ${durationLabel || 'Not specified'}\n\n` +
        `Additional Requests:\n${formData.additionalRequests || 'None'}`
    );

    // Open Gmail compose
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=hello@dubrovnik-tours.com&su=${emailSubject}&body=${emailBody}`,
      '_blank'
    );

    // Simulate sending
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 500);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      groupSize: '',
      interests: [],
      duration: '',
      additionalRequests: '',
    });
    setIsSuccess(false);
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 overflow-y-auto'>
      {/* Backdrop */}
      <div
        className='fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity'
        onClick={() => {
          onClose();
          resetForm();
        }}
      />

      {/* Modal */}
      <div className='flex min-h-full items-center justify-center p-4'>
        <div className='relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
          {/* Close Button */}
          <button
            onClick={() => {
              onClose();
              resetForm();
            }}
            className='absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-10'
          >
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
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>

          {isSuccess ? (
            // Success State
            <div className='p-8 text-center'>
              <div className='w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg
                  className='w-10 h-10 text-green-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                {t.customTour.form.success}
              </h3>
              <p className='text-gray-600 mb-6'>
                {t.customTour.form.successMessage}
              </p>
              <button
                onClick={() => {
                  onClose();
                  resetForm();
                }}
                className='bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors'
              >
                Close
              </button>
            </div>
          ) : (
            // Form State
            <>
              {/* Header */}
              <div className='bg-red-600 p-8 rounded-t-3xl'>
                <h2 className='text-2xl md:text-3xl font-bold text-white mb-2'>
                  {t.customTour.modalTitle}
                </h2>
                <p className='text-white/90'>{t.customTour.modalSubtitle}</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className='p-8 space-y-6'>
                {/* Name & Email */}
                <div className='grid md:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-bold text-gray-900 mb-2'>
                      {t.customTour.form.name}
                    </label>
                    <input
                      type='text'
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-bold text-gray-900 mb-2'>
                      {t.customTour.form.email}
                    </label>
                    <input
                      type='email'
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900'
                    />
                  </div>
                </div>

                {/* Phone & Date */}
                <div className='grid md:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-bold text-gray-900 mb-2'>
                      {t.customTour.form.phone}
                    </label>
                    <input
                      type='tel'
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-bold text-gray-900 mb-2'>
                      {t.customTour.form.date}
                    </label>
                    <input
                      type='date'
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900'
                    />
                  </div>
                </div>

                {/* Group Size */}
                <div>
                  <label className='block text-sm font-bold text-gray-900 mb-2'>
                    {t.customTour.form.groupSize}
                  </label>
                  <select
                    value={formData.groupSize}
                    onChange={(e) =>
                      setFormData({ ...formData, groupSize: e.target.value })
                    }
                    className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 bg-white'
                  >
                    <option value=''>Select...</option>
                    <option value='1-2'>1-2</option>
                    <option value='3-5'>3-5</option>
                    <option value='6-10'>6-10</option>
                    <option value='11-20'>11-20</option>
                    <option value='20+'>20+</option>
                  </select>
                </div>

                {/* Interests */}
                <div>
                  <label className='block text-sm font-bold text-gray-900 mb-3'>
                    {t.customTour.form.interests}
                  </label>
                  <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                    {Object.entries(t.customTour.form.interestOptions).map(
                      ([key, label]) => (
                        <button
                          key={key}
                          type='button'
                          onClick={() => handleInterestToggle(key)}
                          className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                            formData.interests.includes(key)
                              ? 'border-red-500 bg-red-50 text-red-700'
                              : 'border-gray-200 hover:border-gray-300 text-gray-700'
                          }`}
                        >
                          {label}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <label className='block text-sm font-bold text-gray-900 mb-3'>
                    {t.customTour.form.duration}
                  </label>
                  <div className='grid grid-cols-3 gap-3'>
                    {Object.entries(t.customTour.form.durationOptions).map(
                      ([key, label]) => (
                        <button
                          key={key}
                          type='button'
                          onClick={() =>
                            setFormData({ ...formData, duration: key })
                          }
                          className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                            formData.duration === key
                              ? 'border-red-500 bg-red-50 text-red-700'
                              : 'border-gray-200 hover:border-gray-300 text-gray-700'
                          }`}
                        >
                          {label}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Additional Requests */}
                <div>
                  <label className='block text-sm font-bold text-gray-900 mb-2'>
                    {t.customTour.form.additionalRequests}
                  </label>
                  <textarea
                    value={formData.additionalRequests}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        additionalRequests: e.target.value,
                      })
                    }
                    rows={4}
                    className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 resize-none'
                    placeholder='Tell us about any special requirements, places you want to visit, dietary restrictions, etc.'
                  />
                </div>

                {/* Submit Button */}
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl'
                >
                  {isSubmitting ? (
                    <span className='flex items-center justify-center gap-2'>
                      <svg
                        className='animate-spin w-5 h-5'
                        fill='none'
                        viewBox='0 0 24 24'
                      >
                        <circle
                          className='opacity-25'
                          cx='12'
                          cy='12'
                          r='10'
                          stroke='currentColor'
                          strokeWidth='4'
                        />
                        <path
                          className='opacity-75'
                          fill='currentColor'
                          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    t.customTour.form.submit
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function FeaturedTours() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id='tours' className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              {t.tours.sectionTitle}{' '}
              <span className='text-red-600'>
                {t.tours.sectionTitleHighlight}
              </span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              {t.tours.sectionSubtitle}
            </p>
          </div>

          {/* Three Tour Cards Grid */}
          <div className='grid lg:grid-cols-3 gap-8'>
            {/* Audio Guide Tour Card */}
            <div className='bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col'>
              <div className='relative h-56'>
                <Image
                  src='https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
                  alt={t.audioGuideTour.title}
                  fill
                  sizes='(max-width: 1024px) 100vw, 33vw'
                  className='object-cover'
                  unoptimized
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>
                <div className='absolute top-4 left-4'>
                  <span className='bg-amber-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg'>
                    {t.audioGuideTour.badge}
                  </span>
                </div>
                <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1'>
                  <div className='flex items-center space-x-1'>
                    <svg
                      className='w-3.5 h-3.5 text-yellow-400 fill-current'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                    </svg>
                    <span className='text-xs font-bold text-gray-900'>4.9</span>
                  </div>
                </div>
              </div>

              <div className='p-5 flex flex-col flex-grow'>
                <h3 className='text-lg font-bold text-gray-900 mb-2 line-clamp-2'>
                  {t.audioGuideTour.title}
                </h3>

                {/* Price and Duration */}
                <div className='flex items-center gap-3 mb-3 p-2.5 bg-gradient-to-r from-red-50 to-amber-50 rounded-lg'>
                  <div className='text-center'>
                    <div className='text-xl font-bold text-red-600'>
                      {t.audioGuideTour.price}
                    </div>
                    <div className='text-xs text-gray-500'>
                      {t.tours.perPerson}
                    </div>
                  </div>
                  <div className='w-px h-8 bg-gray-300'></div>
                  <div className='text-center'>
                    <div className='text-sm font-semibold text-gray-900'>
                      {t.audioGuideTour.duration}
                    </div>
                    <div className='text-xs text-gray-500'>
                      {t.tours.duration}
                    </div>
                  </div>
                </div>

                <p className='font-body text-gray-600 text-sm mb-4 flex-grow line-clamp-2'>
                  {t.audioGuideTour.shortDescription}
                </p>

                <Link
                  href='/tours/audio-guide'
                  className='block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-xl text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-sm'
                >
                  {t.tours.bookTour}
                </Link>
              </div>
            </div>

            {/* Wine Tour Card */}
            <div className='bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col'>
              <div className='relative h-56'>
                <Image
                  src='https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
                  alt={t.wineTour.title}
                  fill
                  sizes='(max-width: 1024px) 100vw, 33vw'
                  className='object-cover'
                  unoptimized
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>
                <div className='absolute top-4 left-4'>
                  <span className='bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg'>
                    {t.wineTour.badge}
                  </span>
                </div>
                <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1'>
                  <div className='flex items-center space-x-1'>
                    <svg
                      className='w-3.5 h-3.5 text-yellow-400 fill-current'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                    </svg>
                    <span className='text-xs font-bold text-gray-900'>4.8</span>
                  </div>
                </div>
              </div>

              <div className='p-5 flex flex-col flex-grow'>
                <h3 className='text-lg font-bold text-gray-900 mb-2 line-clamp-2'>
                  {t.wineTour.title}
                </h3>

                {/* Price and Duration */}
                <div className='flex items-center gap-3 mb-3 p-2.5 bg-gradient-to-r from-purple-50 to-red-50 rounded-lg'>
                  <div className='text-center'>
                    <div className='text-xl font-bold text-red-600'>
                      {t.wineTour.price}
                    </div>
                    <div className='text-xs text-gray-500'>
                      {t.tours.perPerson}
                    </div>
                  </div>
                  <div className='w-px h-8 bg-gray-300'></div>
                  <div className='text-center'>
                    <div className='text-sm font-semibold text-gray-900'>
                      {t.wineTour.duration}
                    </div>
                    <div className='text-xs text-gray-500'>
                      {t.tours.duration}
                    </div>
                  </div>
                </div>

                <p className='font-body text-gray-600 text-sm mb-4 flex-grow line-clamp-2'>
                  {t.wineTour.shortDescription}
                </p>

                <Link
                  href='/tours/wine-tour'
                  className='block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-xl text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-sm'
                >
                  {t.tours.bookTour}
                </Link>
              </div>
            </div>

            {/* Custom Tour Card */}
            <div className='bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col'>
              <div className='relative h-56'>
                <Image
                  src='https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
                  alt={t.customTour.title}
                  fill
                  sizes='(max-width: 1024px) 100vw, 33vw'
                  className='object-cover'
                  unoptimized
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>
                <div className='absolute top-4 left-4'>
                  <span className='bg-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg'>
                    {t.customTour.badge}
                  </span>
                </div>
                {/* Custom Icon */}
                <div className='absolute bottom-4 left-4 right-4'>
                  <div className='flex flex-wrap gap-2'>
                    <span className='bg-white/90 backdrop-blur-sm text-gray-900 px-2.5 py-1 rounded-full text-xs font-medium'>
                      ✨ {t.customTour.createYourOwn}
                    </span>
                  </div>
                </div>
              </div>

              <div className='p-5 flex flex-col flex-grow'>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                  {t.customTour.title}
                </h3>

                {/* Custom Design Banner */}
                <div className='flex items-center gap-3 mb-3 p-2.5 bg-purple-50 rounded-lg'>
                  <div className='w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center'>
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
                        d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
                      />
                    </svg>
                  </div>
                  <div>
                    <div className='text-sm font-semibold text-gray-900'>
                      Your Vision
                    </div>
                    <div className='text-xs text-gray-500'>Our Expertise</div>
                  </div>
                </div>

                <p className='font-body text-gray-600 text-sm mb-4 flex-grow line-clamp-3'>
                  {t.customTour.shortDescription}
                </p>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className='w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-xl text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-sm'
                >
                  {t.customTour.createYourOwn}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CustomTourModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

function ContactForm() {
  const { t } = useLanguage();
  const [selectedSubject, setSelectedSubject] = useState('');
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);

  const subjectOptions = [
    { value: '', label: t.contact.form.selectTopic },
    { value: 'booking', label: t.contact.form.tourBooking },
    { value: 'group', label: t.contact.form.groupReservations },
    { value: 'information', label: t.contact.form.tourInformation },
    { value: 'feedback', label: t.contact.form.feedback },
    { value: 'other', label: t.contact.form.other },
  ];

  const handleSubjectSelect = (label: string) => {
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
            {t.contact.form.fullName}
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
            {t.contact.form.email}
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
            {t.contact.form.phone}
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
            {t.contact.form.subject}
          </label>
          <div className='relative'>
            <button
              type='button'
              onClick={() => setIsSubjectOpen(!isSubjectOpen)}
              className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-gray-900 text-left flex items-center justify-between bg-white'
            >
              <span
                className={selectedSubject ? 'text-gray-900' : 'text-gray-500'}
              >
                {selectedSubject || t.contact.form.selectTopic}
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
                    onClick={() => handleSubjectSelect(option.label)}
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
          {t.contact.form.message}
        </label>
        <textarea
          id='message'
          name='message'
          rows={5}
          required
          className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-vertical text-gray-900'
          placeholder='Tell us about your inquiry...'
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
          {t.contact.form.newsletter}
        </label>
      </div>

      <button
        type='submit'
        className='w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200'
      >
        {t.contact.form.submit}
      </button>

      <p className='text-sm text-gray-500 text-center'>
        {t.contact.form.responseTime}
      </p>
    </form>
  );
}

function Footer() {
  const { t } = useLanguage();

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
              <span className='sr-only'>Dubrovnik Tours</span>
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
                <span>hello@dubrovnik-tours.com</span>
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
          <div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
            <div>
              <h4 className='font-bold mb-6 text-lg'>{t.footer.followUs}</h4>
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
              <h4 className='font-bold mb-6 text-lg'>
                {t.footer.popularTours}
              </h4>
              <div className='space-y-3'>
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
                <button className='block text-gray-300 hover:text-white transition-colors text-left'>
                  {t.footer.customTour}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='border-t border-gray-700 pt-8 text-center'>
          <p className='text-gray-400'>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section with Background Video */}
      <section className='relative h-screen overflow-hidden'>
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className='absolute inset-0 w-full h-full object-cover'
        >
          <source src='/video/cover.mp4' type='video/mp4' />
        </video>

        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60'></div>

        {/* Transparent Header */}
        <Header variant='transparent' />

        {/* Hero Content */}
        <div className='relative z-10 h-full flex items-center justify-center'>
          <div className='text-center text-white max-w-4xl mx-auto px-4'>
            <h1 className='font-display text-5xl md:text-7xl lg:text-8xl mb-6 leading-none tracking-widest'>
              {t.hero.title} <br />
              <span className='text-yellow-400'>{t.hero.titleHighlight}</span>
            </h1>
            <p className='font-body text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto'>
              {t.hero.subtitle}
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='#tours'
                className='bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg'
              >
                {t.hero.exploreTours}
              </a>
              <button className='border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors'>
                {t.hero.watchVideo}
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
                {t.about.title}{' '}
                <span className='text-red-600'>{t.about.titleHighlight}</span>
              </h2>
              <p className='font-body text-gray-600 mb-8 text-lg'>
                {t.about.subtitle}
              </p>
              <div className='font-body space-y-6 text-lg text-gray-700 leading-relaxed'>
                <p>{t.about.paragraph1}</p>
                <p>{t.about.paragraph2}</p>
                <p>{t.about.paragraph3}</p>
              </div>
              <div className='mt-8 grid grid-cols-3 gap-6'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-red-600 mb-2'>
                    {t.about.stats.experience}
                  </div>
                  <div className='text-sm text-gray-600'>
                    {t.about.stats.experienceLabel}
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-red-600 mb-2'>
                    {t.about.stats.visitors}
                  </div>
                  <div className='text-sm text-gray-600'>
                    {t.about.stats.visitorsLabel}
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-red-600 mb-2'>
                    {t.about.stats.rating}
                  </div>
                  <div className='text-sm text-gray-600'>
                    {t.about.stats.ratingLabel}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              id='contact'
              className='bg-gray-50 rounded-3xl p-8 lg:p-12 order-2 lg:order-2'
            >
              <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                {t.contact.title}{' '}
                <span className='text-red-600'>{t.contact.titleHighlight}</span>
              </h2>
              <p className='font-body text-gray-600 mb-8 text-lg'>
                {t.contact.subtitle}
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
