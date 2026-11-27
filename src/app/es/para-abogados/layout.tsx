import type { Metadata } from 'next';
import { getMultilingualMetadata } from '@/lib/i18nRoutes';

// page.tsx is a client component and cannot export metadata, so it lives here.
// Without this the page inherited the homepage title and canonical.
export const metadata: Metadata = getMultilingualMetadata({
  locale: 'es',
  enPath: '/for-attorneys',
  esPath: '/es/para-abogados',
  title: 'Para Abogados | Red de CA Legal Source',
  description: 'Abogados de California: conozca cómo recibir consultas de casos preevaluadas de CA Legal Source en todas las áreas de práctica y los 58 condados.',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
