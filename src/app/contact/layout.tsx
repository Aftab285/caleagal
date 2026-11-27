import type { Metadata } from 'next';
import { getMultilingualMetadata } from '@/lib/i18nRoutes';

// page.tsx is a client component and cannot export metadata, so it lives here.
// Without this the page inherited the homepage title and canonical.
export const metadata: Metadata = getMultilingualMetadata({
  locale: 'en',
  enPath: '/contact',
  esPath: '/es/contacto',
  title: 'Contact CA Legal Source | California Legal Help',
  description: 'Questions about getting connected with a California attorney? Contact CA Legal Source by email or online form. Free, confidential case review.',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
