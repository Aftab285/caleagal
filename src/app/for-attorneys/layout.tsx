import type { Metadata } from 'next';
import { getMultilingualMetadata } from '@/lib/i18nRoutes';

// page.tsx is a client component and cannot export metadata, so it lives here.
// Without this the page inherited the homepage title and canonical.
export const metadata: Metadata = getMultilingualMetadata({
  locale: 'en',
  enPath: '/for-attorneys',
  esPath: '/es/para-abogados',
  title: 'For Attorneys | Join the CA Legal Source Network',
  description: 'California attorneys: learn how to receive pre-screened case inquiries from CA Legal Source across practice areas and all 58 counties.',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
