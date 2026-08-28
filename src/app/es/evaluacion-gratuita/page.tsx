import React from 'react';
import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { getMultilingualMetadata } from '@/lib/i18nRoutes';
import { Lock } from 'lucide-react';

export const metadata: Metadata = getMultilingualMetadata({
  locale: 'es',
  enPath: '/intake',
  esPath: '/es/evaluacion-gratuita',
  title: 'Solicitud de Evaluación Gratuita en California | CALegalSource',
  description: 'Envíe su consulta legal confidencial para ser evaluado y conectado con un abogado calificado en su condado de California.',
});

export default function SpanishIntakePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        {/* Re-use the interactive multi-step Intake component */}
        <HeroSection />

        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-[#3d7826] font-bold uppercase tracking-wider">
            <Lock className="w-4 h-4" />
            <span>Formulario Seguro y Confidencial en California</span>
          </div>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0f233a]">
            ¿Qué Ocurre Después de Enviar su Solicitud?
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
            1. Evaluamos el área de práctica, la jurisdicción del condado y los hechos del caso.<br />
            2. Cuando corresponde, le conectamos con un abogado calificado en California.<br />
            3. Un representante o abogado se comunicará con usted para su evaluación inicial sin costo.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
