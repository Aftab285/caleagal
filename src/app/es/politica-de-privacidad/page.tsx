import React from 'react';
import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getMultilingualMetadata } from '@/lib/i18nRoutes';
import { ShieldCheck, Lock, Building2 } from 'lucide-react';

export const metadata: Metadata = getMultilingualMetadata({
  locale: 'es',
  enPath: '/privacy-policy',
  esPath: '/es/politica-de-privacidad',
  title: 'Política de Privacidad | CALegalSource y DPA Law',
  description: 'Política de privacidad de CALegalSource, cumplimiento con CCPA/CPRA y protección de datos personales de California.',
});

export default function SpanishPrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        <div className="bg-[#0f233a] text-white py-14 lg:py-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Privacidad y Cumplimiento CCPA</span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Política de Privacidad
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Última actualización: Enero 2025. Su privacidad es fundamental para CALegalSource y DPA Attorneys at Law.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 space-y-8 text-sm sm:text-base text-gray-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-playfair text-2xl font-bold text-[#0f233a]">1. Información que Recopilamos</h2>
            <p>
              Cuando usted solicita una evaluación de caso a través de nuestro sitio web, recopilamos información personal básica como su nombre, correo electrónico, número de teléfono, condado de residencia en California y una descripción general de su situación legal.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-playfair text-2xl font-bold text-[#0f233a]">2. Uso de la Información</h2>
            <p>
              Utilizamos la información recopilada exclusivamente para evaluar su caso y conectarlo con un abogado independiente calificado o panelista de DPA Law en California. No vendemos ni compartimos sus datos con fines publicitarios no relacionados.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-playfair text-2xl font-bold text-[#0f233a]">3. Derechos Bajo la Ley de Privacidad del Consumidor de California (CCPA/CPRA)</h2>
            <p>
              Como residente de California, usted tiene derecho a solicitar acceso a sus datos personales, solicitar su eliminación y optar por no permitir la divulgación de su información personal conforme a la legislación estatal aplicable.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-200 space-y-2 text-xs sm:text-sm text-gray-600">
            <p className="font-bold text-gray-900">Contacto de Privacidad:</p>
            <p>DPA Attorneys at Law • 8880 Rio San Diego Dr., Suite 800, San Diego, CA 92108</p>
            <p>Correo: questions@dpalaw.com</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
