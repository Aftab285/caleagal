import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { all17PracticeAreasData } from '@/data/practiceAreas';
import { practiceAreaSlugMap, getMultilingualMetadata } from '@/lib/i18nRoutes';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = getMultilingualMetadata({
  locale: 'es',
  enPath: '/practice-areas',
  esPath: '/es/areas-de-practica',
  title: 'Áreas de Práctica Legal en California | Conexión con Abogados | CALegalSource',
  description: 'Explore las 17 áreas principales de derecho en California atendidas por CALegalSource: derecho laboral, lesiones personales, derechos de inquilinos, ADA, y más.',
});

export default function SpanishPracticeAreasHub() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        {/* Page Hero */}
        <div className="bg-[#0f233a] text-white py-14 lg:py-18 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Servicio de Conexión Legal en California</span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Áreas de Práctica Legal en California
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Conectamos a residentes de California con abogados calificados en 17 áreas fundamentales del derecho. Seleccione su categoría para conocer las leyes estatales, sus derechos y opciones de evaluación.
            </p>
          </div>
        </div>

        {/* 17 Practice Areas Grid */}
        <section className="py-16 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {all17PracticeAreasData.map((area) => {
                const spanishSlug = practiceAreaSlugMap[area.slug]?.es || area.slug;
                const title = area.nameEs || area.name;
                const desc = area.shortDescEs || area.shortDesc;
                const issues = area.commonIssuesEs || area.commonIssues;

                return (
                  <div
                    key={area.id}
                    className="bg-white rounded-2xl p-6 border border-gray-200 shadow-2xs hover:shadow-md hover:border-[#3d7826]/40 transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <h2 className="font-playfair text-xl font-bold text-[#0f233a] group-hover:text-[#3d7826] transition-colors">
                        {title}
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {desc}
                      </p>

                      <div className="pt-2">
                        <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                          Asuntos Frecuentes Atendidos:
                        </div>
                        <ul className="space-y-1 text-xs text-gray-600">
                          {issues.slice(0, 3).map((issue, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-[#3d7826] font-bold">•</span>
                              <span>{issue}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between">
                      <Link
                        href={`/es/areas-de-practica/${spanishSlug}`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#3d7826] hover:underline"
                      >
                        <span>Explorar {title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <Link
                        href={`/es/evaluacion-gratuita?area=${encodeURIComponent(area.slug)}`}
                        className="text-xs font-semibold text-gray-500 hover:text-[#0f233a]"
                      >
                        Evaluación Gratuita →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
