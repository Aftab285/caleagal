import React from 'react';
import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getMultilingualMetadata } from '@/lib/i18nRoutes';
import { Shield, Building2 } from 'lucide-react';

export const metadata: Metadata = getMultilingualMetadata({
  locale: 'es',
  enPath: '/disclaimer',
  esPath: '/es/aviso-legal',
  title: 'Aviso Legal y de Publicidad de Abogados | CALegalSource',
  description: 'Aviso legal reglamentario y estatutario de California de conformidad con las Reglas de Conducta Profesional del State Bar of California.',
});

export default function SpanishDisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        <div className="bg-[#0f233a] text-white py-14 lg:py-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase">
              <Shield className="w-3.5 h-3.5" />
              <span>Divulgaciones Reglamentarias de California</span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Aviso Legal y de Publicidad de Abogados
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Divulgaciones requeridas por las Reglas de Conducta Profesional del State Bar of California y las leyes estatales de California.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 space-y-8 text-sm sm:text-base text-gray-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-playfair text-2xl font-bold text-[#0f233a]">Aviso de Publicidad de Abogados</h2>
            <p>
              Este sitio web contiene publicidad de abogados. CALegalSource es un servicio de conexión legal en línea operado por DPA Attorneys at Law (8880 Rio San Diego Dr., Suite 800, San Diego, CA 92108).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-playfair text-2xl font-bold text-[#0f233a]">Sin Relación Abogado-Cliente</h2>
            <p>
              La transmisión o recepción de información a través de este sitio web no establece ni constituye una relación abogado-cliente. No envíe información confidencial que requiera privilegio legal hasta que haya firmado un acuerdo de representación con un abogado específico.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-playfair text-2xl font-bold text-[#0f233a]">Resultados Anteriores</h2>
            <p>
              Cualquier testimonio, mención de casos o resultados anteriores que aparezcan en el sitio web no constituyen una garantía ni promesa de un resultado similar en su asunto legal.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
