import type { Metadata } from 'next';
import { getMultilingualMetadata } from '@/lib/i18nRoutes';

// page.tsx is a client component and cannot export metadata, so it lives here.
// Without this the page inherited the homepage title and canonical.
export const metadata: Metadata = getMultilingualMetadata({
  locale: 'es',
  enPath: '/contact',
  esPath: '/es/contacto',
  title: 'Contacto | CA Legal Source',
  description: '¿Preguntas sobre cómo conectarse con un abogado en California? Comuníquese con CA Legal Source por correo o formulario. Evaluación gratuita y confidencial.',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
