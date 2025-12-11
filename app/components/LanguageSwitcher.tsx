'use client';

import { useMemo, useState, useEffect, useRef } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { LANGUAGES, LanguageCode } from '../lib/translations';

export default function LanguageSwitcher({
  theme = 'light',
  size = 'md',
}: {
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}) {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const current = useMemo(
    () => LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0],
    [language]
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectLanguage = (code: LanguageCode) => {
    setLanguage(code);
    setOpen(false);
  };

  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const bgColor = theme === 'dark' ? 'bg-white/95' : 'bg-white';
  const ringColor = theme === 'dark' ? 'ring-white/40' : 'ring-gray-200';
  const hoverBg = theme === 'dark' ? 'hover:bg-gray-100' : 'hover:bg-gray-50';

  const buttonSizeClasses =
    size === 'lg' ? 'h-12 px-4' : size === 'sm' ? 'h-9 px-2' : 'h-10 px-3';

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        aria-label='Change language'
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-2 rounded-lg ${buttonSizeClasses} text-sm font-medium ${textColor} border border-white/30 md:border-white/30 md:backdrop-blur-sm hover:bg-white/10 transition-colors`}
      >
        <span className='text-base leading-none'>{current.flag}</span>
        <span className='hidden sm:inline'>{current.label}</span>
        <svg
          className={`w-4 h-4 opacity-80 transition-transform ${
            open ? 'rotate-180' : ''
          }`}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6 9l6 6 6-6'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>

      {open && (
        <div
          className={`absolute right-0 mt-2 w-44 ${bgColor} shadow-xl ring-1 ${ringColor} rounded-xl overflow-hidden z-50 text-gray-900`}
        >
          <ul className='py-1'>
            {LANGUAGES.map((l) => (
              <li key={l.code}>
                <button
                  className={`w-full flex items-center gap-2 px-3 py-2 text-sm text-left ${hoverBg} text-gray-900 ${
                    l.code === language
                      ? 'font-semibold bg-gray-50'
                      : 'font-normal'
                  }`}
                  onClick={() => selectLanguage(l.code)}
                >
                  <span className='text-base leading-none'>{l.flag}</span>
                  <span>{l.label}</span>
                  {l.code === language && (
                    <svg
                      className='w-4 h-4 ml-auto text-red-600'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
