import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { getMultilingualMetadata } from '@/lib/i18nRoutes';
import { ShieldCheck, Building2, Scale, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = getMultilingualMetadata({
  locale: 'es',
  enPath: '/about',
  esPath: '/es/quienes-somos',
  title: 'Quiénes Somos | Sobre CALegalSource y DPA Law',
  description: 'Conozca la misión de CALegalSource, plataforma operada por DPA Attorneys at Law para conectar a los californianos con abogados calificados en los 58 condados.',
});

export default function SpanishAboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        <div className="bg-[#0f233a] text-white py-14 lg:py-18 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Nuestra Misión Legal</span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Quiénes Somos
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              CALegalSource es un servicio de conexión legal en California operado por DPA Attorneys at Law para brindar acceso confiable, transparente y oportuno a la justicia.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 space-y-12 text-gray-700 leading-relaxed text-sm sm:text-base">
          <section className="space-y-4">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0f233a]">
              Nuestra Misión y Compromiso
            </h2>
            <p>
              El sistema legal de California es complejo. Encontrar al abogado adecuado para un caso de derecho laboral, lesiones personales, disputa de inquilinos o asunto familiar puede ser abrumador. En CALegalSource, conectamos a personas y familias con abogados calificados que conocen las leyes estatales y los tribunales locales de su condado.
            </p>
          </section>

          <section className="p-8 rounded-2xl bg-[#f8fafc] border border-gray-200 space-y-4">
            <div className="flex items-center gap-2 text-[#0f233a] font-bold text-lg font-playfair">
              <Building2 className="w-5 h-5 text-[#3d7826]" />
              <span>Operador de la Plataforma: DPA Attorneys at Law</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              CALegalSource es una plataforma de servicios legales operada por DPA Attorneys at Law.
            </p>
            <div className="text-xs text-gray-600 space-y-1 pl-4 border-l-2 border-[#3d7826]">
              <p className="font-semibold text-gray-800">Oficina Principal en San Diego:</p>
              <p>8880 Rio San Diego Dr., Suite 800</p>
              <p>San Diego, CA 92108</p>
              <p>Correo Electrónico: questions@dpalaw.com</p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold text-[#0f233a]">
              Valores Fundamentales
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-2xs space-y-2">
                <div className="flex items-center gap-2 text-[#3d7826] font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confidencialidad Rigurosa</span>
                </div>
                <p className="text-xs text-gray-600">
                  Toda la información enviada a través de nuestros formularios se maneja con estricta confidencialidad.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-2xs space-y-2">
                <div className="flex items-center gap-2 text-[#3d7826] font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Abogados Calificados</span>
                </div>
                <p className="text-xs text-gray-600">
                  Verificamos las credenciales y la licencia ante el State Bar of California de todos los abogados participantes.
                </p>
              </div>
            </div>
          </section>

          <div className="pt-6 text-center">
            <Link
              href="/es/evaluacion-gratuita"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#3d7826] hover:bg-[#32641e] text-white font-bold text-base shadow-xl transition-all"
            >
              <span>Solicitar una Evaluación Gratuita</span>
              <ArrowRight className="w-5 h-5 text-[#85db61]" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
