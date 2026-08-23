import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.calegalsource.com'),
  title: 'CA Legal Source — Get Connected to a California Lawyer Who Can Help',
  description: 'Tell us about your situation and we’ll help connect you with a qualified California attorney who handles cases like yours. Free case evaluation for qualifying matters across all 58 California counties.',
  alternates: {
    canonical: 'https://www.calegalsource.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: 'CA Legal Source — California Legal Assistance & Attorney Referral',
    description: 'Get connected with a California lawyer who can help. Free intake and case evaluation.',
    url: 'https://www.calegalsource.com',
    siteName: 'CA Legal Source',
    images: [
      {
        url: '/icon-512.png',
        width: 512,
        height: 512,
        alt: 'CA Legal Source',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-slate-800 antialiased font-sans flex flex-col selection:bg-[#3d7826]/20 selection:text-[#0f233a]">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
