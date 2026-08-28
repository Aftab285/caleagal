import React from 'react';
import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getMultilingualMetadata } from '@/lib/i18nRoutes';
import { ShieldCheck, Accessibility } from 'lucide-react';

export const metadata: Metadata = getMultilingualMetadata({
  locale: 'es',
  enPath: '/accessibility',
  esPath: '/es/accesibilidad',
  title: 'Declaración de Accesibilidad Web | CALegalSource',
  description: 'Declaración de compromiso con la accesibilidad digital, estándares WCAG 2.1 AA y cumplimiento de la Ley ADA en California.',
});

export default function SpanishAccessibilityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        <div className="bg-[#0f233a] text-white py-14 lg:py-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase">
              <Accessibility className="w-3.5 h-3.5" />
              <span>Accesibilidad Digital</span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Declaración de Accesibilidad Web
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              En CALegalSource nos comprometemos a garantizar que nuestros servicios digitales sean accesibles para todas las personas, incluidas aquellas con discapacidades.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 space-y-8 text-sm sm:text-base text-gray-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-playfair text-2xl font-bold text-[#0f233a]">Estándares de Accesibilidad</h2>
            <p>
              Nos esforzamos por cumplir con las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1 en el nivel AA y con los requisitos de la Ley para Estadounidenses con Discapacidades (ADA Title III) y la Ley Unruh de Derechos Civiles de California.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-playfair text-2xl font-bold text-[#0f233a]">Comentarios y Asistencia</h2>
            <p>
              Si tiene dificultades para acceder a cualquier parte de este sitio web o necesita asistencia en un formato accesible, comuníquese con nosotros a questions@dpalaw.com.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
