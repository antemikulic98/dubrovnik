import type { Metadata } from 'next';
import { Lato, Bebas_Neue } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from './lib/LanguageContext';
import AppWrapper from './components/AppWrapper';

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  variable: '--font-bebas',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hop On Hop Off | Dubrovnik Bus Tours',
  description:
    'Explore the Pearl of the Adriatic your way — audio tours, wine experiences, and custom adventures with Dubrovnik Bus Tours.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${lato.variable} ${bebasNeue.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          <AppWrapper>{children}</AppWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
