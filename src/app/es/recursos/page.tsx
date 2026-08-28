import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { legalGuidesData } from '@/data/legalGuides';
import { legalGuideSlugMap, getMultilingualMetadata } from '@/lib/i18nRoutes';
import { Clock, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = getMultilingualMetadata({
  locale: 'es',
  enPath: '/legal-resources',
  esPath: '/es/recursos',
  title: 'Recursos Legales y Guías en California | CALegalSource',
  description: 'Guías legales en español sobre leyes laborales de California, horas extras, derechos de inquilinos, accidentes de auto y pasos para proteger sus derechos.',
});

export default function SpanishLegalResourcesHubPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        <div className="bg-[#0f233a] text-white py-14 lg:py-18 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Centro de Conocimiento Legal en California</span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Recursos y Guías Legales en California
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Explore artículos informativos que explican las leyes de California, pagos de horas extras, derechos de habitabilidad para inquilinos y cómo actuar tras un accidente.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legalGuidesData.map((guide) => {
              const spanishSlug = legalGuideSlugMap[guide.slug]?.es || guide.slug;
              const title = guide.titleEs || guide.title;
              const summary = guide.summaryEs || guide.summary;

              return (
                <div
                  key={guide.id}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xs hover:shadow-md hover:border-[#3d7826]/40 transition-all flex flex-col justify-between group"
                >
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="px-2.5 py-1 rounded-md bg-[#edf7e8] text-[#3d7826] font-semibold text-[11px]">
                        {guide.practiceArea}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {guide.readTime}
                      </span>
                    </div>

                    <h2 className="font-playfair text-xl font-bold text-[#0f233a] group-hover:text-[#3d7826] transition-colors leading-snug">
                      {title}
                    </h2>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {summary}
                    </p>

                    <div className="pt-2 text-[11px] text-gray-400 space-y-0.5">
                      <p>Autor: Equipo de Investigación CALegalSource</p>
                      <p>Revisado: {guide.lastReviewed}</p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <Link
                      href={`/es/recursos/${spanishSlug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#3d7826] hover:underline"
                    >
                      <span>Leer Guía Completa</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      href="/es/evaluacion-gratuita"
                      className="text-xs font-semibold text-gray-400 hover:text-[#0f233a]"
                    >
                      Evaluación Gratuita →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
