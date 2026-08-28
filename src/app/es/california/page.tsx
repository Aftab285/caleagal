import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { californiaCountiesData } from '@/data/counties';
import { getCountySlugPair, getMultilingualMetadata } from '@/lib/i18nRoutes';
import { MapPin, ChevronRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = getMultilingualMetadata({
  locale: 'es',
  enPath: '/california',
  esPath: '/es/california',
  title: 'Directorio Legal de Condados de California | 58 Condados | CALegalSource',
  description: 'Explore servicios de conexión con abogados en los 58 condados de California, incluyendo Los Ángeles, San Diego, Orange, Santa Clara y Alameda.',
});

export default function SpanishCaliforniaHubPage() {
  const regions = [
    { en: 'Southern California', es: 'Sur de California' },
    { en: 'Bay Area', es: 'Área de la Bahía' },
    { en: 'Central Valley', es: 'Valle Central' },
    { en: 'Central Coast', es: 'Costa Central' },
    { en: 'Northern California', es: 'Norte de California' },
    { en: 'Sierra / Northern Mountains', es: 'Sierra y Montañas del Norte' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Header />

      <main className="flex-grow">
        <div className="bg-[#0f233a] text-white py-14 lg:py-18 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#85db61] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Cobertura en Todo el Estado</span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Directorio Legal por Condados de California
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              Los asuntos legales en California se rigen por las jurisdicciones de la Corte Superior de cada condado. Conozca la cobertura de conexión con abogados y recursos legales en los 58 condados.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-12">
          {regions.map((region) => {
            const countiesInRegion = californiaCountiesData.filter((c) => c.region === region.en);
            return (
              <div key={region.en} className="space-y-4">
                <h2 className="font-playfair text-2xl font-bold text-[#0f233a] border-b border-gray-200 pb-2">
                  {region.es}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {countiesInRegion.map((county) => {
                    const slugPair = getCountySlugPair(county.slug);
                    const spanishName = county.name.replace('County', 'Condado de').replace('Condado de Los Angeles', 'Condado de Los Ángeles');
                    return (
                      <Link
                        key={county.slug}
                        href={`/es/california/${slugPair.es}`}
                        className="p-4 rounded-xl border border-gray-200 bg-white hover:border-[#3d7826] hover:shadow-sm transition-all group flex items-start justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#3d7826]" />
                            <h3 className="font-bold text-sm text-[#0f233a] group-hover:text-[#3d7826] transition-colors">
                              {spanishName}
                            </h3>
                          </div>
                          <p className="text-[11px] text-gray-500 mt-1">
                            Sede: {county.seat} • Pob: {county.population}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#3d7826] mt-1" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
