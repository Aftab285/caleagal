import React from 'react';
import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getMultilingualMetadata } from '@/lib/i18nRoutes';
import { ShieldAlert, Scale } from 'lucide-react';

export const metadata: Metadata = getMultilingualMetadata({
  locale: 'es',
  enPath: '/terms-of-use',
  esPath: '/es/terminos-de-uso',
  title: 'Términos de Uso | CALegalSource y DPA Law',
  description: 'Términos y condiciones de uso de la plataforma de conexión legal CALegalSource en California.',
});

export default function SpanishTermsOfUsePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        <div className="bg-[#0f233a] text-white py-14 lg:py-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase">
              <Scale className="w-3.5 h-3.5" />
              <span>Condiciones Legales de la Plataforma</span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Términos de Uso
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Términos y condiciones de uso aplicables al acceder a CALegalSource.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 space-y-8 text-sm sm:text-base text-gray-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-playfair text-2xl font-bold text-[#0f233a]">1. Naturaleza del Servicio</h2>
            <p>
              CALegalSource es un servicio de conexión e información legal en California operado por DPA Attorneys at Law. El envío de una consulta a través de este sitio no crea una relación abogado-cliente hasta que se formalice un acuerdo por escrito con un abogado específico.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-playfair text-2xl font-bold text-[#0f233a]">2. Sin Garantías de Resultados</h2>
            <p>
              Los resultados anteriores no garantizan un desenlace similar. Ninguna información en este sitio web debe interpretarse como asesoramiento legal vinculante ni como garantía de resultados futuros.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-playfair text-2xl font-bold text-[#0f233a]">3. Jurisdicción y Ley Aplicable</h2>
            <p>
              Estos términos se rigen por las leyes del Estado de California. Cualquier disputa relacionada con el uso de este sitio se someterá a la jurisdicción de los tribunales competentes en el Condado de San Diego, California.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
